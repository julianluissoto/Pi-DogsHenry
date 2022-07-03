import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import "./ComponentsStyles/Nav.css";

export default function Nav() {
  return (
    <div className="navContainer">
      <Link to="/myOwnDogs">
        <span className="span">My Dogs</span>
      </Link>
      <Link to="/home">
        <span className="span">Home</span>
      </Link>
      <SearchBar />
    </div>
  );
}
