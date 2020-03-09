import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
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

  getInventoryList = () => {
    axios
      .get("/api/inventory")
      .then(res => {
        console.log(res);
        this.setState({
          inventory: res.data
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <>
        <Router>
          <Header />
          <Switch>
            <Route path="/inventory">
              <Inventory
                inventory={this.state.inventory}
                location={this.state.location}
                getInventoryList={this.getInventoryList}
              />
            </Route>
            <Route path="/location">
              <Locations />
            </Route>
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
