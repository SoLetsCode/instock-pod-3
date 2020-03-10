import React from "react";

import Toggle from "./Toggle";
import axios from "axios";

export default class Createnew extends React.Component {
  state = {
    chosenWarehouse: "Warehouse1"
  };

  selectionClick = event => {
    this.setState({
      chosenWarehouse: event.target.value
    });
  };

  submitHandler = event => {
    event.preventDefault();
    this.props.addClick();
    this.props.getInventoryList();
    console.log(event.target);
    console.log(event.target.title.value);
    axios
      .post(`http://localhost:5000/api/inventory/${event.target.name.value}`, {
        title: event.target.name.value,
        description: event.target.description.value,
        quantity: event.target.quantity.value,
        warehouse: this.state.chosenWarehouse
      })
      .then(res => console.log(res.data));
  };
  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div className="createnew__all">
          <div className="createnew__product">
            <div className="createnew__producti">
              <p className="createnew__textboxtitles">PRODUCT</p>
              <textarea
                className="createnew__textbox"
                placeholder="Item Name"
                name="name"
              ></textarea>
            </div>
            <div className="createnew__warehousei">
              <p className="createnew__textboxtitles">WAREHOUSE</p>
              <select
                onChange={this.selectionClick}
                name="selection"
                id="createnew-selection"
              >
                <option value="Warehouse1">Warehouse1</option>
                <option value="Warehouse2">Warehouse2</option>
                <option value="Warehouse3">Warehouse3</option>
              </select>
            </div>
          </div>
          <div className="createnew__location">
            <div className="createnew__locationi">
              <p className="createnew__textboxtitles">CITY</p>
              <textarea
                className="createnew__textbox"
                placeholder="City"
                name="city"
              ></textarea>
            </div>
            <div className="createnew__countryi">
              <p className="createnew__textboxtitles">COUNTRY</p>
              <select>
                <option>Canada </option>
                <option>United States </option>
                <option>Portugal </option>
              </select>
            </div>
          </div>
          <div className="createnew__availability">
            <div className="createnew__quantityi">
              <p className="createnew__textboxtitles">QUANTITY</p>
              <textarea
                className="createnew__textbox"
                placeholder="0"
                name="quantity"
              ></textarea>
            </div>
            <div className="createnew__instock">
              <p className="createnew__textboxtitles">STATUS</p>
              <Toggle />
            </div>
          </div>
          <div className="createnew__description">
            <p className="createnew__textboxtitles">ITEM DESCRIPTION</p>
            <textarea
              className="createnew__textbox"
              placeholder="(Optional)"
              name="description"
            ></textarea>
          </div>
          <div className="createnew__save">
            <button>
              <span>SAVE</span>
            </button>
          </div>
          <div className="createnew__cancel">
            <span onClick={this.props.addClick}> CANCEL</span>
          </div>
        </div>
      </form>
    );
  }
}
