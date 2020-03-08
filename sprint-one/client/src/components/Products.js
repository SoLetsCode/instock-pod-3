import React from "react";
import BackArrowIcon from "../assets/icons/SVG/icon-back-arrow.svg";
const Products = () => {
  return (
    <section className="products">
      <div className="">
        <div className="">
          <img src={BackArrowIcon} />
        </div>
        <div className="">Products</div>
        <button>In Stock</button>
        <div>
          <h2>ITEM DESCRIPTION</h2>
          <p>
            Here is a more detailed summary of the product name, it's uses,
            industries and possible attributes that could be used to describe
            the product.
          </p>
        </div>

        <div>
          <div className="">
            <h2>ORDERED BY</h2>
            <p>Mark Sauders</p>
          </div>
          <div className="">
            <h2>REFERENCED NUMBER</h2>
            <p>JK202OFD7811201</p>
          </div>
        </div>
        <div>
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
        <div className="d">
          <h2>CATEGORIES</h2>
          <p>
            Industrial, Automotive, Heavy, Mechancial, Engineering,
            Transporation, Sales
          </p>
        </div>
        <button>EDIT</button>
      </div>
    </section>
  );
};

export default Products;
