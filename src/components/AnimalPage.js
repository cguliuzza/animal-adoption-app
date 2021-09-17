import React from "react";
import AnimalList from "./AnimalList";

function AnimalPage({animals, handleUpdateAnimal}) {

  return (
    <main>
      <AnimalList animals={animals} handleUpdateAnimal={handleUpdateAnimal} />
    </main>
  );
}

export default AnimalPage;
