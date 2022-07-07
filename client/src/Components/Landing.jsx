import React from "react";

import { Link } from "react-router-dom";

import "./ComponentsStyles/Landing.css";
import letsGo from "../images/go.png";
import WriteMachine from "./TypeWriter";

export default function Landing() {
  return (
    <div className="landingBackground">
      <div className="greatings-container">
        {" "}
        {/*  <h1 className="welcome-greating">I'm Julian Soto</h1>
        <span className="maquina-escribir">Welcome to Henry Dogs</span> */}
      </div>

      <Link className="lets-Go-container" to={"/home"}>
        {" "}
        {/* <img className="enterIcon" src={img} alt="imagenEnter" /> */}
        <img className="enterIcon" src={letsGo} alt="" />
      </Link>
      <div>
        <WriteMachine text={["Welcome To Henry Dogs"]} />
      </div>
    </div>
  );
}
