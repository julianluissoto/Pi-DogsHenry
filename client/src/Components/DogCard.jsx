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
  moreDetail,
  moreStyles,
}) {
  return (
    <div className={moreStyles ? "dogCardContainer" : "myOwnDog"}>
      {moreDetail && (
        <div>
          {" "}
          <p>Temperamentos: {temperament + " "} </p>{" "}
          <p>Peso Maximo: {maxWeight} Kg</p>
          <p>Peso Minimo: {minWeight} Kg</p>
          <p>Altura Maxima: {maxHeight} cm </p>
          <p>Altura Minima: {minHeight} cm </p>
          <p>
            {" "}
            Esperanza de vida: entre {minLife} y {maxLife} Años
          </p>
        </div>
      )}

      <div>
        <img className="dogImage" src={image} alt="dogImagen" />
        <div>
          <h2 className={moreStyles ? "dogRace " : "dogRace1"}>Raza: {name}</h2>
          <Link to={`details/${id}`}>
            <button className="toDetail"> to Dog Detail</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
