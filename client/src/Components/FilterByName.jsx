import React from "react";
import { useDispatch } from "react-redux";
import { getDogs, orderByNameDesc, orderByNameAsc } from "../Redux/Actions";

import { useState, useEffect } from "react";
import "./ComponentsStyles/FilterByName.css";

export default function FilterByName() {
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDogs());
  }, [dispatch]);

  const [filter, setfilter] = useState(false);

  const handleClick = () => {
    dispatch(orderByNameDesc());

    setfilter(() => !filter);
  };
  const handleClick2 = () => {
    dispatch(orderByNameAsc());

    setfilter(() => !filter);
  };

  return (
    <div className="filter-1">
      <div className="button-Container">
        <button className="A-Z-Button" onClick={handleClick}>
          Order Z-A
        </button>{" "}
        <button className="A-Z-Button" onClick={handleClick2}>
          Order A-Z
        </button>
      </div>
    </div>
  );
}
