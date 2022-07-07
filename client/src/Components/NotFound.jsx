import React from "react";

import Nav from "./Nav";
import background from "../images/underconstruction.jpg";

function NotFound() {
  return (
    <div>
      <Nav />
      <h1 style={{ color: "white", fontSize: "50px", marginTop: "50px" }}>
        Page Not found
      </h1>
      <img style={{ width: "100%" }} src={background} alt="" />
    </div>
  );
}

export default NotFound;
