import React from "react";
import AnimalCard from "./AnimalCard";

function AnimalList({animals, handleUpdateAnimal}) {
  return (
    <ul className="cards">{animals.map(animal=> <AnimalCard animal={animal} key={animal.id} handleUpdateAnimal={handleUpdateAnimal} />)} </ul>
  );
}

export default AnimalList;
