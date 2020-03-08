import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import Header from "./components/Header";
import Inventory from "./components/Inventory";
import axios from "axios";
import Locations from "./components/Location";
import Warehouses from "./components/Warehouses";
import Products from "./components/Products";

import "./styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: {},
      inventory: {}
    };
  }

  componentDidMount() {
    //making two get requests for location and inventory
    const getLocation = () => axios.get("/api/location");
    const getInventory = () => axios.get("/api/inventory");

    axios
      .all([getLocation(), getInventory()])
      .then(
        axios.spread((location, inventory) => {
          this.setState({
            location: location.data,
            inventory: inventory.data
          });
        })
      )
      .catch(err => console.log(err));
  }

  render() {
    return (
      <>
        <Router>
          <Header />
          <Products
            path="/products"
            inventory={this.state.inventory}
            location={this.state.location}
          />
          <Inventory
            inventory={this.state.inventory}
            location={this.state.location}
          />
          <Locations
            path="/location"
            inventory={this.state.inventory}
            location={this.state.location}
          />
          <Warehouses
            path="/warehouse"
            inventory={this.state.inventory}
            location={this.state.location}
          />
        </Router>
      </>
    );
  }
}

export default App;
