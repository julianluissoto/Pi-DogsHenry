import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import DogCard from "./DogCard";
import { getDogs, showMyDogs, deleteDog } from "../Redux/Actions";
import loading from "../images/giphy.gif";

import "./ComponentsStyles/MyDogsStyle.css";
import Nav from "./Nav";
export default function MyOwnDogs() {
  let myOwnDogsCreated = useSelector((state) => state.myDogs);

  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDogs());
    dispatch(showMyDogs());
  }, []);

  const handleDelete = (dogToDelete) => {
    let confirmacion = prompt("Se eliminara de Tus Dogs: type Y/N");

    if (confirmacion === "y" || confirmacion === "Y") {
      dispatch(deleteDog(dogToDelete));
      dispatch(showMyDogs());
      console.log(dogToDelete);
    } else alert("No se elimino");
  };

  return (
    <>
      <Nav />
      <h1>MY DOGS CREATED</h1>

      <div className="MyDogsContainer">
        {myOwnDogsCreated.length > 0 ? (
          myOwnDogsCreated.map((el) => {
            return (
              <div key={el.id}>
                <div>
                  <button onClick={() => handleDelete(el.id)}>X</button>
                </div>

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
                  minLife={el.VidaMinima}
                  maxLife={el.VidaMaxima}
                />
              </div>
            );
          })
        ) : (
          <div>
            <img src={loading} alt="" />
            <h1>No has creado Nuevos Perros</h1>
          </div>
        )}
      </div>
    </>
  );
}
