//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require("./src/app.js");
const { conn } = require("./src/db.js");

const axios = require("axios");
const { Dog, Temperament } = require("./src/db");

async function precharge() {
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
  } catch (error) {
    console.log(error);
  }
}

// Syncing all the models at once.
conn.sync({ force: false }).then( () => {
  
  server.listen(process.env.PORT, () => {
    console.log("server listening at 3001"); // eslint-disable-line no-console
  });
});
