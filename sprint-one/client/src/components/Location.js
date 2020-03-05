import React from "react";
import { Link } from "react-router-dom";

import magIcon from "../assets/icons/SVG/icon-search.svg";
import arrowRtIcon from "../assets/icons/SVG/icon-arrow-right.svg";
import backArrowIcon from "../assets/icons/SVG/icon-back-arrow.svg";

const Locations = props => {
  console.log("Available to locations", props);

  return (
    <section className="locations">
      <header className="locations__header-wrapper">
        <h2 className="locations__title">Locations</h2>
        <input type="text" className="locations__search" placeholder="Search" />
        <img
          src={magIcon}
          alt="magnifying glass"
          className="locations__search-icon"
        />
      </header>

      <section className="locations__data-header">
        <div>WAREHOUSE</div>
        <div>CONTACT</div>
        <div>CONTACT INFORMATION</div>
        <div>CATEGORIES</div>
      </section>

      <section className="locations__data-wrapper">
        <section className="locations__data-body">
          <section className="locations__data-segment">
            <div className="locations__data-warehouse-info">
              <div className="locations__data-warehouse-location-info">
                <h2>locations.name </h2>
                <div>
                  <img className="site-icon" src={arrowRtIcon} />
                </div>
              </div>
              <div className="locations__data-warehouse-address-info">
                <div>469 King St W, Toronto, ON</div>
              </div>
            </div>
            <div className="locations__data-contact-person">
              <div>Maria Weinberg</div>
              <div>Warehouse Manager</div>
            </div>
            <div className="locations__data-contact-info">
              <div>+1 416 678 2345</div>
              <div>weinberg@instock.com</div>
            </div>
            <div className="locations__data-categories">
              <span>
                Industrial, Automotive, Heavy, Mechancial, Engineering,
                Transportation
              </span>
            </div>
          </section>

          <section className="locations__data-segment">
            <div className="locations__data-warehouse-info">
              <span>Warehouse Number 1</span>
              <span>469 King St W, Toronto, ON</span>
            </div>
            <div className="locations__data-contact-person">
              <span>Maria Weinberg</span>
              <span>Warehouse Manager</span>
            </div>
            <div className="locations__data-contact-info">
              <span>+1 416 678 2345</span>
              <span>weinberg@instock.com</span>
            </div>
            <div className="locations__data-categories">
              <span>
                Industrial, Automotive, Heavy, Mechancial, Engineering,
                Transportation
              </span>
            </div>
          </section>

          <section className="locations__data-segment">
            <div className="locations__data-warehouse-info">
              <span>Warehouse Number 1</span>
              <span>469 King St W, Toronto, ON</span>
            </div>
            <div className="locations__data-contact-person">
              <span>Maria Weinberg</span>
              <span>Warehouse Manager</span>
            </div>
            <div className="locations__data-contact-info">
              <span>+1 416 678 2345</span>
              <span>weinberg@instock.com</span>
            </div>
            <div className="locations__data-categories">
              <span>
                Industrial, Automotive, Heavy, Mechancial, Engineering,
                Transportation
              </span>
            </div>
          </section>
        </section>
      </section>
    </section>
  );
};

export default Locations;
