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
  buttonDetail,
}) {
  return (
    <Link className="dogCardContainer" to={`details/${id}`}>
      <div /* className={moreStyles ? "dogCardContainer" : "myOwnDog"} */>
        {moreDetail && (
          <div className="allDogsContainer">
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

        <div className="dog-Image-container">
          {" "}
          <img className="dogImage" src={image} alt="dogImagen" />
        </div>
        <div>
          <h2 className={moreStyles ? "dogRace " : "dogRace1"}>Breed</h2>
          <h2> {name}</h2>
          <h2 className={moreStyles ? "dogRace " : "dogRace1"}>Temperament</h2>
          <h3>{temperament}</h3>

          <h2 className={moreStyles ? "dogRace " : "dogRace1"}>Max-Weight</h2>
          <h3 className="dogWeight">{maxWeight} kg</h3>
        </div>
      </div>
    </Link>
  );
}
