import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDogs, searchByName } from "../Redux/Actions";

//import { Redirect } from "react-router-dom";

export default function SearchBar() {
  // let redirect = Redirect();
  const [inputText, setInputText] = useState("");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDogs());
  }, [dispatch]);
  //let dogsState = useSelector((state) => state.backupDogsForFiltering);

  const handleChange = function (e) {
    setInputText(e.target.value);
    dispatch(searchByName(inputText));
  };

  return (
    <div>
      <label htmlFor="searchBar">Find your Dog</label>
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
