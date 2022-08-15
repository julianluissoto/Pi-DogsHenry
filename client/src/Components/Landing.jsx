import React from "react";

import { Link } from "react-router-dom";

import "./ComponentsStyles/Landing.css";
import letsGo from "../images/go.png";
import WriteMachine from "./TypeWriter";

export default function Landing() {
  return (
    <div className="landingBackground  ">
      <div className="lets-Go-container">
        <Link to={"/home"}>
          <img className="lets-Go-" src={letsGo} alt="" />
        </Link>
      </div>

      <div>
        <WriteMachine text={["Welcome To Henry Dogs"]} />
      </div>
    </div>
  );
}
