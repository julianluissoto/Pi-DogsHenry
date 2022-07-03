import React from "react";
import { Link } from "react-router-dom";
import AllDogs from "../Components/AllDogs";

import FilterByName from "../Components/FilterByName";
import FilterByTemperament from "../Components/FilterByTemperament";
import Nav from "../Components/Nav";
import "../Components/ComponentsStyles/Home.css";
import FilterByWeigtht from "../Components/FilterByWeight";

export default function Home() {
  return (
    <div>
      <Nav />
      <div className="header">
        <h1>Mi App de Perros Henry</h1>
        <Link to={"/form"}>
          <button>Create your Dog</button>
        </Link>

        <div>
          <FilterByName />
        </div>
        <FilterByTemperament />
        <div>
          <FilterByWeigtht />
        </div>
        <div className="allDogsContainer">
          <AllDogs />
        </div>
      </div>
    </div>
  );
}
