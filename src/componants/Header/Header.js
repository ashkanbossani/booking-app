import React from "react";
import "./Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed } from "@fortawesome/free-solid-svg-icons";
import { faPlane } from "@fortawesome/free-solid-svg-icons";
import { faCar } from "@fortawesome/free-solid-svg-icons";
import { faTaxi } from "@fortawesome/free-solid-svg-icons";

function Header(props) {
  return (
    <div className="header">
      <div className="header__list">
        <div className="header__list--item">
          <FontAwesomeIcon icon={faBed} />
          <span>Stays</span>
        </div>
        <div className="header__list--item">
          <FontAwesomeIcon icon={faPlane} />
          <span>Flights</span>
        </div>
        <div className="header__list--item">
          <FontAwesomeIcon icon={faCar} />
          <span>Car Rentals</span>
        </div>
        <div className="header__list--item">
          <FontAwesomeIcon icon={faBed} />
          <span>Attractions</span>
        </div>
        <div className="header__list--item">
          <FontAwesomeIcon icon={faTaxi} />
          <span>Airport Taxis</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
