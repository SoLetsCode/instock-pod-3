import React from "react";
import { Link } from "react-router-dom";

// IMAGES
import magIcon from "../assets/icons/SVG/icon-search.svg";
import arrowRtIcon from "../assets/icons/SVG/icon-arrow-right.svg";

// FUNCTIONS
// Component Header
const ComponentHeader = () => {
  return (
    <header className="locations__header-wrapper">
      <h2 className="locations__title">Locations</h2>

      <form className="locations__search-form" action="">
        <img
          src={magIcon}
          alt="magnifying glass"
          className="locations__search-icon"
        />
        <input
          type="text"
          className="locations__search-input"
          placeholder="Search"
        />
      </form>
    </header>
  );
};
// Data Table Header
const TableHeader = () => {
  return (
    <section className="locations__data-header">
      <div>WAREHOUSE</div>
      <div>CONTACT</div>
      <div>CONTACT INFORMATION</div>
      <div>CATEGORIES</div>
    </section>
  );
};

// Locations
const TableBody = location => {
  return (
    <section className="locations__data-body">
      <div className="locations__data-warehouse-segment locations__data-warehouse-info">
        <div className="locations__data-warehouse-location-info">
          <h2 className="locations__data-warehouse-location-info-title">
            Warehouse Number 1
          </h2>
          <div className="site-icon-wrapper">
            <img className="site-icon" src={arrowRtIcon} />
          </div>
        </div>
        <div className="locations__data-warehouse-address-info">
          <div>469 King St W, Toronto, ON</div>
        </div>
      </div>

      <div className="locations__data-warehouse-segment locations__data-contact-person">
        <div>Maria Weinberg</div>
        <div>Warehouse Manager</div>
      </div>

      <div className="locations__data-warehouse-segment locations__data-contact-info">
        <div>+1 416 678 2345</div>
        <div>weinberg@instock.com</div>
      </div>

      <div className="locations__data-warehouse-segment locations__data-categories">
        <div>
          Industrial, Automotive, Heavy, Mechancial, Engineering, Transportation
        </div>
      </div>
    </section>
  );
};
//const getTableBody = getTableBodyData();

// LOCATIONS COMPONENT
const Locations = props => {
  const { location } = props;

  // THE RETURN
  return (
    <section className="locations">
      {console.log("Locations component has access to: ", props.location)}
      <section className="locations__data-wrapper">
        <ComponentHeader />
        <TableHeader />
        <TableBody location={location} />
      </section>
    </section>
  );
};

export default Locations;
