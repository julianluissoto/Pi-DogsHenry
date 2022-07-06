import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getDogs, searchByName } from "../Redux/Actions";

export default function SearchBar() {
  const [inputText, setInputText] = useState("");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDogs());
  }, [dispatch]);

  const handleChange = function (e) {
    setInputText(e.target.value);
    dispatch(searchByName(inputText));
  };

  return (
    <div>
      <label className="labelStyle" htmlFor="searchBar">
        Find your Dog
      </label>
      <input
        type="text"
        name="searchBar"
        value={inputText}
        onChange={handleChange}
      />

      {/* {dogsState
        .filter((dog) => {
          if (inputText == "") {
            return dog;
          } else if (
            dog.Nombre.toLowerCase().includes(inputText.toLowerCase())
          ) {
            console.log(`entre al filter del searchbar${dog}`);
            return dog;
          }
        })

        .map((el) => {
          return (
            <DogCard
              key={el.id}
              id={el.id}
              image={el.image}
              name={el.Nombre}
              heigth={el.Altura}
              temperament={el.Temperamento}
              weigth={el.Peso}
            />
          );
        })} */}
    </div>
  );
}
