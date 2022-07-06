import React from "react";

import { Link } from "react-router-dom";
import img from "../images/enterIMG.gif";
import "./ComponentsStyles/Landing.css";
import letsGo from "../images/go.png";

export default function Landing() {
  return (
    <div className="landingBackground">
      <Link to={"/home"}>
        {" "}
        <div className="icons-container">
          <img className="enterIcon" src={img} alt="imagenEnter" />
          <img className="lets-go-icon" src={letsGo} alt="" />
        </div>
      </Link>
    </div>
  );
}
