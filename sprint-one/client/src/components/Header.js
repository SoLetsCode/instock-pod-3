import React from "react";
import Logo from "../assets/logo/logo-instock.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header__container">
      <div className="header__logo">
        <img className="header__logo" alt="Headerpic" src={Logo} />
      </div>
      <div className="header__subheaders">
        <Link to="/inventory">
          <div className="header__inventory">Inventory</div>
        </Link>
        <Link to="/location">
          <div className="header__locations">Locations</div>
        </Link>
      </div>
    </div>
  );
}
