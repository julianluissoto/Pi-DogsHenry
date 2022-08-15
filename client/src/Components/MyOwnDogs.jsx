import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import DogCard from "./DogCard";
import { getDogs, showMyDogs, deleteDog } from "../Redux/Actions";
import loading from "../images/giphy.gif";
import "../Components/ComponentsStyles/Home.css";
import "./ComponentsStyles/Nav.css";

import "./ComponentsStyles/MyDogsStyle.css";
import Nav from "./Nav";

export default function MyOwnDogs() {
  let myOwnDogsCreated = useSelector((state) => state.myDogs);

  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDogs());
    dispatch(showMyDogs());
    setLoadingDog(true);
  }, [dispatch]);

  const handleDelete = (dogToDelete) => {
    let confirmacion = prompt("Se eliminara de Tus Dogs: type Y/N");

    if (confirmacion === "y" || confirmacion === "Y") {
      dispatch(deleteDog(dogToDelete));
      dispatch(showMyDogs());
    } else alert("No se elimino");
  };
  let [loadingDog, setLoadingDog] = useState(false);

  if (myOwnDogsCreated.length === 0) {
    return (
      <div>
        <Nav />
        <h1 className="myDogsTitle">MY DOGS </h1>
        <h1 style={{ color: "white" }}>NOT CREATED DOG</h1>;
      </div>
    );
  }

  if (myOwnDogsCreated.length > 0) {
    return (
      <>
        <Nav />

        <h1 className="myDogsTitle">MY DOGS </h1>

        <div className="my-dogs-full-container">
          {myOwnDogsCreated.length > 0 &&
            myOwnDogsCreated.map((el) => {
              return (
                <div key={el.id}>
                  <div>
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
                        moreStyles={true}
                        buttonDetail={true}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </>
    );
  } else {
    return (
      <>
        <Nav />

        <h1 className="myDogsTitle">MY DOGS </h1>
        <img src={loading} alt="" />
      </>
    );
  }
}
