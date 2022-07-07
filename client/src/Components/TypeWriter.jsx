import React from "react";
import { Typewriter } from "react-simple-typewriter";

export default function WriteMachine({ text }) {
  return (
    <div style={{ marginBottom: "100px" }}>
      <span
        style={{
          color: "red",
          fontWeight: "bold",
          fontSize: "4em",
        }}
      >
        <Typewriter
          words={text}
          typeSpeed={90}
          deleteSpeed={50}
          loop={Infinity}
        />
      </span>
    </div>
  );
}
