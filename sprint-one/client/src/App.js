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

    //bind
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

  //hand.e

  render() {
    return (
      <>
        <Router>
          <Header />
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> fixed spelling mistake
=======
          <Locations />
>>>>>>> added toggle button, working!
          <Inventory
            inventory={this.state.inventory}
            location={this.state.location}
          />
<<<<<<< HEAD
<<<<<<< HEAD
=======
          <Inventory product={this.state.product} />
          <Createnew />
>>>>>>> finished skeleton of createnew component
=======
>>>>>>> fixed spelling mistake
          <Locations />
=======
          <Createnew />
>>>>>>> added toggle button, working!
        </Router>
      </>
    );
  }
}

export default App;
