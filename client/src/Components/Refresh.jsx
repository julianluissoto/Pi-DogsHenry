import React from "react";
import { useDispatch } from "react-redux";
import { getDogs } from "../Redux/Actions";

const Refresh = () => {
  let dispatch = useDispatch();
  const handleRefresh = () => {
    dispatch(getDogs());
  };
  return (
    <div>
      <button className="refresh-Button" onClick={handleRefresh}>
        REFRESH
      </button>
    </div>
  );
};

export default Refresh;
