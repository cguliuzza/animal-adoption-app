import React from "react";
import Home from "./Home";
import Header from "./Header";
import AnimalPage from "./AnimalPage";
import { BrowserRouter, Route } from "react-router-dom";


function App() {

return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Route exact path="/animals" component={AnimalPage} />
        <Route exact path="/" component={Home} />
      </BrowserRouter>
    </div>
  );
}

export default App;
