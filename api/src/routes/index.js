const { Router } = require("express");
const axios = require("axios");
const { Dog, Temperament } = require("../db.js");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
//mis base de datos desde la Api

const router = Router();

router.get("/dogs", async (req, res) => {
  try {
    const resDogs = await axios.get("https://api.thedogapi.com/v1/breeds");
    const datosApi = resDogs.data;

    const dataBaseDogs = await Dog.findAll({
      include: Temperament,
    });

    const dBFormateada = dataBaseDogs.map((el) => {
      const tempListDog = el.temperaments.map(
        (el) => el.dataValues.temperament
      );

      return {
        Nombre: el.name,
        PesoMinimo: el.minWeight,
        PesoMaximo: el.maxWeight,
        AlturaMaxima: el.maxHeight,
        AlturaMinima: el.minHeight,
        VidaMaxima: el.maxLife,
        VidaMinima: el.minLife,
        Temperamento: tempListDog.join(", "),
        id: el.id,
      };
    });

    const apiFormateada = await Promise.all(
      datosApi.map(async (el) => {
        try {
          const imageResponse = await axios.get(
            `https://api.thedogapi.com/v1/images/${el.reference_image_id}`
          );

          const image = imageResponse.data.url || "";
          return {
            Nombre: el.name,
            PesoMaximo: el.weight.metric.split(" ")[2],
            PesoMinimo: el.weight.metric.split(" ")[0],
            AlturaMaxima: el.height.metric.split(" ")[2],
            AlturaMinima: el.height.metric.split(" ")[0],
            VidaMinima: el.life_span.split(" ")[0],
            VidaMaxima: el.life_span.split(" ")[2],
            Temperamento: el.temperament,
            image: image,
            id: el.id,
          };
        } catch (error) {
          console.error("Error fetching image:", error);
          return {
            Nombre: el.name,
            PesoMaximo: el.weight.metric.split(" ")[2],
            PesoMinimo: el.weight.metric.split(" ")[0],
            AlturaMaxima: el.height.metric.split(" ")[2],
            AlturaMinima: el.height.metric.split(" ")[0],
            VidaMinima: el.life_span.split(" ")[0],
            VidaMaxima: el.life_span.split(" ")[2],
            Temperamento: el.temperament,
            image: "", // Set image to an empty string if fetching image fails
            id: el.id,
          };
        }
      })
    );

    const dataBaseComplete = [...apiFormateada, ...dBFormateada];
    res.json({ allDogsRaces: dataBaseComplete });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/dog", async (req, res) => {
  // en esta ruta solicitamos un perro por su raza enviado por query es decir
  // /dog?name = Pug
  const { name } = req.query;
  if (!name) res.send("Debe ingresar una Raza para la busqueda");
  try {
    const resDogs = await axios.get("https://api.thedogapi.com/v1/breeds");
    const datosApi = resDogs.data;
    const dogRaceFromApi = datosApi.filter((element) => element.name == name);

    const dataBaseDogs = await Dog.findAll();
    //aqui traigo las razas desde la base de datos
    //const dBName = dataBaseDogs.map((el) => el.name);
    // AQUI mapeo el array que me devuelve el findAll()
    const dataBaseComplete = [...dogRaceFromApi, ...dataBaseDogs];
    // en esta linea junto ambas bases de datos usando el sprea operator
    /* let findedDog = dataBaseComplete.filter((el) =>
      el.includes(name[0].toUpperCase() + name.slice(1))
    ); */

    if (dataBaseComplete.length < 1)
      return res.send("No se encontro la raza solictada");
    const objDog = dataBaseComplete[0];
    const dogFormat = {
      Nombre: objDog.name,
      Peso: objDog.weight.metric,
      PesoMaximo: objDog.weight.metric.split(" ")[2],
      PesoMinimo: objDog.weight.metric.split(" ")[0],
      AlturaMaxima: objDog.height.metric.split(" ")[2],
      AlturaMinima: objDog.height.metric.split(" ")[0],
      VidaMaxima: objDog.life_span.split(" ")[2],
      VidaMinima: objDog.life_span.split(" ")[0],
      Temperamento: objDog.temperament,
      Id: objDog.id,
    };

    return res.status(200).json(dogFormat);
  } catch (error) {
    console.log(error);
  }

  // aqui modificamos la query ingresada en su primera letra y la transformamos  a mayusculas
  // par evitar errores de busqueda por case

  /* if (!dogsRaceName.includes(name)) {
    res.send("No existe la raza buscada");
  } */
});

router.get("/dog/:id", async (req, res) => {
  // en esta ruta solicitamos una raza  de perros por Id que nos llega desde los params
  const { id } = req.params;
  try {
    if (id.length > 10) {
      const dataBaseDogs = await Dog.findAll({
        where: { id: id },
      });

      if (!dataBaseDogs)
        return res.send(`No existe el Perro con el ID: ${id} `);

      let dogFindedFormat = {
        Nombre: dataBaseDogs[0].name,
        PesoMinimo: dataBaseDogs[0].weight.metric.split(" ")[0],
        PesoMaximo: dataBaseDogs[0].weight.metric.split(" ")[2],
        AlturaMinima: dataBaseDogs[0].height.metric.split(" ")[0],
        AlturaMaxima: dataBaseDogs[0].height.metric.split(" ")[2],
        VidaMaxima: dataBaseDogs[0].life_span.split(" ")[2],
        VidaMinima: dataBaseDogs[0].life_span.split(" ")[0],
        Temperamento: dataBaseDogs[0].temperamentName,
        Id: dataBaseDogs[0].id,
        image: dataBaseDogs[0].image,
      };
      return res.json({ dogFindedFormat });
    }
    const resDogs = await axios.get("https://api.thedogapi.com/v1/breeds");
    const datosApi = resDogs.data;
    const findedDogByIdApi = datosApi.filter((el) => el.id == id);

    if (!findedDogByIdApi)
      return res.send(`No se encontro el perro con el id ${id} enviado`);

    const dataBaseComplete = findedDogByIdApi[0];
    if (dataBaseComplete === undefined)
      return res.send(
        `No existe el Perro con el ID: ${id} intente con otro ID`
      );

    let dogFindedFormat = {
      Nombre: dataBaseComplete.name,
      PesoMinimo: dataBaseComplete.weight.metric.split(" ")[0],
      PesoMaximo: dataBaseComplete.weight.metric.split(" ")[2],
      AlturaMinima: dataBaseComplete.height.metric.split(" ")[0],
      AlturaMaxima: dataBaseComplete.height.metric.split(" ")[2],
      VidaMaxima: dataBaseComplete.life_span.split(" ")[2],
      VidaMinima: dataBaseComplete.life_span.split(" ")[0],
      Temperamento: dataBaseComplete.temperament,
      Id: dataBaseComplete.id,
      image: dataBaseComplete.image.url,
    };

    return res.json({ dogFindedFormat });
  } catch (error) {
    console.log(error);
  }
});

router.get("/temperaments", async (req, res) => {
  //llamo la api y veo que me responde
  try {
    const resDogs = await axios.get("https://api.thedogapi.com/v1/breeds");
    const datosApi = resDogs.data;
    let tempList = datosApi
      //mapeo la lista de la api en su id temperamento,
      //esto me devuelve un array el cual vuelvo a mapear separando los elementos donde haya una ","
      //a partir de esto armo un nuevo set de array para eliminar los repetidos
      // y aplico un flat para incluir los subsarray y por ultimo un sort para
      //ordenarlos alfabeticamente
      .map((dog) =>
        dog.temperament ? dog.temperament : "No hay info de temperamento"
      )
      .map((dog) => dog.split(", "));

    let uniqueListOfTemp = [...new Set(tempList.flat())].sort(); // aqui creo un set unico sin repeticiones

    uniqueListOfTemp.map((temp) => {
      Temperament.findOrCreate({
        //aqui creo la base de datos con los temperamentos que filtre de la api
        where: {
          temperament: temp,
        },
      });
    });

    const tempListComplete = await Temperament.findAll(); // aqui busco todos los temperamentos de mi DB
    const onlyDataTemp = tempListComplete.map((el) => {
      return el.temperament;
    }); // y aqui solo extraigo la prop temperamento

    res.json({ temperamentList: onlyDataTemp });
  } catch (error) {
    console.log(error);
  }

  //ver la opcions de hacer la precarga de los temperamentos en index.js del
});

router.post("/dogs", async (req, res) => {
  const {
    name,
    maxLife,
    minLife,

    maxWeight,

    minWeight,
    temperament,
    image,
    minHeight,
    maxHeight,
  } = req.body;
  if (
    !name ||
    !maxWeight ||
    !minWeight ||
    !maxHeight ||
    !minHeight ||
    !temperament
  )
    res.send("FALTA INGRESAR DATOS");
  /* 
  const dataBaseDogs = await Dog.findAll();
  const dbDogsTemp = dataBaseDogs.map((el) => el.temperament); */

  try {
    const newDog = await Dog.create({
      name,

      maxWeight,
      minWeight,
      maxHeight,
      minHeight,
      maxLife,
      minLife,
      image,
      temperament,
    });
    //const dogsTemp = await Temperament.findAll({ where: { temperament } }); esta opcion es probando enviar
    //el name del temp en lugar del id desde el frot

    //const temperamentFrombody = temperament.ssplit(",");
    // recibo el temperamento desde body y lo tranformo a array
    // para luego en setTemperaments pasaserlo como array y que lo puedo asignar
    await newDog.addTemperaments(temperament);
    let aux = await Dog.findByPk(newDog.id, {
      include: Temperament,
    });
    res.status(200).send("NEW DOG CREATED");
  } catch (error) {
    console.log(error);
    res.send("GOD ALREADY EXIST");
  }
});

router.delete("/dog/:id", async (req, res) => {
  let { id } = req.params;
  console.log(id);
  try {
    const deleteDog = await Dog.destroy({ where: { id } });
    res.send("DOG deleted ");
  } catch (error) {
    console.log(error);
  }
});

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = router;
