import React from 'react';
import "./MailList.scss"

const Maillist = () => {
    return (
        <div className="mail">
            <h1 className="mail__title">Save time, Save money!</h1>
            <p className="mail__description">Sign up and we'll send the you the best deals</p>
            <div className="mail__inputContainer">
                <input type="text" placeholder="Your Email"/>
                    <button>Subscribe</button>
            </div>

            
        </div>
    );
};

export default Maillist;