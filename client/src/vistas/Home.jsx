import React from "react";
import { Link } from "react-router-dom";
import AllDogs from "../Components/AllDogs";

import FilterByName from "../Components/FilterByName";
import FilterByTemperament from "../Components/FilterByTemperament";
import Nav from "../Components/Nav";
import "../Components/ComponentsStyles/Home.css";
import FilterByWeigtht from "../Components/FilterByWeight";
import Refresh from "../Components/Refresh";
import FilterByCreator from "../Components/FilterByCreator";

export default function Home() {
  return (
    <div>
      <Nav />
      <div>
        {" "}
        <h1 className="title">HENRY DOGS</h1>
      </div>

      <div className="createContainer">
        <Link to={"/form"}>
          <button className="button-72">Create your Dog</button>
        </Link>
        <div>
          <Refresh />
        </div>
      </div>
      <div className="homeContainer">
        <div className="filterStyles">
          <FilterByName />
        </div>
        <div className="filterStyles">
          <FilterByTemperament />
        </div>
        <div>
          <FilterByCreator />
        </div>

        <div className="filterStyles">
          <FilterByWeigtht />
        </div>
      </div>
      <div className="allDogsContainer">
        <AllDogs />
      </div>
    </div>
  );
}
