import React from "react";
import landing from "../images/landing.jpg";
import { Link } from "react-router-dom";
import img from "../images/enterIMG.gif";
import "./ComponentsStyles/Landing.css";

export default function () {
  return (
    <div className="landingContainer">
      <img src={landing} alt="" />
      <Link to={"/home"}>
        <img className="enterIcon" src={img} alt="imagenEnter" />
      </Link>
      <div></div>
    </div>
  );
}
