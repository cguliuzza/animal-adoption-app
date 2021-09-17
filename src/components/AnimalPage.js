import React from "react";
import AnimalList from "./AnimalList";


function AnimalPage({animals, handleUpdateAnimal}) {

  // const [animals, setAnimals] = useState([])

  // useEffect(() => {
  //   fetch("http://localhost:3000/animals")
  //   .then(res => res.json())
  //   .then(data => setAnimals(data))
  // }, [])

  // const renderNewAnimal = (newAnimal) => {
  //   setAnimals([...animals, newAnimal])
  // }
  
  // function handleUpdateAnimal(updatedAnimal) {
  //   const updatedAnimals = animals.map((animal) =>
  //     animal.id === updatedAnimal.id ? updatedAnimal : animal
  //   );
  //   setAnimals(updatedAnimals);
  // }

  return (
    <main>
      <AnimalList animals={animals} handleUpdateAnimal={handleUpdateAnimal} />
    </main>
  );
}

export default AnimalPage;
