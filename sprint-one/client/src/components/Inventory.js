import React from "react";
import magImg from "../assets/icons/SVG/icon-search.svg";
import kebabImg from "../assets/icons/SVG/icon-kebab-default.svg";
import addImg from "../assets/icons/SVG/icon-add.svg";

function Inventory({ product }) {
  //expects product with the following keys [id, name, description, lastOrder, location, quantity]
  const inventory = product.map(data => {
    return (
      <div className="inventory__product-card" id={data.id}>
        <div className="inventory__left-container">
          <div className="inventory__container">
            <p className="inventory__label">ITEM</p>
            <div className="inventory__name-description-container">
              <p className="inventory__name">{data.name}</p>
              <p className="inventory__description">{data.description}</p>
            </div>
          </div>

          <div className="inventory__container">
            <p className="inventory__label">LAST ORDERED</p>
            <p className="inventory__description">{data.lastOrder}</p>
          </div>

          <div className="inventory__container">
            <p className="inventory__label">LOCATION</p>
            <p className="inventory__description">{data.location}</p>
          </div>

          <div className="inventory__container">
            <p className="inventory__label">QUANTITY</p>
            <p className="inventory__description">{data.quantity}</p>
          </div>

          <div className="inventory__container">
            <p className="inventory__label">STATUS</p>
            <p className="inventory__description">
              {data.quantity > 0 ? "In Stock" : "Out of Stock"}
            </p>
          </div>
        </div>
        <div className="inventory__kebab-remove-container">
          <img src={kebabImg} alt="kebab" className="inventory__kebab" />
          <div className="inventory__remove">Remove</div>
        </div>
      </div>
    );
  });
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
      <div>{inventory}</div>
      <div className="inventory__add-button">
        <img src={addImg} alt="add button" className="inventory__add-img" />
      </div>
    </div>
  );
}

export default Inventory;
