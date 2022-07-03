import React from "react";
import landing from "../images/landing.jpg";
import { Link } from "react-router-dom";

export default function () {
  return (
    <div className="landingContainer">
      <img src={landing} alt="" />
      <Link to={"/home"}>
        <button>START</button>
      </Link>
    </div>
  );
}
