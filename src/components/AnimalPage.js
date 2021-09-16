import React, {useState, useEffect} from "react";
import AnimalList from "./AnimalList";


function AnimalPage() {

  const [animals, setAnimals] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/animals")
    .then(res => res.json())
    .then(data => setAnimals(data))
  }, [])

  const renderNewAnimal = (newAnimal) => {
    setAnimals([...animals, newAnimal])
  }
  
  return (
    <main>
      <AnimalList animals={animals} renderNewAnimal={renderNewAnimal} />
    </main>
  );
}

export default AnimalPage;
