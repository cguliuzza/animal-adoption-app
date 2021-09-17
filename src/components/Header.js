import React from "react";
import { Navbar } from "react-bootstrap"
import logo from "/Users/christinaguliuzza/Development/code/Mod2-react/PROJECT/animal-adoption-app/my-app/src/images/logo-pink.PNG"

function Header() {
  return (
    <header>
      <Navbar>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="/">Happy Tails</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <ul>
                  <li>
                    <a class="nav-link active" aria-current="page" href="/"><h6 className="text-secondary">Home</h6></a>
                  </li>
                  <li>
                    <a class="nav-link" href="/new"><h6 className="text-secondary">Add New Pet</h6></a>
                  </li>
                  <li>
                    <a class="nav-link" href="/animals"><h6 className="text-secondary">Animals for Adoption</h6></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </Navbar>
      <img src={logo} className="logo" alt="Happy Tails Pet Adoption Logo" />
    </header>
  );
}

export default Header;

