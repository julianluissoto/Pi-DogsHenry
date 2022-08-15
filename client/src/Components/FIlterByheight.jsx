import React from "react";
import { useDispatch } from "react-redux";
import { filterByHeight } from "../Redux/Actions";

const FIlterByheight = () => {
  let dispatch = useDispatch();
  function handleHeight(e) {
    console.log(e.target.value);
    dispatch(filterByHeight(e.target.value));
    // console.log(e.target.value);
  }

  return (
    <div className="filter">
      <label>Filter By height: </label>
      <select name="" id="" onChange={handleHeight}>
        <option value={"max_height"}>Max-Height</option>
        <option value={"min_height"}>Min-Height</option>
      </select>
    </div>
  );
};

export default FIlterByheight;
