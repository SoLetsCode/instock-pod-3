import React, { Component } from "react";
import uuid, { v4 as uuidv4 } from "uuid";
import InventoryCard from "./InventoryCard";
import CreateNew from "./Createnew";

//images
import magImg from "../assets/icons/SVG/icon-search.svg";
import addImg from "../assets/icons/SVG/icon-add.svg";

// function Inventory({ inventory, location }) {
//   const addClick = event => {
//     console.log(event);
//   };

//   const findWarehouse = () => {
//     //double for loop to find which products exist at which warehouse
//     let tempList = [];
//     for (let index in inventory) {
//       for (let warehouseName in inventory[index].product) {
//         tempList.push(
//           //creating each row of the table
//           <InventoryCard
//             productName={inventory[index].name}
//             productDescription={inventory[index].description}
//             city={location[warehouseName].city}
//             province={location[warehouseName].province}
//             quantity={inventory[index].product[warehouseName]}
//             warehouseName={warehouseName}
//             key={uuidv4()}
//           />
//         );
//       }
//     }
//     return tempList;
//   };

//   const inventoryList = findWarehouse();

//   );
// }

// export default Inventory;

export default class Inventory extends Component {
  state = {
    show: false
  };

  addClick = () => {
    this.state.show
      ? this.setState({ show: false })
      : this.setState({ show: true });
  };

  findInventoryByWarehouse = () => {
    //double for loop to find which products exist at which warehouse
    const { inventory, location } = this.props;
    let tempList = [];
    for (let index in inventory) {
      for (let warehouseName in inventory[index].product) {
        tempList.push(
          //creating each row of the table
          <InventoryCard
            productName={inventory[index].name}
            productDescription={inventory[index].description}
            city={location[warehouseName].city}
            province={location[warehouseName].province}
            quantity={inventory[index].product[warehouseName]}
            warehouseName={warehouseName}
            key={uuidv4()}
          />
        );
      }
    }
    return tempList;
  };

  render() {
    return (
      <div className="inventory">
        <header className="inventory__header">
          <h1 className="inventory__title">Inventory</h1>
          <form className="inventory__search-form">
            <img
              src={magImg}
              alt="magnifying glass"
              className="inventory__search-img"
            />
            <input
              type="text"
              className="inventory__search-input"
              placeholder="Search"
            />
          </form>
        </header>
        <div>{this.findInventoryByWarehouse()}</div>
        <div className="inventory__add-button" onClick={this.addClick}>
          <img src={addImg} alt="add button" className="inventory__add-img" />
        </div>
        {this.state.show ? <CreateNew /> : ""}
      </div>
    );
  }
}
