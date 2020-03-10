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
  const LocationData = Object.keys(location.location).map((loc, i) => {
    return (
      <>
        <div className="locations__data-warehouse-segment locations__data-warehouse-info">
          <div className="locations__data-warehouse-location-info">
            <h2 className="locations__data-warehouse-location-info-title">
              <Link to={`/location/${location.location[loc].name}`}>
                {location.location[loc].name}
              </Link>
            </h2>
            <div className="site-icon-wrapper">
              <img className="site-icon" src={arrowRtIcon} alt="right arrow" />
            </div>
          </div>
          <div className="locations__data-warehouse-address-info">
            <div>{location.location[loc].address}</div>
          </div>
        </div>
        <div className="locations__data-warehouse-segment locations__data-contact-person">
          <div>{location.location[loc].managerName}</div>
          <div>{location.location[loc].managerTitle}</div>
        </div>
        <div className="locations__data-warehouse-segment locations__data-contact-info">
          <div>{location.location[loc].phone}</div>
          <div>{location.location[loc].email}</div>
        </div>
        <div className="locations__data-warehouse-segment locations__data-categories">
          <div>{location.location[loc].category}</div>
        </div>
      </>
    );
  });
  console.log(LocationData);
  return <section className="locations__data-body">{LocationData}</section>;
};
//const getTableBody = getTableBodyData();
// LOCATIONS COMPONENT
const Locations = props => {
  const { location } = props;

  return (
    <section className="locations">
      <section className="locations__data-wrapper">
        <ComponentHeader />
        <TableHeader />
        <TableBody location={location} />
      </section>
    </section>
  );
};
export default Locations;
