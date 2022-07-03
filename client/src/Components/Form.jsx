import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDogs, getTemperaments } from "../Redux/Actions";
import { MultiSelect } from "react-multi-select-component";
import { Link } from "react-router-dom";
import { createDog, showMyDogs } from "../Redux/Actions";
import Nav from "./Nav";

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

    maxLife: "",
    minLife: "",
    temperament: [],
    image: "",
  });
  /* const tempOptions = temperamenList.map((el) => {
    return { label: el.toString(), value: el.toString() };
  }); */

  /* const [temperament, setTemperament] = useState([]); */

  const [error, setError] = useState({
    name: "",
    maxWeight: "",
    minWeight: "",
    minHeight: "",
    maxHeight: "",

    temperament: "",
  });

  const handleChange = function (e) {
    setNewDog({
      ...newDog,
      [e.target.name]: e.target.value,
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
      <form onSubmit={handleSubmit}>
        <div className="formInput">
          <label>Nombre: </label>
          <input
            type="Text"
            pattern="[a-zA-Z'-'\s]*"
            name="name"
            value={newDog.name}
            placeholder="ingrese el nombre de la raza"
            onChange={handleChange}
          />
          {error.name && <p>{error.name}</p>}
        </div>
        <div>
          <label>Peso Maximo: </label>
          <input
            type="Number"
            name="maxWeight"
            placeholder="ingrese el peso"
            value={newDog.maxWeight}
            onChange={handleChange}
          />
          {error.maxWeight && <p>{error.maxWeight}</p>}
        </div>
        <div>
          <label>Peso Minimo: </label>
          <input
            type="Number"
            name="minWeight"
            placeholder="ingrese el peso"
            value={newDog.minWeight}
            onChange={handleChange}
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
            onChange={handleChange}
          />
          {error.maxHeight && <p>{error.maxHeight}</p>}
        </div>
        <div>
          <label>Altura Minima: </label>
          <input
            type="number"
            name="minHeight"
            placeholder="ingrese la altura minima"
            value={newDog.minHeight}
            onChange={handleChange}
          />
          {error.minHeight && <p>{error.minHeight}</p>}
        </div>

        <div>
          <label>Maxima Vida Estimada: </label>
          <input
            type="number"
            name="maxLife"
            placeholder="ingrese los años de vida"
            value={newDog.maxLife}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Minima Vida Estimada: </label>
          <input
            type="number"
            name="minLife"
            placeholder="ingrese los años de vida"
            value={newDog.minLife}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Temperamento: </label>
          <select name="" id="" onChange={handleTemperaments}>
            {temperamenList.map((el) => {
              return (
                <option key={el} value={el}>
                  {el}
                </option>
              );
            })}
          </select>
          {error.temperament && <p>{error.temperament}</p>}
        </div>
        <input
          type="text"
          name="image"
          id="url"
          onChange={handleChange}
          placeholder="https://example.com"
          size="30"
          required
        />

        <button type="submit">CREAR</button>
      </form>
    </div>
  );
}

export function validate(newDog) {
  let errors = {};
  if (!newDog.name) {
    errors.name = "Dog Name is required";
  } /* else if (/^[a-z ,.'-]+$/i.test(newDog.name)) {
    errors.name = "El nombre es invalido";
  } */
  if (newDog.temperament.length == 0) {
    errors.temperament = "Temperament is required";
  } /* else if (/^[a-z ,.'-]+$/i.test(newDog.temperament)) {
    errors.temperament = "Temperament is invalid";
  } */
  if (!newDog.maxWeight) {
    errors.maxWeight = "Weight is required";
  } /* else if (!/(?=.*[0-9])/.test(newDog.weight)) {
    errors.weight = "Weight is invalid";
  } */
  if (!newDog.minWeight) {
    errors.minWeight = "Weight is required";
  } /* else if (!/(?=.*[0-9])/.test(newDog.weight)) {
    errors.weight = "Weight is invalid";
  } */
  if (!newDog.maxHeight) {
    errors.maxHeight = "Weight is required";
  } /* else if (!/(?=.*[0-9])/.test(newDog.weight)) {
    errors.weight = "Weight is invalid";
  } */
  if (!newDog.minHeight) {
    errors.minHeight = "Weight is required";
  } /* else if (!/(?=.*[0-9])/.test(newDog.weight)) {
    errors.weight = "Weight is invalid";
  } */

  return errors;
}
