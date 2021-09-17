import React, {useState, useEffect} from "react";
import Home from "./Home";
import Header from "./Header";
import AnimalPage from "./AnimalPage";
import { BrowserRouter, Route } from "react-router-dom";
import NewAnimalForm from "./NewAnimalForm";
import 'bootstrap/dist/css/bootstrap.min.css';
import AdoptionForm from "./AdoptionForm";

function App() {
  const [animals, setAnimals] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/animals")
    .then(res => res.json())
    .then(data => setAnimals(data))
  }, [])

  const renderNewAnimal = (newAnimal) => {
    setAnimals([...animals, newAnimal])
  }
  
  function handleUpdateAnimal(updatedAnimal) {
    const updatedAnimals = animals.map((animal) =>
      animal.id === updatedAnimal.id ? updatedAnimal : animal
    );
    setAnimals(updatedAnimals);
  }

return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Route exact path="/animals" component={() => <AnimalPage animals={animals} handleUpdateAnimal={handleUpdateAnimal} />} />
        <Route exact path="/new" component={() => <NewAnimalForm renderNewAnimal={renderNewAnimal} />} />
        <Route exact path="/adoption-form" component={AdoptionForm} />
        <Route exact path="/" component={Home} />
      </BrowserRouter>
    </div>
  );
}

export default App;
