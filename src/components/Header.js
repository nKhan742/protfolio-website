import React from "react";
import { FaPhoneAlt } from 'react-icons/fa'

import "./Header.scss";

const Header = () => {
    return(
        <nav className="navbar navbar-expand-lg py-3 w-100">
            <div className="container">
                <a className="navbar-brand primary4" href="#">nk</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <a className="nav-link active px-4" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link px-4" href="#">About Us</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link px-4" href="#">Services</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link px-4" href="#">Portfolio</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link px-4" href="#">Contact Me</a>
                        </li>
                        <li className="nav-item mx-4 d-flex align-items-center">
                        |
                        </li>
                        <li className="nav-item  px-4 d-flex align-items-center">
                            <FaPhoneAlt/>&nbsp;&nbsp;
                            <p className="m-0"><a className=" primary2">+91-997 180 1873</a></p>
                        </li>
                    </ul>
                </div>
            </div>
            </nav>
    )
}

export default Header;