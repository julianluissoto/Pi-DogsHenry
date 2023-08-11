import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import "./ComponentsStyles/Nav.css";
import home from "../images/home.png";

import "../Components/ComponentsStyles/Home.css";
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
      <Link to={"/form"}>
        <h2 className="createDog">CREATE YOUR DOG </h2>
      </Link>
    </div>
  );
}
