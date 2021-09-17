import React from "react";
import { Form } from 'react-bootstrap';

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
      <div>
        <h1>Add New Animal</h1>
          <p>Complete this form to add a new pet for adoption!</p>
        <Form class="new-animal-form">
          <form class="row g-3" onSubmit={(e) => handleSubmit(e)}>
            <div class="col-md-4">
              <label for="inputPetName" class="col-form-label col-form-label-sm">Animal Name</label>
              <input type="text" class="form-control form-control-sm" id="inputPetName" name="name"></input>
            </div>



            <div class="col-md-4">
              <label for="validationImg" class="col-form-label col-form-label-sm">Image URL</label>
              <input type="text" class="form-control form-control-sm" id="validationImg" name="image"></input>
            </div>



            <div class="col-md-4">
              <label for="Type" class="col-form-label col-form-label-sm">Type</label>
              <input type="text" class="form-control form-control-sm" id="inputType" name="type" placeholder="E.g. Dog, cat, etc."></input>
            </div>

            <div class="col-md-4">
              <label for="inputPetBreed" class="col-form-label col-form-label-sm">Breed</label>
              <input type="text" class="form-control form-control-sm" id="inputPetBreed" name="breed"></input>
            </div>
            <div class="col-md-4">
              <label for="inputGender" class="col-form-label col-form-label-sm">Gender</label>
              <input type="text" class="form-control form-control-sm" id="inputGender" name="gender"></input>
            </div>
            <div class="col-md-4">
              <label for="inputAge" class="col-form-label col-form-label-sm">Age</label>
              <input type="text" class="form-control form-control-sm" id="inputAge" name="age" placeholder="E.g. 8 weeks old, 3 years old, etc."></input>
            </div>

            <div class="mb-3">
              <label for="inputDescription" class="col-form-label col-form-label-sm">Description</label>
              <input type="text" class="form-control form-control-sm" id="inputDescription" name="description"></input>
            </div>
            <div class="col-12">
              <button type="submit" class="btn btn-info" onClick={handleSubmit}>Add Animal</button>
            </div>
          </form>
        </Form>
    </div>
  );
}

export default NewAnimalForm;
