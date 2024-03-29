import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDogs, getTemperaments } from "../Redux/Actions";

import { createDog, showMyDogs } from "../Redux/Actions";
import Nav from "./Nav";
import DogCard from "./DogCard";
import "./ComponentsStyles/Form.css";

export default function Form() {
  let dispatch = useDispatch();
  let temperamenList = useSelector((state) => state.allTemperaments);
  useEffect(() => {
    dispatch(getTemperaments());
  }, [dispatch]);

  let [newDog, setNewDog] = useState({
    name: "",
    maxWeight: "",
    minWeight: "",
    minHeight: "",
    maxHeight: "",

    /* maxLife: "",
    minLife: "", */
    temperament: [],
    image: "",
  });

  const [error, setError] = useState({
    name: "",
    maxWeight: "",
    minWeight: "",
    minHeight: "",
    maxHeight: "",
    imageLength: "",

    temperament: [],
  });
  const [buttonState, setbuttonState] = useState(true);

  const handleChangeNumber = function (e) {
    const numberInputFormated = e.target.value;

    setNewDog({
      ...newDog,
      [e.target.name]: numberInputFormated,
    });

    setError(
      validate({
        ...newDog,
        [e.target.name]: numberInputFormated,
      })
    );
  };

  const handleChangeImage = function (e) {
    if (e.target.value.length > 200)
      setError({ ...error, imageLength: "URL TO LONG" });
    setNewDog({
      ...newDog,
      [e.target.name]: e.target.value,
    });
  };

  const handleChange = function (e) {
    const textInputFormated = e.target.value.replace(/[^a-z]/gi, "");
    setNewDog({
      ...newDog,
      [e.target.name]: textInputFormated,
    });

    setError(
      validate({
        ...newDog,
        [e.target.name]: e.target.value,
      })
    );
  };
  function handleTemperaments(e) {
    setNewDog({
      ...newDog,
      temperament: [...new Set([...newDog.temperament, e.target.value])],
    });
    return newDog.temperament.length > 1
      ? setbuttonState(false)
      : setbuttonState(true);
  }

  const handleSubmit = function (e) {
    e.preventDefault();
    setError(validate(newDog));
    dispatch(createDog(newDog));
    dispatch(getDogs());
    dispatch(showMyDogs());
  };

  return (
    <div>
      <Nav />
      <div className="dogBuildContainer">
        <div>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Nombre: </label>
              <input
                type="Text"
                pattern="[a-zA-Z'-'\s]*"
                name="name"
                value={newDog.name}
                placeholder="ingrese el nombre de la raza"
                onChange={handleChange}
              />
              {error.name && (
                <p style={{ color: "red", fontFamily: "sans-serif" }}>
                  {error.name}
                </p>
              )}
            </div>
            <div>
              <label>Peso Maximo: </label>
              <input
                type="Number"
                name="maxWeight"
                placeholder="ingrese el peso"
                value={newDog.maxWeight}
                onChange={handleChangeNumber}
              />
              {error.maxWeight && (
                <p style={{ color: "red", fontFamily: "sans-serif" }}>
                  {error.maxWeight}
                </p>
              )}
            </div>
            <div>
              <label>Peso Minimo: </label>
              <input
                type="Number"
                name="minWeight"
                placeholder="ingrese el peso"
                value={newDog.minWeight}
                onChange={handleChangeNumber}
              />
              {error.minWeight && <p>{error.minWeight}</p>}
            </div>
            <div>
              <label>Altura Maxima: </label>
              <input
                type="number"
                name="maxHeight"
                placeholder="ingrese la altura maxima"
                value={newDog.maxHeight}
                onChange={handleChangeNumber}
              />
              {error.maxHeight && (
                <p style={{ color: "red", fontFamily: "sans-serif" }}>
                  {error.maxHeight}
                </p>
              )}
            </div>
            <div>
              <label>Altura Minima: </label>
              <input
                type="number"
                name="minHeight"
                placeholder="ingrese la altura minima"
                value={newDog.minHeight}
                onChange={handleChangeNumber}
              />
              {error.minHeight && (
                <p style={{ color: "red", fontFamily: "sans-serif" }}>
                  {error.minHeight}
                </p>
              )}
            </div>

            {/* <div>
              <label>Maxima Vida Estimada: </label>
              <input
                type="number"
                name="maxLife"
                placeholder="ingrese los años de vida"
                value={newDog.maxLife}
                onChange={handleChangeNumber}
              />
            </div> */}
            {/* <div>
              <label>Minima Vida Estimada: </label>
              <input
                type="number"
                name="minLife"
                placeholder="ingrese los años de vida"
                value={newDog.minLife}
                onChange={handleChangeNumber}
              />
            </div> */}
            <div>
              <label>Temperamento: </label>
              <select name="" id="" onChange={handleTemperaments}>
                {newDog.temperament.length < 3 &&
                  temperamenList.map((el) => {
                    return (
                      <option key={el} value={el}>
                        {el}
                      </option>
                    );
                  })}
              </select>
              {newDog.temperament.length <= 2 && (
                <p style={{ color: "red", fontFamily: "sans-serif" }}>
                  Max Temperament Quantity is 3
                </p>
              )}
            </div>

            <input
              type="text"
              name="image"
              value={newDog.image}
              onChange={handleChangeImage}
              placeholder="Ingrese la URL de la Imagen"
              required
            />
            {error.imageLength && (
              <p style={{ color: "red", fontFamily: "sans-serif" }}>
                {error.imageLength}
              </p>
            )}
            <button disabled={buttonState} type="submit">
              CREAR
            </button>
          </form>
        </div>

        <DogCard
          image={newDog.image}
          name={newDog.name}
          maxHeight={newDog.maxHeight}
          minHeight={newDog.minHeight}
          temperament={newDog.temperament}
          maxWeight={newDog.maxWeight}
          minWeight={newDog.minWeight}
          moreStyles={true}
          moreDetail={true}
        />
      </div>
    </div>
  );
}

export function validate(newDog) {
  let errors = {};
  if (!newDog.name) {
    errors.name = "Dog Name is required";
  }

  if (!newDog.maxWeight) {
    errors.maxWeight = "MaxWeight is required";
  }
  if (!newDog.minWeight) {
    errors.minWeight = "MinWeight is required";
  }
  if (!newDog.maxHeight) {
    errors.maxHeight = "MaxHeight is required";
  }
  if (!newDog.minHeight) {
    errors.minHeight = "MinHeight is required";
  }

  return errors;
}
