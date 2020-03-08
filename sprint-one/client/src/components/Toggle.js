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
      <div className="Toggletog">
        <h2>In Stock</h2>
        <label>
          <Rswitch
            onChange={this.handleChange}
            checked={this.handleChange}
            className="react-switch"
          />
        </label>
        <p>
          The switch is <span>{this.state.checked ? "on" : "off"}</span>.
        </p>
      </div>
    );
  }
}

export default Toggle;
