import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { getDogs, searchByName } from "../Redux/Actions";

import "./ComponentsStyles/Nav.css";

export default function SearchBar() {
  const [inputText, setInputText] = useState("");
  let location = useLocation();
  console.log(location);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDogs());
  }, [dispatch]);

  const handleChange = function (e) {
    setInputText(e.target.value);
    dispatch(searchByName(inputText));
  };

  return (
    <div className={location.pathname === "/myOwnDogs" ? "labelStyleNone" : ""}>
      <label className="labelStyle" htmlFor="searchBar">
        Find your Dog
      </label>
      <input
        type="text"
        name="searchBar"
        value={inputText}
        onChange={handleChange}
      />
    </div>
  );
}
