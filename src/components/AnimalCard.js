import React, {useState} from "react";

function AnimalCard({ animal, onDeleteAnimal, onUpdateAnimal }) {
  
    const [isAvailable, setIsAvailable] = useState(true);
    const [updatedAnimal, setUpdatedAnimal] = useState(animal);
  
    function handleToggleAvailable() {
      setIsAvailable((isAvailable) => !isAvailable);
    }

    function handlePriceFormSubmit(e) {
        e.preventDefault();
        fetch(`http://localhost:3000/animals/${animal.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ updatedAnimal }),
        })
          .then((r) => r.json())
          .then((updatedAnimal) => {
            onUpdateAnimal(updatedAnimal);
          });
      }
    
  
    function handleDeleteClick() {
      fetch(`http://localhost:3000/animals/${animal.id}`, {
        method: "DELETE",
      });
  
      onDeleteAnimal(animal.id);
    }
  return (
    <li className="card">
      <img src={animal.image} alt={animal.name} />
      <h4>{animal.name}</h4>
      {isAvailable ? (
        <button className="primary" onClick={handleToggleAvailable}>
          Available
        </button>
      ) : (
        <button onClick={handleToggleAvailable}>Pending Adoption</button>
      )}
      <button onClick={handleDeleteClick}>Delete</button>
    </li>
  );
}

export default AnimalCard;
