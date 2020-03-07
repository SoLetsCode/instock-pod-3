import React from "react";

import Toggle from "./Toggle";

export default function Createnew() {
  return (
    <form>
      <div className="createnew__all">
        <div className="createnew__product">
          <p className="createnew__textboxtitles">PRODUCT</p>
          <textarea
            className="createnew__textbox"
            placeholder="Item Name"
          ></textarea>
          <p className="createnew__textboxtitles">LAST ORDERED</p>
          <textarea
            className="createnew__textbox"
            placeholder="yyyy-mm-dd"
          ></textarea>
        </div>
        <div className="createnew__location">
          <p className="createnew__textboxtitles">CITY</p>
          <textarea
            className="createnew__textbox"
            placeholder="City"
          ></textarea>
          <p className="createnew__textboxtitles">COUNTRY</p>
          <select>
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
      </div>
    </form>
  );
}
