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

      <div className="products__segment-panels">
        <div className="products__segment-uno">
          <h2 className="products__segment-flex-item products__segment-title">
            ITEM DESCRIPTION
          </h2>
          <p className="products__segment-flex-item products__segment-content">
            Here is a more detailed summary of the product name, it's uses,
            industries and possible attributes that could be used to describe
            the product.
          </p>
        </div>

        <div products__segment-two>
          <div className="products__segment">
            <div className="products__segment-section">
              <h2 className="products__segment-flex-item products__segment-title">
                ORDERED BY
              </h2>
              <p className="products__segment-flex-item products__segment-content">
                Mark Sauders
              </p>
            </div>
            <div className="products__segment-section">
              <h2 className="products__segment-flex-item products__segment-title">
                REFERENCED NUMBER
              </h2>
              <p className="products__segment-flex-item products__segment-content">
                JK202OFD7811201
              </p>
            </div>
          </div>

          <div className="products__segment">
            <div className="products__segment-section">
              <h2 className="products__segment-flex-item products__segment-title">
                LAST ORDERED
              </h2>
              <p className="products__segment-flex-item products__segment-content">
                5/24/2018
              </p>
            </div>
            <div className="products__segment-section">
              <h2 className="products__segment-flex-item products__segment-title">
                LOCATION
              </h2>
              <p className="products__segment-flex-item products__segment-content">
                Toronto, ON
              </p>
            </div>
          </div>

          <div className="products__segment-uno products__segment-final">
            <div className="products__segment-section">
              <h2 className="products__segment-flex-item products__segment-title">
                QUANTITY
              </h2>
              <p className="products__segment-flex-item products__segment-content">
                12,000
              </p>
            </div>
          </div>

          <div className="products__segment-uno">
            <div className="products__segment-section">
              <h2 className="products__segment-flex-item products__segment-title">
                CATEGORIES
              </h2>
              <p className="products__segment-flex-item products__segment-content">
                Industrial, Automotive, Heavy, Mechancial, Engineering,
                Transporation, Sales
              </p>
            </div>
            <div className="products__segment-section">
              <div>&nbsp;</div>
            </div>
          </div>
        </div>
      </div>

      <div className="products__edit-btn-wrapper">
        <button className="products__edit-btn">EDIT</button>
      </div>
    </section>
  );
};

export default Products;
