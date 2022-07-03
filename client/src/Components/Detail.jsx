import React from "react";

import { cleanDetail, getdogDetails } from "../Redux/Actions";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Nav from "./Nav";

export default function DogDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    let dogId = id;

    dispatch(getdogDetails(dogId));
  }, [dispatch]);
  useEffect(() => {
    return () => {
      dispatch(cleanDetail());
    };
  }, [dispatch]);

  let dogDetail = useSelector((state) => state.dogDetail);
  let dogDetail2 = useSelector((state) => state.backupDogsForFiltering);

  let dogDetails = dogDetail?.dogFindedFormat;
  let dogDetails2 = dogDetail2?.find((dog) => dog.id === id);
  return (
    <div>
      <Nav />

      <img
        src={dogDetails ? dogDetails.image : dogDetails2?.image}
        alt="aqui va la imagen"
      />
      <h1>{dogDetails ? dogDetails.Nombre : dogDetails2?.Nombre}</h1>
      <h2>
        Peso Maximo:{" "}
        {dogDetails ? dogDetails.PesoMaximo : dogDetails2?.PesoMaximo}
      </h2>
      <h2>
        Peso Minimo:{" "}
        {dogDetails ? dogDetails.PesoMinimo : dogDetails2?.PesoMinimo}
      </h2>
      <h2>
        Altura Maxima:{" "}
        {dogDetails ? dogDetails.AlturaMaxima : dogDetails2?.AlturaMaxima} Cm
      </h2>
      <h2>
        Altura Minima:{" "}
        {dogDetails ? dogDetails.AlturaMinima : dogDetails2?.AlturaMinima} Cm
      </h2>
      <h2>
        Suele vivir entre{" "}
        {dogDetails ? dogDetails.VidaMinima : dogDetails2?.VidaMinima} y{" "}
        {dogDetails ? dogDetails.VidaMaxima : dogDetails2?.VidaMaxima} Años
      </h2>
      <h2>
        Temperamento:{" "}
        {dogDetails ? dogDetails.Temperamento : dogDetails2?.Temperamento}
      </h2>
    </div>
  );
}
