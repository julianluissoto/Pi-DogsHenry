import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import "./ComponentsStyles/Nav.css";
import home from "../images/home.png";

export default function Nav() {
  return (
    <div className="navContainer">
      <Link to="/myOwnDogs">
        <span className="span">My Dogs</span>
      </Link>
      <Link to="/home">
        <img className="home-Logo" src={home} alt="" />
      </Link>
      <SearchBar />
    </div>
  );
}
