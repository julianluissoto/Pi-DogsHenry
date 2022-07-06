import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getDogs,
  getTemperaments,
  filterByTemperament,
} from "../Redux/Actions";

export default function FilterByTemperament() {
  let dispatch = useDispatch();
  useEffect(() => {
    // dispatch(getDogs());
    dispatch(getTemperaments());
  }, [dispatch]);

  let temperamentsList = useSelector((state) => state.allTemperaments);

  function handleTemperaments(e) {
    if (e.target.value === "All") return dispatch(getDogs());
    dispatch(filterByTemperament(e.target.value));
  }
  return (
    <div>
      <label>Filter By Temperament: </label>
      <select name="" id="" onChange={handleTemperaments}>
        <option value={"All"}>All</option>
        {temperamentsList?.map((temp) => {
          return (
            <option key={temp} value={temp}>
              {temp}
            </option>
          );
        })}
      </select>
    </div>
  );
}
