import React from "react";
import { v4 as uuidv4 } from "uuid";
import InventoryCard from "./InventoryCard";

//images
import magImg from "../assets/icons/SVG/icon-search.svg";
import addImg from "../assets/icons/SVG/icon-add.svg";

function Inventory({ inventory, location }) {
  const findWarehouse = () => {
    //double for loop to find which products exist at which warehouse
    let tempList = [];
    for (let index in inventory) {
      for (let warehouseName in inventory[index].product) {
        tempList.push(
          <InventoryCard
            productName={inventory[index].name}
            productDescription={inventory[index].description}
            city={location[warehouseName].city}
            province={location[warehouseName].province}
            quantity={inventory[index].product[warehouseName]}
          />
        );
      }
    }
    return tempList;
  };

  const inventoryList = findWarehouse();

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
      <div>{inventoryList}</div>
      <div className="inventory__add-button">
        <img src={addImg} alt="add button" className="inventory__add-img" />
      </div>
    </div>
  );
}

export default Inventory;
