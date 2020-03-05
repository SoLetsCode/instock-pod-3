import React from "react";
import { v4 as uuidv4 } from "uuid";

//images
import magImg from "../assets/icons/SVG/icon-search.svg";
import kebabImg from "../assets/icons/SVG/icon-kebab-default.svg";
import addImg from "../assets/icons/SVG/icon-add.svg";

function Inventory({ inventory, location }) {
  const findProducts = () => {
    //double for loop to look for products in each warehouse.
    let tempList = [];
    for (let each in inventory) {
      for (let warehouse in location) {
        if (
          location[warehouse].product.hasOwnProperty([inventory[each].name])
        ) {
          //if the product is found, we will create the card or row with information

          tempList.push(
            <div className="inventory__product-card" key={uuidv4()}>
              <div className="inventory__left-container">
                <div className="inventory__container">
                  <p className="inventory__label">ITEM</p>
                  <div className="inventory__name-description-container">
                    <p className="inventory__name">{inventory[each].name}</p>
                    <p className="inventory__description">
                      {inventory[each].description}
                    </p>
                  </div>
                </div>

                <div className="inventory__container">
                  <p className="inventory__label">LAST ORDERED</p>
                  <p className="inventory__description">12/12/2018</p>
                </div>

                <div className="inventory__container">
                  <p className="inventory__label">LOCATION</p>
                  <p className="inventory__description">
                    {`${location[warehouse].city}, ${location[warehouse].province}`}
                  </p>
                </div>

                <div className="inventory__container">
                  <p className="inventory__label">QUANTITY</p>
                  <p className="inventory__description">
                    {location[warehouse].product[inventory[each].name]}
                  </p>
                </div>

                <div className="inventory__container">
                  <p className="inventory__label">STATUS</p>
                  <p className="inventory__description">
                    {location[warehouse].product[inventory[each].name] > 0
                      ? "In Stock"
                      : "Out of Stock"}
                  </p>
                </div>
              </div>
              <div className="inventory__kebab-remove-container">
                <img src={kebabImg} alt="kebab" className="inventory__kebab" />
                <div className="inventory__remove" name={inventory[each].name}>
                  Remove
                </div>
              </div>
            </div>
          );
        }
      }
    }
    return tempList;
  };

  const inventoryList = findProducts();

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
