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
}) {
  console.log(typeof moreDetail);
  return (
    <div className="dogCardContainer">
      {moreDetail && (
        <div>
          {" "}
          <p>Temperamentos: {temperament} </p>{" "}
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

      <div className="dogImageContainer">
        <img className="dogImage" src={image} alt="dogImagen" />
      </div>
      <div>
        <h2 className="dogRace">Raza: {name}</h2>
      </div>

      <div>
        <Link to={`details/${id}`}>
          <button className="toDetail"> to Dog Detail</button>
        </Link>
      </div>
    </div>
  );
}
