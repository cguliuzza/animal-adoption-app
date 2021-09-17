import React from "react";
import AnimalList from "./AnimalList";


function AnimalPage({animals, handleUpdateAnimal, handleDeleteAnimal}) {


  return (
    <main>
      <AnimalList animals={animals} handleUpdateAnimal={handleUpdateAnimal} handleDeleteAnimal={handleDeleteAnimal} />
    </main>
  );
}

export default AnimalPage;

