import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

//images
import kebabImg from "../assets/icons/SVG/icon-kebab-default.svg";

export default class InventoryCard extends Component {
  //takes city productDescription productName city province quantity

  constructor(props) {
    super(props);
    this.state = {
      hide: false
    };
  }

  removeClick = () => {
    //add in the axios call to remove item here. Sending the productName and warehouseName in the req.body.
    console.log("removing ", this.props.productName);
    console.log("from, ", this.props.warehouseName);
  };

  kebabClick = event => {
    this.state.hide
      ? this.setState({ hide: false })
      : this.setState({ hide: true });
  };

  render() {
    return (
      <div className="inventory__product-card">
        <div className="inventory__left-container">
          <div className="inventory__container">
            <p className="inventory__label">ITEM</p>
            <div className="inventory__name-description-container">
              <p className="inventory__name">{this.props.productName}</p>
              <p className="inventory__description">
                {this.props.productDescription}
              </p>
            </div>
          </div>

          <div className="inventory__container">
            <p className="inventory__label">LAST ORDERED</p>
            <p className="inventory__description">12/12/2018</p>
          </div>

          <div className="inventory__container">
            <p className="inventory__label">LOCATION</p>
            <p className="inventory__description">{`${this.props.city}, ${this.props.province}`}</p>
          </div>

          <div className="inventory__container">
            <p className="inventory__label">QUANTITY</p>
            <p className="inventory__description">{this.props.quantity}</p>
          </div>

          <div className="inventory__container">
            <p className="inventory__label">STATUS</p>
            <p className="inventory__description">
              {this.props.quantity > 0 ? "In Stock" : "Out of Stock"}
            </p>
          </div>
        </div>
        <div className="inventory__kebab-remove-container">
          <img
            src={kebabImg}
            alt="kebab"
            className="inventory__kebab"
            onClick={this.kebabClick}
          />
          {/* renders remove button based on togglestate */}
          {this.state.hide ? (
            <div
              className="inventory__remove"
              onClick={this.removeClick}
              onMouseOut={this.kebabClick}
            >
              {" "}
              Remove{" "}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}
