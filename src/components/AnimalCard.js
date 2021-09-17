import React, { useState } from "react";
import { Card } from "react-bootstrap"

// onUpdateAnimal
function AnimalCard({ animal, handleUpdateAnimal }) {

    const toggle = () => {
      // setIsAvailable(!isAvailable)
      // console.log(isAvailable)

      fetch(`http://localhost:3000/animals/${animal.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ available: !animal.available })
      })
      .then(resp => resp.json())
      .then(updatedAnimal => {
        handleUpdateAnimal(updatedAnimal)
        console.log(updatedAnimal)
      })
    
    }

    // function handleToggleAvailable() {
      
      


      // function handleDeleteClick() {
      //   fetch(`http://localhost:3000/animals/${animal.id}`, {
      //     method: "DELETE",
      //   });
      //   onDeleteAnimal(animal.id);
      // }
      
    return (
      <>
        <Card>
            <img src={animal.image} className="card-img-top" alt={animal.name} />
            <div className="card-body">
              <h5 className="card-title">{animal.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{animal.breed}</h6>
                <h6 className="card-subtitle mb-2 text-muted">{animal.gender}</h6>
                <h6 className="card-subtitle mb-2 text-muted">{animal.age}</h6>
                  <p className="card-text">{animal.description}</p>
              <a href="/adoption-form" className="btn btn-info">View Adoption Form</a>

               {/* <button className="btn btn-warning" onClick={handleDeleteClick}>Delete</button> */}

               {/*  {isAvailable ? "Available" : "Pending Adoption"} => STICK THIS IN TEXT AREA BELOW??*/}
              {/* <button className="btn btn-primary" onClick={handleToggleAvailable}>{isAvailable ? "Available" : "Pending Adoption"}</button> */}

              {animal.available ? (
                <button className="btn btn-warning" onClick={toggle}>
                  Available
                </button>
              ) : (
                <button className="btn btn-danger" onClick={toggle}>Pending Adoption</button>
              )}
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
