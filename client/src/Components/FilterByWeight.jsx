import React from "react";
import { useDispatch } from "react-redux";

import { filterByMaxWeigth } from "../Redux/Actions";

export default function FilterByWeigtht() {
  let dispatch = useDispatch();
  function handleWeight(e) {
    dispatch(filterByMaxWeigth(e.target.value));
    // console.log(e.target.value);
  }

  return (
    <div>
      <label>Filter By Weight: </label>
      <select name="" id="" onChange={handleWeight}>
        <option value={"max_weight"}>Max-Weight</option>
        <option value={"min_weight"}>Min-Weight</option>
      </select>
    </div>
  );
}
