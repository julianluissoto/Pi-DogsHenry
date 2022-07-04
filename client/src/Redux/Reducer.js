let inititalState = {
  allDogs: [],
  allTemperaments: [],
  dogDetail: {},
  backupDogsForFiltering: [],
  filters: [],
  createDog: {},
  myDogs: [],
};
export default function appReducer(state = inititalState, action) {
  switch (action.type) {
    case "getAllDogs":
      return {
        ...state,
        allDogs: action.payload,
        backupDogsForFiltering: action.payload,
        filters: state.allDogs,
      };
    case "getAllTemperaments": {
      return {
        ...state,
        allTemperaments: action.payload,
      };
    }
    case "getDogDetails":
      return {
        ...state,
        dogDetail: action.payload,
      };
    case "cleanDetails":
      return {
        ...state,
        dogDetail: {},
      };
    case "createDog":
      return {
        ...state,
        createDog: action.payload,
      };
    case "filterDogsByName":
      return {
        ...state,
        filters: state.backupDogsForFiltering?.filter((dog) =>
          dog.Nombre.toLowerCase().includes(action.payload.toLowerCase())
        ),
      };
    case "orderByNameD":
      return {
        ...state,
        filters: [...state.filters].sort((a, b) => {
          // magic trick by rafa
          if (a.Nombre > b.Nombre) return -1;
          if (a.Nombre < b.Nombre) return 1;
        }),
      };
    case "orderByNameA":
      return {
        ...state,
        filters: [...state.filters].sort((a, b) => {
          if (a.Nombre < b.Nombre) return -1;
          if (a.Nombre > b.Nombre) return 1;
        }),
      };
    case "filterDogsByTemp":
      return {
        ...state,
        filters: action.payload,
      };
    case "filterDogsByWeight":
      const sortedByWeight =
        action.payload === "min_weight"
          ? state.backupDogsForFiltering.sort((a, b) => {
              if (parseInt(a.PesoMinimo) > parseInt(b.PesoMinimo)) {
                return 1;
              }
              if (parseInt(b.PesoMinimo) > parseInt(a.PesoMinimo)) {
                return -1;
              }
              return 0;
            })
          : state.filters.sort((a, b) => {
              if (parseInt(a.PesoMaximo) > parseInt(b.PesoMaximo)) {
                return -1;
              }
              if (parseInt(b.PesoMaximo) > parseInt(a.PesoMaximo)) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        filters: [...sortedByWeight],
      };

    case "myDogs":
      return {
        ...state,
        myDogs: action.payload,
      };
    case "deleteDogFromDB":
      return {
        ...state,
        myDogs: state.myDogs.filter((el) => el.Nombre !== action.payload),
      };

    case "filterCreator":
      if (action.payload === "Api") {
        return {
          ...state,
          filters: state.allDogs,
        };
      } else if (action.payload === "Db") {
        return {
          ...state,
          filters: state.myDogs,
        };
      }

    default:
      return state;
  }
}
