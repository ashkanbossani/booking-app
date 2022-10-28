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
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adults: 1,
    children: 0,
    rooms: 1,
  });

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

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
            <p
              onClick={() => setOpenDate(!openDate)}
              className="header__search__text"
            >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
              date[0].endDate,
              "MM/dd/yyyy"
            )}`}</p>
            {openDate && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className="header__date"
              />
            )}
          </div>
          <div className="header__search__item">
            <FontAwesomeIcon icon={faPerson} className="header__icons" />
            <p
              onClick={() => setOpenOptions(!openOptions)}
              className="header__search__text"
            >{`${options.adults} adult · ${options.children} childern · ${options.rooms} room`}</p>
            {openOptions && (
              <div className="header__options">
                <div className="header__options__item">
                  <p className="header__options__text">Adults</p>
                  <div className="header__options__counter">
                    <button
                      className="header__options__button"
                      onClick={() => handleOption("adults", "d")}
                      disabled={options.adults <= 1}
                    >
                      -
                    </button>
                    <p className="header__options__number">{options.adults}</p>
                    <button
                      className="header__options__button"
                      onClick={() => handleOption("adults", "i")}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="header__options__item">
                  <p className="header__options__text">Children</p>
                  <div className="header__options__counter">
                    <button
                      className="header__options__button"
                      onClick={() => handleOption("children", "d")}
                      disabled={options.children < 1}
                    >
                      -
                    </button>
                    <p className="header__options__number">
                     {options.children}
                    </p>
                    <button
                      className="header__options__button"
                      onClick={() => handleOption("children", "i")}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="header__options__item">
                  <p className="header__options__text">Rooms</p>
                  <div className="header__options__counter">
                    <button
                      className="header__options__button"
                      onClick={() => handleOption("rooms", "d")}
                      disabled={options.rooms <= 1}
                    >
                      -
                    </button>
                    <p className="header__options__number">{options.rooms}</p>
                    <button
                      className="header__options__button"
                      onClick={() => handleOption("rooms", "i")}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            )}
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
