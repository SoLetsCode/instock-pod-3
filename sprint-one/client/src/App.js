import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import axios from "axios";

import Header from "./components/Header";
import Inventory from "./components/Inventory";
import Locations from "./components/Locations";
import Warehouses from "./components/Warehouses";
import "./styles/App.css";

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
      ],
      locations: {
        warehouseID: 1,
        warehouseName: "Warehouse Number 1",
        address: "469 King St W, Toronto, ON",
        contact: "Maria Weinberg",
        title: "Warehouse Manager",
        phone: "+1 416 678 2345",
        email: "weinberg@instock.com"
      }
    };
  }

  render() {
    return (
      <>
        <Router>
          <Header />
          <Inventory product={this.state.product} />
          <Locations
            product={this.state.product}
            locations={this.state.locations}
          />
          <Warehouses />
        </Router>
      </>
    );
  }
}

export default App;
