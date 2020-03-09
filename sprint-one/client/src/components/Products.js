import React from "react";
import BackArrowIcon from "../assets/icons/SVG/icon-back-arrow.svg";
const Products = () => {
  return (
    <section className="products">
      <div className="products__header">
        <div className="products__header-back-btn">
          <img className="products__header-back-icon" src={BackArrowIcon} />
        </div>
        <div className="products__header-title">Products</div>
        <button className="products__header-instock-btn">In Stock</button>
      </div>

      <div className="products__segment">
        <h2>ITEM DESCRIPTION</h2>
        <p>
          Here is a more detailed summary of the product name, it's uses,
          industries and possible attributes that could be used to describe the
          product.
        </p>
      </div>

      <div className="products__segment">
        <div className="">
          <h2>ORDERED BY</h2>
          <p>Mark Sauders</p>
        </div>
        <div className="">
          <h2>REFERENCED NUMBER</h2>
          <p>JK202OFD7811201</p>
        </div>
      </div>

      <div className="products__segment">
        <div className="div">
          <h2>LAST ORDERED</h2>
          <p>5/24/2018</p>
        </div>
        <div className="">
          <h2>LOCATION</h2>
          <p>Toronto, ON</p>
        </div>
      </div>

      <div className="">
        <h2>QUANTITY</h2>
        <p>12,000</p>
      </div>
      <div className="">
        <h2>CATEGORIES</h2>
        <p>
          Industrial, Automotive, Heavy, Mechancial, Engineering, Transporation,
          Sales
        </p>
      </div>
      <button>EDIT</button>
    </section>
  );
};

export default Products;
