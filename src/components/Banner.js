import React from "react";
import BannerProfile from '../img/banner-profile.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ButtonComponent from "./ButtonComponent";
import "./Banner.scss";

const Banner = () => {
    // function toggle(button) {
    //     var player = document.getElementById("music");
    //     player.classList.toggle("paused");
    //     if (button.innerHTML == "Kill the Joy.") {
    //       button.innerHTML = "Crank it up!";
    //     } else {
    //       button.innerHTML = "Kill the Joy.";
    //     }
    //   }
    return(
        <div className="container">
            <div className="d-flex justify-content-between align-items-center banner-container">
                <div className="banner-content">
                    <p className="m-0 primary2 line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hello</p>
                    <h1 className="">I'M NADEEM<br/>KHAN</h1>
                    <p className="primary3 mb-4">Frontend Developer</p>
                    <div className="d-flex"> 
                        <ButtonComponent class="custom-btn btn px-4" name="Hire me"/>
                        <ButtonComponent class="anchor-btn btn mx-4" name="Download CV"/>
                    </div>
                </div>
                <div className="position-relative p-5">
                    <div className="banner-profile">
                        <img src={BannerProfile} alt="profile-img"  width="100%"/>
                    </div>
                    <div className="experience box d-flex align-items-center justify-content-between position-absolute">
                        <div className="icon-box">
                            <FontAwesomeIcon className="primary2" icon="phone" size="sm"/>
                        </div>
                        <div className="exp-content">
                            <p className="m-0 primary3">Experience</p>
                            <h4 className="m-0">4 Years</h4>
                        </div>
                    </div>
                    <div className="music-box box position-absolute">
                            <p className="m-0 primary3">Music</p>
                            
                            <div class="now playing" id="music">
                                <span class="bar n1">A</span>
                                <span class="bar n2">B</span>
                                <span class="bar n3">c</span>
                                <span class="bar n4">D</span>
                                <span class="bar n5">E</span>
                                <span class="bar n6">F</span>
                                <span class="bar n7">G</span>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;