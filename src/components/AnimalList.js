import React from "react";
import AnimalCard from "./AnimalCard";

function AnimalList({animals, renderNewAnimal, handleUpdateAnimal}) {
  return (
    <ul className="cards">{animals.map(animal=> <AnimalCard animal={animal} key={animal.id} renderNewAnimal={renderNewAnimal} handleUpdateAnimal={handleUpdateAnimal} />)} </ul>
  );
}

export default AnimalList;
