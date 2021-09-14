import React from "react";
import AnimalCard from "./AnimalCard";

function AnimalList({animals}) {
  return (
    <ul className="cards">{animals.map(animal=> <AnimalCard animal={animal}/>)} </ul>
  );
}

export default AnimalList;
