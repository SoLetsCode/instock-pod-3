import React from "react";
import backArrowIcon from "../assets/icons/SVG/icon-back-arrow.svg";
import { v4 as uuidv4 } from "uuid";

import InventoryCard from "./InventoryCard";

const Warehouses = ({ location, inventory, match, getInventoryList }) => {
  const capitalFirst = string => {
    let word = string[0].toUpperCase() + string.slice(1);
    return word;
  };

  let warehouse = capitalFirst(match.params.warehouse);
  //creating this variable so we don't have to keep calling it

  let findInventoryByWarehouse = warehouse => {
    //double for loop to find which products exist at which warehouse
    let tempList = [];
    for (let index in inventory) {
      for (let warehouseName in inventory[index].product) {
        if (warehouseName === warehouse) {
          tempList.push(
            //creating each row of the table
            <InventoryCard
              productName={inventory[index].name}
              productDescription={inventory[index].description}
              city={location[warehouseName].city}
              province={location[warehouseName].province}
              quantity={inventory[index].product[warehouseName]}
              warehouseName={warehouseName}
              getInventoryList={getInventoryList}
              key={uuidv4()}
            />
          );
        }
      }
    }
    return tempList;
  };

  let inventoryList = findInventoryByWarehouse(warehouse);

  return (
    !!location[warehouse] && (
      <section className="warehouses">
        <header className="warehouses__header-wrapper">
          <div className="warehouses__nav-arrow">
            <img className="site-icon" src={backArrowIcon} />
          </div>
          <h2 className="warehouses__title">{location[warehouse].name}</h2>
        </header>

        <section className="warehouses__data-wrapper">
          <section className="warehouses__data-body">
            <section className="warehouses__data-segment">
              <div className="warehouses__details">
                <div className="warehouses__data-warehouse-address-info">
                  <h2>Address</h2>
                  <div className="warehouses__data-address">
                    <div>{location[warehouse].address}</div>
                    <div>{location[warehouse].suite}</div>
                  </div>
                  <div className="warehouses__data-city">
                    <div>{`${location[warehouse].city},${location[warehouse].province}`}</div>
                    <div>{`${location[warehouse].postal},${location[warehouse].country}`}</div>
                  </div>
                </div>
                <div className="warehouses__data-contact-info">
                  <h2>Contact</h2>
                  <div className="warehouses__data-contact-person">
                    <div>{location[warehouse].managerName}</div>
                    <div>{location[warehouse].managerTitle}</div>
                  </div>
                  <div className="warehouses__data-contact-contact-info">
                    <div>{location[warehouse].phone}</div>
                    <div>{location[warehouse].email}</div>
                  </div>
                </div>
              </div>
            </section>
          </section>
        </section>
        {/* adding inventory list here */}
        <div>{inventoryList}</div>
      </section>
    )
  );
};

export default Warehouses;
