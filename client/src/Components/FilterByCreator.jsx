import React from "react";
import { useDispatch } from "react-redux";
import { filterBycreator } from "../Redux/Actions";

const FilterByCreator = () => {
  let dispatch = useDispatch();
  function handleCreator(e) {
    dispatch(filterBycreator(e.target.value));
  }

  return (
    <div>
      <label>Filter By Creator: </label>
      <select name="" id="" onChange={handleCreator}>
        <option value={"Api"}>Api</option>
        <option value={"Db"}>DataBase</option>
      </select>
    </div>
  );
};

export default FilterByCreator;
