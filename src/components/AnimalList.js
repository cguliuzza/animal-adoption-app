import React from "react";
import AnimalCard from "./AnimalCard";

function AnimalList({animals, handleUpdateAnimal, handleDeleteAnimal}) {
  return (
    <ul className="cards">{animals.map(animal=> <AnimalCard animal={animal} key={animal.id} handleUpdateAnimal={handleUpdateAnimal} handleDeleteAnimal={handleDeleteAnimal} />)} </ul>
  );
}

export default AnimalList;
