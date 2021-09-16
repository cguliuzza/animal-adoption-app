import React from "react";
import AnimalCard from "./AnimalCard";

function AnimalList({animals, renderNewAnimal}) {
  return (
    <ul className="cards">{animals.map(animal=> <AnimalCard animal={animal} renderNewAnimal={renderNewAnimal} />)} </ul>
  );
}

export default AnimalList;
