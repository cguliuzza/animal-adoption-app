import React from "react";
import { Navbar } from "react-bootstrap"

function Header() {
  return (
    <header>
      <h1>
        Animals App
        <span className="logo" role="img">
          🌱
        </span>
      </h1>
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
                    <a class="nav-link" href="/new">Add New Pet</a>
                  </li>
                  <li>
                    <a class="nav-link" href="/animals">Animals for Adoption</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </Navbar>
    </header>
  );
}

export default Header;