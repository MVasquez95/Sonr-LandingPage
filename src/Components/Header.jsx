import React from "react";
import Navbar from "./Navbar";

function Header() {
    return(
        <div id='main'>
            <Navbar/>
            <div className='name'>
                <h1><span>We make dreams </span>come code.</h1>
                <p className="details">We have 4 years of experience translating business objetives into optimal software solutions.</p>
                <a href="#" className="cv-btn">Let's Code</a>
            </div>
        </div>
    )
}

export default Header;