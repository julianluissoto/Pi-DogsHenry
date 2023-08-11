import React from "react";

import { cleanDetail, getdogDetails } from "../Redux/Actions";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Nav from "./Nav";
import "./ComponentsStyles/Detail.css";

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
      <div className="detailContainer">
        <div>
          {" "}
          <img
            className="imgDetail"
            src={dogDetails ? dogDetails.image : dogDetails2?.image}
            alt="dog image"
          />
        </div>

        <div className="dogDetailsContainer">
          <h1 className="dog__name">
            {dogDetails ? dogDetails.Nombre : dogDetails2?.Nombre}
          </h1>
          <h2 className="detailInfo">
            Peso Maximo:{" "}
            {dogDetails ? dogDetails.PesoMaximo : dogDetails2?.PesoMaximo} Kg
          </h2>
          <h2 className="detailInfo">
            Peso Minimo:{" "}
            {dogDetails ? dogDetails.PesoMinimo : dogDetails2?.PesoMinimo} Kg
          </h2>
          <h2 className="detailInfo">
            Altura Maxima:{" "}
            {dogDetails ? dogDetails.AlturaMaxima : dogDetails2?.AlturaMaxima}{" "}
            Cm
          </h2>
          <h2 className="detailInfo">
            Altura Minima:{" "}
            {dogDetails ? dogDetails.AlturaMinima : dogDetails2?.AlturaMinima}{" "}
            Cm
          </h2>
          <h2 className="detailInfo">
            Suele vivir entre{" "}
            {dogDetails ? dogDetails.VidaMinima : dogDetails2?.VidaMinima} y{" "}
            {dogDetails ? dogDetails.VidaMaxima : dogDetails2?.VidaMaxima} Años
          </h2>
          <h2 className="detailInfo">
            Temperamento:{" "}
            {dogDetails ? dogDetails.Temperamento : dogDetails2?.Temperamento}
          </h2>
        </div>
      </div>
    </div>
  );
}
