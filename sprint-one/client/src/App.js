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
      inventory: {},
      product: {},
      warehouse: {}
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

  getInventoryList = () => {
    axios
      .get("/api/inventory")
      .then(res => {
        this.setState({
          inventory: res.data
        });
      })
      .catch(err => console.log(err));
  };

  getWarehouse = () => {
    //I think we will use this for the specific warehouse component
  };

  getProduct = () => {
    //I think we will use this for the specific product component
  };

  render() {
    if (Object.keys(this.state.location).length === 0)
      return <h2>Loading...</h2>;
    return (
      <>
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact>
              <Redirect to="/inventory" />
            </Route>
            <Route path="/inventory/:product">
              <Products
                inventory={this.state.inventory}
                location={this.state.location}
              />
            </Route>
            <Route path="/inventory">
              <Inventory
                inventory={this.state.inventory}
                location={this.state.location}
                getInventoryList={this.getInventoryList}
              />
            </Route>
            <Route
              path="/location/:warehouse"
              render={props => (
                <Warehouses
                  {...props}
                  inventory={this.state.inventory}
                  location={this.state.location}
                  getInventoryList={this.getInventoryList}
                />
              )}
            />
            <Route path="/location">
              <Locations
                inventory={this.state.inventory}
                location={this.state.location}
              />
            </Route>
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
