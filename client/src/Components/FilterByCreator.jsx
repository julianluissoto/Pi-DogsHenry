import React from "react";
import { useDispatch } from "react-redux";
import { filterBycreator, getDogs, showMyDogs } from "../Redux/Actions";

const FilterByCreator = () => {
  let dispatch = useDispatch();
  function handleCreator(e) {
    if (e.target.value === "Api") {
      dispatch(getDogs());
    }
    if (e.target.value === "Db") {
      dispatch(showMyDogs()).then((dog) => {
        dispatch(filterBycreator(e.target.value));
      });
    }
  }

  return (
    <div className="filter">
      <label>Filter By Creator: </label>
      <select name="" id="" onChange={handleCreator}>
        <option value="">Select A Source</option>
        <option value={"Api"}>Api</option>
        <option value={"Db"}>DataBase</option>
      </select>
    </div>
  );
};

export default FilterByCreator;
