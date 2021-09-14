import React, {useState, useEffect} from "react";
import NewAnimalForm from "./NewAnimalForm";
import AnimalList from "./AnimalList";


function AnimalPage() {

  const [animals, setAnimals] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/animals")
    .then(res => res.json())
    .then(setAnimals)
  }, [])

  const renderNewAnimal = (newAnimal) => {
    setAnimals([...animals, newAnimal])
  }
  
  return (
    <main>
      <NewAnimalForm renderNewAnimal={renderNewAnimal} />
      <AnimalList animals={animals} />
    </main>
  );
}

export default AnimalPage;
