import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import axios from "axios";
import "./styles/App.css";

import Inventory from "./components/Inventory";

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
      <div className="App">
        Instock <Inventory product={this.state.product} />
      </div>
    );
  }
}

export default App;
