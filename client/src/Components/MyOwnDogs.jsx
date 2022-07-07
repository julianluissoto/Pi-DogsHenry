import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import DogCard from "./DogCard";
import { getDogs, showMyDogs, deleteDog } from "../Redux/Actions";
import loading from "../images/giphy.gif";
import "../Components/ComponentsStyles/Home.css";

import "./ComponentsStyles/MyDogsStyle.css";
import Nav from "./Nav";
export default function MyOwnDogs() {
  let myOwnDogsCreated = useSelector((state) => state.myDogs);

  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDogs());
    dispatch(showMyDogs());
  }, [dispatch]);

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
      <h1 className="myDogsTitle">MY DOGS </h1>

      <div className="my-dogs-full-container">
        {myOwnDogsCreated.length > 0 ? (
          myOwnDogsCreated.map((el) => {
            return (
              <div>
                <div key={el.id}>
                  <button
                    className="myDogDeleteButton"
                    onClick={() => handleDelete(el.id)}
                  >
                    X
                  </button>
                  <div className="allDogsContainer">
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
                      moreStyles={false}
                      buttonDetail={true}
                    />
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div>
            <img className="loadingImg" src={loading} alt="" />
            <h1>No has creado Nuevos Perros</h1>
          </div>
        )}
      </div>
    </>
  );
}
