import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import axios from "axios";
import "./styles/App.css";

import Locations from "./components/locations";

class App extends Component {
  render() {
    return (
      <div className="App">
        Instock
        <Locations />
      </div>
    );
  }
}

export default App;
