import React from "react";

function NewAnimalForm({renderNewAnimal}) {

  function handleSubmit(e) {
    e.preventDefault()

    fetch("http://localhost:3000/animals", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: e.target.name.value,
        image: e.target.image.value,
        type: e.target.type.value,
        breed: e.target.breed.value,
        gender: e.target.gender.value,
        age: e.target.age.value, 
        description: e.target.description.value
      })
    })
    .then(res => res.json())
    .then(newAnimal => renderNewAnimal(newAnimal))
  }

    return (

    <div className="new-animal-form">
      <h2>New Animal</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" name="name" placeholder="Animal name" />
        <input type="text" name="image" placeholder="Image URL" />
        <input type="text" name="type" placeholder="Type" />
        <input type="text" name="breed" placeholder="Breed"/> 
        <input type="text" name="gender" placeholder="Gender"/>
        <input type="text" name="age" placeholder="Age"/>
        <input type="text" name="description" placeholder="Description"/>
        <button type="submit">Add Animal</button>
      </form>
    </div>
  );
}

export default NewAnimalForm;
