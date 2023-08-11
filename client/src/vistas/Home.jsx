import React from "react";

import AllDogs from "../Components/AllDogs";

import FilterByName from "../Components/FilterByName";
import FilterByTemperament from "../Components/FilterByTemperament";
import Nav from "../Components/Nav";
import "../Components/ComponentsStyles/Home.css";
import FilterByWeigtht from "../Components/FilterByWeight";
import Refresh from "../Components/Refresh";
import FilterByCreator from "../Components/FilterByCreator";
import "../Components/ComponentsStyles/Nav.css";

import FIlterByheight from "../Components/FIlterByheight";

export default function Home() {
  return (
    <div>
      <Nav />

      <div className="createContainer"></div>
      <div className="homeContainer">
        <div className="filter-container">
          <FIlterByheight />

          <FilterByWeigtht />

          <FilterByCreator />
          <FilterByTemperament />
          <FilterByName />
          <Refresh />
        </div>
      </div>
      <div className="allDogsContainer">
        <AllDogs />
      </div>
    </div>
  );
}
