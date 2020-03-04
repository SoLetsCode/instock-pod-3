import React from "react";

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
          <p className="createnew__textboxtitles">STATUS</p>
        </div>
      </div>
    </form>
  );
}
