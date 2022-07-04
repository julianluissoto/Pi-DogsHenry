import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDogs, orderByNameDesc, orderByNameAsc } from "../Redux/Actions";

import { useState, useEffect } from "react";

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
    <div>
      <div>
        <button onClick={handleClick}>Order Z-A</button>
      </div>
      <div>
        {" "}
        <button onClick={handleClick2}>Order A-Z</button>
      </div>
    </div>
  );
}
