import React, {useState} from "react";

function AnimalCard({ animal, onDeleteAnimal, onUpdateAnimal }) {
    const { id, name, image } = animal;
  
    const [isAvailable, setIsAvailable] = useState(true);
    const [updatedAnimal, setUpdatedAnimal] = useState(animal);
  
    function handleToggleAvailable() {
      setIsAvailable((isAvailable) => !isAvailable);
    }

    function handlePriceFormSubmit(e) {
        e.preventDefault();
        fetch(`http://localhost:3000/animals/${id}`, {
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
      fetch(`http://localhost:3000/animals/${id}`, {
        method: "DELETE",
      });
  
      onDeleteAnimal(id);
    }
  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
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
