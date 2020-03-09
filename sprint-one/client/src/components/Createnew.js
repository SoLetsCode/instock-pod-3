import React from "react";

import Toggle from "./Toggle";

export default function Createnew() {
  return (
    <form>
      <div className="createnew__all">
        <div className="createnew__title">Create New</div>
        <div className="createnew__product">
          <p className="createnew__textboxtitles">PRODUCT</p>
          <textarea
            className="createnew__textbox"
            placeholder="Item Name"
          ></textarea>
          <p className="createnew__textboxtitles">WAREHOUSE</p>
          <select className="createnew__dropdown">
            <option>Warehouse 1 </option>
            <option>Warehouse 2 </option>
            <option>Warehouse 3 </option>
          </select>
        </div>
        <div className="createnew__location">
          <p className="createnew__textboxtitles">CITY</p>
          <textarea
            className="createnew__textbox"
            placeholder="City"
          ></textarea>
          <p className="createnew__textboxtitles">COUNTRY</p>
          <select className="createnew__dropdown">
            <option>Canada </option>
            <option>United States </option>
            <option>Portugal </option>
          </select>
        </div>
        <div className="createnew__availability">
          <p className="createnew__textboxtitles">QUANTITY</p>
          <textarea className="createnew__textbox" placeholder="0"></textarea>
          <div className="createnew__instock">
            <p className="createnew__textboxtitles">STATUS</p>
            <Toggle />
          </div>
        </div>
        <div className="createnew__description">
          <p className="createnew__textboxtitles">ITEM DESCRIPTION</p>
          <textarea
            className="createnew__textboxdescription"
            placeholder="(Optional)"
          ></textarea>
        </div>
        <div className="createnew__buttons">
          <button className="createnew__save">
            <span className>SAVE</span>
          </button>
        </div>
        <div className="createnew__cancel">
          <span> CANCEL</span>
        </div>
      </div>
    </form>
  );
}
