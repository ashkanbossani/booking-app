import React from 'react';
import "./Navbar.scss"

function Navbar(props) {
    return (
        <div className="navbar">
            <div className="navbar__container">
                <span className="navbar__logo">Booking.com</span>
                <div className="navbar__items">
                    <button className="navbar__button">Login</button>
                    <button className="navbar__button">Sign Up</button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;