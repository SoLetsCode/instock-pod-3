import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Header from "./components/Header";
import Inventory from "./components/Inventory";
import Createnew from "./components/Createnew";
import axios from "axios";
import "./styles/App.css";

import Locations from "./components/Locations";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: [
        {
          id: "aegijweog",
          name: "Product Name Here",
          description: "brief description",
          lastOrder: "05/24/2018",
          location: "Toronto, CAN",
          quantity: 12000
        },
        {
          id: "12345",
          name: "Pokeball",
          description: "red and white captures pokemon",
          lastOrder: "05/24/2019",
          location: "Toronto, CAN",
          quantity: 9000
        }
      ]
    };
  }

  render() {
    return (
      <>
        <Router>
          <Header />
          <Inventory product={this.state.product} />
          <Createnew />
          <Locations />
        </Router>
      </>
    );
  }
}

export default App;
