import React from "react";
import Home from "./Home";
import Header from "./Header";
import AnimalPage from "./AnimalPage";
import { BrowserRouter, Route } from "react-router-dom";
import NewAnimalForm from "./NewAnimalForm";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Route exact path="/animals" component={AnimalPage} />
        <Route exact path="/new" component={NewAnimalForm} />
        <Route exact path="/" component={Home} />
      </BrowserRouter>
    </div>
  );
}

export default App;
