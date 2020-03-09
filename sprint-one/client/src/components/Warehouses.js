import React from "react";
import backArrowIcon from "../assets/icons/SVG/icon-back-arrow.svg";
import kebabIcon from "../assets/icons/SVG/icon-kebab-default.svg";

const Warehouses = ({ locations }) => {
  return (
    <section className="warehouses">
      <header className="warehouses__header-wrapper">
        <div className="warehouses__nav-arrow">
          <img className="site-icon" src={backArrowIcon} />
        </div>
        <h2 className="warehouses__title">Warehouse Name</h2>
      </header>

      <section className="warehouses__data-wrapper">
        <section className="warehouses__data-body">
          <section className="warehouses__data-segment">
            <div className="warehouses__details">
              <div className="warehouses__data-warehouse-address-info">
                <h2>Address</h2>
                <div className="warehouses__data-address">
                  <div>123 Main Stree W.</div>
                  <div>Suite 201</div>
                </div>
                <div className="warehouses__data-city">
                  <div>Toronto, ON</div>
                  <div>M65 GB7 CA</div>
                </div>
              </div>
              <div className="warehouses__data-contact-info">
                <h2>Contact</h2>
                <div className="warehouses__data-contact-person">
                  <div>Maria Weinberg</div>
                  <div>Warehouse Manager</div>
                </div>
                <div className="warehouses__data-contact-contact-info">
                  <div>+1 416 678 2345</div>
                  <div>weinberg@instock.com</div>
                </div>
              </div>
            </div>

            <section className="products-summary">
              <section className="products-summary__card-header">
                <div>ITEM</div>
                <div>LAST ORDERED</div>
                <div>LOCATION</div>
                <div>QUANTITY</div>
                <div>STATUS</div>
              </section>

              <div className="products-summary__product-card">
                <div className="products-summary__content">
                  <div className="products-summary__container">
                    <p className="products-summary__label">ITEM</p>
                    <div className="products-summary_name-description-container">
                      <p className="products-summary__name">Name here</p>
                      <p className="products-summary__description">
                        Description Here
                      </p>
                    </div>
                  </div>

                  <div className="products-summary__container">
                    <p className="products-summary__label">LAST ORDERED</p>
                    <p className="products-summary__description">
                      Last Ordered Here
                    </p>
                  </div>

                  <div className="products-summary__container">
                    <p className="products-summary__label">LOCATION</p>
                    <p className="products-summary__description">
                      Location Here
                    </p>
                  </div>

                  <div className="products-summary__container">
                    <p className="products-summary__label">QUANTITY</p>
                    <p className="products-summary__description">
                      quantity here
                    </p>
                  </div>

                  <div className="products-summary__container">
                    <p className="products-summary__label">STATUS</p>
                    <p className="products-summary__description">
                      In Stock Here
                    </p>
                  </div>

                  <div className="products-summary__container">
                    <img src={kebabIcon} alt="kebab" />
                    <div className="products-summary__remove">Remove</div>
                  </div>
                </div>
              </div>
            </section>
          </section>
        </section>
      </section>
    </section>
  );
};

export default Warehouses;
