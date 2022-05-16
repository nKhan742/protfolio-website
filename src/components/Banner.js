import React from "react";
import BannerProfile from '../img/banner-profile.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import "./Banner.scss";

const Banner = () => {
    return(
        <div className="container">
            <div className="d-flex justify-content-between align-items-center banner-container">
                <div className="banner-content">
                    <p className="m-0 primary2">-Hello</p>
                    <h1 className="">I'M NADEEM<br/>KHAN</h1>
                    <p className="primary3">Frontend Developer</p>
                </div>
                <div className="position-relative p-5">
                    <div className="banner-profile">
                        <img src={BannerProfile} alt="profile-img"  width="100%"/>
                    </div>
                    <div className="experience box d-flex align-items-center position-absolute">
                        <div className="icon-box">
                            <FontAwesomeIcon className="primary2" icon="phone" size="sm"/>
                        </div>
                        <div className="exp-content">
                            <p className="m-0 primary3">Experience</p>
                            <h4 className="m-0">4 Years</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;