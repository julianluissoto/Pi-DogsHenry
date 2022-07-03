import React from "react";
import { Link } from "react-router-dom";
import "./ComponentsStyles/DogCard.css";
export default function DogCard({
  image,
  name,
  temperament,
  minHeight,
  maxHeight,
  minWeight,
  maxWeight,
  minLife,
  maxLife,
  id,
}) {
  return (
    <div className="dogCardContainer">
      <div>
        <img src={image} alt="dogImage" />
        <h2>Raza: {name}</h2>
      </div>

      <div>
        <Link to={`details/${id}`}>
          <button className="toDetail"> to Dog Detail</button>
        </Link>
      </div>
    </div>
  );
}
