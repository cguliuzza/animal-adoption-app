import React, { useState } from "react";
import { Card } from "react-bootstrap"

// onUpdateAnimal
function AnimalCard({ animal, onDeleteAnimal }) {
  
    // const [isAvailable, setIsAvailable] = useState(true);
    // // const [updatedAnimal, setUpdatedAnimal] = useState(animal);
  
    // function handleToggleAvailable() {
    //   setIsAvailable((isAvailable) => !isAvailable);
      // isAvailable ? "Available" : "Pending Adoption"

      function handleDeleteClick() {
        fetch(`http://localhost:3000/animals/${animal.id}`, {
          method: "DELETE",
        });
        onDeleteAnimal(animal.id);
      }
      
    return (
      // <li className="card">
      //   <img src={animal.image} alt={animal.name} />
      //   <h4>{animal.name}</h4>
      //   {isAvailable ? (
      //     <button className="primary" onClick={handleToggleAvailable}>
      //       Available
      //     </button>
      //   ) : (
      //     <button onClick={handleToggleAvailable}>Pending Adoption</button>
      //   )}
      //   <button onClick={handleDeleteClick}>Delete</button>
      // </li>
      <>
        <Card>
          <div className="card" style={{width: 18 + 'rem'}}>
            <img src={animal.image} className="card-img-top" alt={animal.name} />
            <div className="card-body">
              <h5 className="card-title">{animal.name}</h5>
              <h6 className="card-subtitle mb-2 text-muted">{animal.breed}</h6>
              <h6 className="card-subtitle mb-2 text-muted">{animal.gender}</h6>
              <h6 className="card-subtitle mb-2 text-muted">{animal.age}</h6>
              <p className="card-text">{animal.description}</p>
              <a href="/adoption-form" className="btn btn-primary">View Adoption Form</a>
              {/* <button className="btn btn-primary" onClick={handleDeleteClick}>Delete</button>
              <button className="btn btn-primary" onClick={handleToggleAvailable}>Available</button> */}
            </div>
          </div>
        </Card>
      </>
    );
  }

    // function handlePriceFormSubmit(e) {
    //     e.preventDefault();
    //     fetch(`http://localhost:3000/animals/${animal.id}`, {
    //       method: "PATCH",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify({ updatedAnimal }),
    //     })
    //       .then((r) => r.json())
    //       .then((updatedAnimal) => {
    //         onUpdateAnimal(updatedAnimal);
    //       });
    //   }
    
  


export default AnimalCard;
