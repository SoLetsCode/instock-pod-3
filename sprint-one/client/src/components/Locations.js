import React from "react";

const locations = () => {
  return (
    <main className="main">
      <section className="locations">
        <header className="locations__header-wrapper">
          <h2 className="locations__title">Locations</h2>
          <input
            type="text"
            className="locations__search"
            placeholder="Search"
          />
        </header>

        <section className="locations__data-header">
          <span>WAREHOUSE</span>
          <span>CONTACT</span>
          <span>CONTACT INFORMATION</span>
          <span>CATEGORIES</span>
        </section>

        <section className="locations__data-wrapper">
          <section className="locations__data-body">
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
    </main>
  );
};

export default locations;
