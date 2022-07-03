import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import DogCard from "./DogCard";
import loading from "../images/giphy.gif";

import "./ComponentsStyles/AllDogs.css";
import Paginate from "./Pagination";
import { getDogs } from "../Redux/Actions";

export default function AllDogs() {
  let dogsState = useSelector((state) => state.filters);
  // console.log(dogsState);

  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastDog = currentPage * 8;
  const indexOfFirstDog = indexOfLastDog - 8;
  const currentDogs = dogsState.slice(indexOfFirstDog, indexOfLastDog); //elementos a renderizar en la pagina, segun el valor de paginado

  const paginado = (Number) => {
    setCurrentPage(Number); // setea el estado con el number recibido del componete Pagination
  };
  return (
    <>
      <div>
        {/* <div>
          {" "}
          <button onClick={prevpage}>anterior</button>
          <button onClick={nextpage}>siguiente</button>
        </div> */}

        <Paginate
          dogsPerPage={8}
          allDogs={dogsState.length}
          paginado={paginado}
        />
        <div className="allDogsContanier">
          {dogsState.length > 0 ? (
            currentDogs.map((el) => {
              return (
                <DogCard
                  id={el.id}
                  image={el.image}
                  key={el.Nombre}
                  name={el.Nombre}
                  maxHeight={el.AlturaMaxima}
                  minHeight={el.AlturaMinima}
                  temperament={el.Temperamento}
                  maxWeight={el.PesoMaximo}
                  minWeight={el.PesoMinimo}
                  maxLife={el.VidaMaxima}
                  minLife={el.VidaMinima}
                />
              );
            })
          ) : (
            <img src={loading} alt="" />
          )}
        </div>
      </div>
    </>
  );
}
