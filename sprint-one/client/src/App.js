import React, { Component } from "react";
import axios from "axios";
import "./styles/App.css";
import Header from "./components/Header";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Header />
          <div className="App">Instock</div>
        </Router>
      </>
    );
  }
}

export default App;
