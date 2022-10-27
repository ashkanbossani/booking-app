import { useState } from "react";
import "./Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed } from "@fortawesome/free-solid-svg-icons";
import { faPlane } from "@fortawesome/free-solid-svg-icons";
import { faCar } from "@fortawesome/free-solid-svg-icons";
import { faTaxi } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { faPerson } from "@fortawesome/free-solid-svg-icons";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";

function Header(props) {
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [openDate, setOpenDate] = useState(false);

  return (
    <div className="header">
      <div className="header__container">
        <div className="header__list">
          <div className="header__list--item active">
            <FontAwesomeIcon icon={faBed} />
            <p>Stays</p>
          </div>
          <div className="header__list--item">
            <FontAwesomeIcon icon={faPlane} />
            <p>Flights</p>
          </div>
          <div className="header__list--item">
            <FontAwesomeIcon icon={faCar} />
            <p>Car Rentals</p>
          </div>
          <div className="header__list--item">
            <FontAwesomeIcon icon={faBed} />
            <p>Attractions</p>
          </div>
          <div className="header__list--item">
            <FontAwesomeIcon icon={faTaxi} />
            <p>Airport Taxis</p>
          </div>
        </div>
        <h1 className="header__title">
          Book unique places to stay and things to do.
        </h1>
        <p className="header__description">
          Get rewarded for your travels - inlock instant savings of 10% or more
          with a free Booking.com account
        </p>
        <button className="header__button">Sign In / Register</button>
        <div className="header__search">
          <div className="header__search__item">
            <FontAwesomeIcon icon={faBed} className="header__icons" />
            <input
              type="text"
              placeholder="Where are you going?"
              className="header__search__item--input"
            />
          </div>
          <div className="header__search__item">
            <FontAwesomeIcon icon={faCalendarDays} className="header__icons" />
            <p onClick={()=>setOpenDate(!openDate)} className="header__search__text">{`${format(
              date[0].startDate,
              "MM/dd/yyyy"
            )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</p>
            {openDate && <DateRange
              editableDateInputs={true}
              onChange={(item) => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
              className="header__date"
            />}
          </div>
          <div className="header__search__item">
            <FontAwesomeIcon icon={faPerson} className="header__icons" />
            <p className="header__search__text">2 adults 2 childern 1 room</p>
          </div>
          <div className="header__search__item">
            <button className="header__button">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
