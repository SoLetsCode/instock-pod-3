import React, { Component } from "react";
import Rswitch from "react-switch";

class Toggle extends Component {
  constructor() {
    super();
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(checked) {
    this.setState({ checked });
  }

  render() {
    return (
      <div className="toggletog">
        <p className="toggletog__title">In Stock</p>
        <label>
          <Rswitch
            onChange={this.handleChange}
            checked={this.handleChange}
            className="react-switch"
          />
        </label>
        <p>
          <span>{this.state.checked ? "on" : "off"}</span>.
        </p>
      </div>
    );
  }
}

export default Toggle;
