import React from 'react'
import { Form } from 'react-bootstrap';

const AdoptionForm = () => {
    return (
        <div>
            <h1>Animal Adoption Application</h1>
                <p>Completion of this application does not guarantee adoption of a Happy Tails pet.</p>
            <Form class="adoption-form">
                <form class="row g-3">
                    <div class="col-md-6">
                        <label for="formGroupExampleInput" class="col-form-label col-form-label-sm">Name of Applicant</label>
                        <input type="text" class="form-control form-control-sm" id="formGroupExampleInput"></input>
                    </div>
                    <div class="col-md-6">
                        <label for="formGroupExampleInput2" class="col-form-label col-form-label-sm">Occupation</label>
                        <input type="text" class="form-control form-control-sm" id="formGroupExampleInput2"></input>
                    </div>

                    <div class="col-md-6">
                        <label for="formGroupExampleInput" class="col-form-label col-form-label-sm">Name of Spouse/Significant Other</label>
                        <input type="text" class="form-control form-control-sm" id="formGroupExampleInput"></input>
                    </div>
                    <div class="col-md-6">
                        <label for="formGroupExampleInput2" class="col-form-label col-form-label-sm">Occupation</label>
                        <input type="text" class="form-control form-control-sm" id="formGroupExampleInput2"></input>
                    </div>

                    <div class="mb-3">
                        <label for="formGroupExampleInput" class="col-form-label col-form-label-sm">Name & Ages of Children (if applicable)</label>
                        <input type="text" class="form-control form-control-sm" id="formGroupExampleInput"></input>
                    </div>

                    <div class="col-md-6">
                        <label for="inputEmail4" class="col-form-label col-form-label-sm">Email</label>
                        <input type="email" class="form-control form-control-sm" id="inputEmail4"></input>
                    </div>
                    <div class="col-md-6">
                        <label for="inputPhoneNumber" class="col-form-label col-form-label-sm">Phone Number</label>
                        <input type="text" class="form-control form-control-sm" id="inputPhoneNumber"></input>
                    </div>
                    <div class="col-12">
                        <label for="inputAddress" class="col-form-label col-form-label-sm">Address</label>
                        <input type="text" class="form-control form-control-sm" id="inputAddress" placeholder="1234 Main St"></input>
                    </div>
                    <div class="col-12">
                        <label for="inputAddress2" class="col-form-label col-form-label-sm">Address 2</label>
                        <input type="text" class="form-control form-control-sm" id="inputAddress2" placeholder="Apartment, studio, or floor"></input>
                    </div>
                    <div class="col-md-6">
                        <label for="inputCity" class="col-form-label col-form-label-sm">City</label>
                        <input type="text" class="form-control form-control-sm" id="inputCity"></input>
                    </div>
                    <div class="col-md-4">
                        <label for="inputState" class="col-form-label col-form-label-sm">State</label>
                        <input type="text" class="form-control form-control-sm" id="inputState"></input>
                    </div>
                    <div class="col-md-2">
                        <label for="inputZip" class="col-form-label col-form-label-sm">Zip</label>
                        <input type="text" class="form-control form-control-sm" id="inputZip"></input>
                    </div>

                    <div class="col-md-6">
                        <label for="formGroupExampleInput" class="col-form-label col-form-label-sm">Emergency Contact Name (What is their relationship to you?)</label>
                        <input type="text" class="form-control form-control-sm" id="formGroupExampleInput"></input>
                    </div>
                    <div class="col-md-6">
                        <label for="formGroupExampleInput2" class="col-form-label col-form-label-sm">Emergency Contact Phone Number</label>
                        <input type="text" class="form-control form-control-sm" id="formGroupExampleInput2"></input>
                    </div>

                    <div class="col-md-4">
                        <label for="inputState" class="col-form-label col-form-label-sm">What best describe where you live?</label>
                        <select id="inputState" class="form-select form-select-sm">
                        <option selected>Choose...</option>
                        <option>House</option>
                        <option>Apartment</option>
                        <option>Condominium</option>
                        <option>Townhouse</option>
                        <option>Other</option>
                        </select>
                    </div>

                    <div class="col-md-4">
                        <label for="inputState" class="col-form-label col-form-label-sm">Do you own or rent?</label>
                        <select id="inputState" class="form-select form-select-sm">
                        <option selected>Choose...</option>
                        <option>Own</option>
                        <option>Rent</option>
                        </select>
                    </div>

                    <div class="col-md-4">
                        <label for="inputState" class="col-form-label col-form-label-sm">If you rent, do you have your landlord's permission to have a pet?</label>
                        <select id="inputState" class="form-select form-select-sm">
                        <option selected>Choose...</option>
                        <option>Yes</option>
                        <option>No</option>
                        <option>Not applicable</option>
                        </select>
                    </div>

                    <fieldset class="row mb-3">
                        <legend class="col-form-label col-sm-4 pt-0">Why do you want a pet? (Select all that apply.)</legend>
                        <div class="col-sm-3">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="gridCheck"></input>
                                <label class="form-check-label" for="gridCheck">
                                    House pet
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="gridCheck"></input>
                                <label class="form-check-label" for="gridCheck">
                                    Companion for children
                                </label>
                            </div>

                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="gridCheck"></input>
                                <label class="form-check-label" for="gridCheck">
                                    Companion for family
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="gridCheck"></input>
                                <label class="form-check-label" for="gridCheck">
                                    Companion for other pet
                                </label>
                            </div>
                            
                        </div>
                        <div class="col-sm-3">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="gridCheck"></input>
                                <label class="form-check-label" for="gridCheck">
                                        Watchdog
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="gridCheck"></input>
                                <label class="form-check-label" for="gridCheck">
                                    Protection for home/family
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="gridCheck"></input>
                                <label class="form-check-label" for="gridCheck">
                                    A gift
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="gridCheck"></input>
                                <label class="form-check-label" for="gridCheck">
                                    Other
                                </label>
                            </div>
                        </div>
                    </fieldset>

                    <div class="col-md-6">
                        <label for="formGroupExampleInput" class="col-form-label col-form-label-sm">Where will the pet sleep at night?</label>
                        <input type="text" class="form-control form-control-sm" id="formGroupExampleInput"></input>
                    </div>
                    <div class="col-md-6">
                        <label for="formGroupExampleInput2" class="col-form-label col-form-label-sm">Where will the pet be when left alone?</label>
                        <input type="text" class="form-control form-control-sm" id="formGroupExampleInput2"></input>
                    </div>

                    <div class="col-md-6">
                        <label for="formGroupExampleInput" class="col-form-label col-form-label-sm">What area(s) of the house will the pet be allowed into?</label>
                        <input type="text" class="form-control form-control-sm" id="formGroupExampleInput"></input>
                    </div>
                    <div class="col-md-6">
                        <label for="formGroupExampleInput2" class="col-form-label col-form-label-sm">What area(s) of the house will the pet NOT be allowed into?</label>
                        <input type="text" class="form-control form-control-sm" id="formGroupExampleInput2"></input>
                    </div>

                    <div class="col-md-6">
                        <label for="inputCity" class="col-form-label col-form-label-sm">About what percent of the time will the pet be left alone without humans?</label>
                        <input type="text" class="form-control form-control-sm" id="inputCity"></input>
                    </div>
                    <div class="col-md-3">
                        <label for="inputState" class="col-form-label col-form-label-sm">How much of the time will the pet be outdoors?</label>
                        <input type="text" class="form-control form-control-sm" id="inputState"></input>
                    </div>
                    <div class="col-md-3">
                        <label for="inputZip" class="col-form-label col-form-label-sm">How much of the time will the pet be indoors?</label>
                        <input type="text" class="form-control form-control-sm" id="inputZip"></input>
                    </div>

                    <div class="col-12">
                        <button type="submit" class="btn btn-info">Submit</button>
                    </div>
                </form>
            </Form>
        </div>
    )
}

export default AdoptionForm
