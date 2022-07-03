const axios = require("axios");
const getAllDogs = "getAllDogs";
const getAllTemperaments = "getAllTemperaments";
const getDogDetails = "getDogDetails";
const cleanDetails = "cleanDetails";
const filterDogsByName = "filterDogsByName";
const backupDogsForFiltering = "filterByName";
const orderByNameD = "orderByNameD";
const orderByNameA = "orderByNameA";
const filterDogsByTemp = "filterDogsByTemp";
const myDogs = "myDogs";
const filterDogsByWeight = "filterDogsByWeight";
const deleteDogFromDB = "deleteDogFromDB";

export const getDogs = () => {
  return async (dispatch) => {
    try {
      let allDogs = await axios.get("http://localhost:3001/dogs");

      dispatch({ type: getAllDogs, payload: allDogs.data.allDogsRaces });
    } catch {
      alert("No se Obtuvo respuesta");
    }
  };
};

export const getTemperaments = () => {
  return async (dispatch) => {
    let allTemperaments = await axios.get("http://localHost:3001/temperaments");
    dispatch({
      type: getAllTemperaments,
      payload: allTemperaments.data.temperamentList,
    });
  };
};

export const getdogDetails = (id) => {
  return async (dispatch) => {
    let dogDetails = await axios.get(`http://localHost:3001/dog/${id}`);

    dispatch({ type: getDogDetails, payload: dogDetails.data });
  };
};

export const createDog = (el) => {
  return async () => {
    try {
      let createDog = await axios.post("http://localHost:3001/dogs", el);
      let createdMessage = await createDog;
      alert(createdMessage.data);
    } catch (error) {
      console.log(error);
    }
    //
  };
};
export const cleanDetail = () => {
  return (dispatch) => {
    dispatch({ type: cleanDetails });
  };
};
export const filterByName = (name) => {
  return async (dispatch) => {
    let findedDog = await axios.get(`http://localhost:3001/dog?name=${name}`);
    //  console.log(findedDog.data);
  };
};

export const orderByNameDesc = () => {
  return (dispatch) => {
    dispatch({ type: orderByNameD });
  };
};
export const orderByNameAsc = () => {
  return (dispatch) => {
    dispatch({ type: orderByNameA });
  };
};
export const searchByName = (name) => {
  return (dispatch) => {
    dispatch({ type: filterDogsByName, payload: name });
  };
};

export const filterByTemperament = (temp) => {
  return function (dispatch) {
    return axios.get("http://localHost:3001/dogs").then((resp) => {
      let dogFound = resp.data.allDogsRaces.filter((el) => {
        return el.Temperamento && el.Temperamento.split(", ").includes(temp);
      });
      dispatch({ type: filterDogsByTemp, payload: dogFound });
    });
  };
};
export const showMyDogs = () => {
  return function (dispatch) {
    return axios.get("http://localHost:3001/dogs").then((resp) => {
      let MydogsFound = resp.data.allDogsRaces.filter((el) => {
        return el.id.length > 5;
      });
      dispatch({ type: myDogs, payload: MydogsFound });
    });
  };
};

export const filterByMaxWeigth = (sortedWeigthType) => {
  return (dispatch) => {
    dispatch({ type: filterDogsByWeight, payload: sortedWeigthType });
  };
};
export const deleteDog = (dogToDeleteId) => {
  return function () {
    axios
      .delete(`http://localHost:3001/dog/${dogToDeleteId}`)
      .then((resp) => {
        alert(resp.data);
      })
      .catch((e) => console.log(e));
  };

  /* return function (dispatch) {
    return dispatch({ type: deleteDogFromDB, payload: dogToDelete });
  }; */
};
