import React from "react";
import BannerProfile from '../img/banner-profile.png';
import { FaPhoneAlt, FaDownload, FaPlay, FaRegGrinStars } from 'react-icons/fa'


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
            <div className="d-flex justify-content-around align-items-center banner-container">
                <div className="banner-content">
                    <p className="m-0 primary2 line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hello</p>
                    <h1 className="ml-lg-5">I'M NADEEM<br/>KHAN</h1>
                    <p className="primary3 mb-4">Frontend Developer</p>
                    <div className="d-flex"> 
                        <ButtonComponent class="custom-btn btn px-4" name="Hire me"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                
                        <a href="#" className="btn anchor-btn" download>Download CV <FaDownload/></a>  
                    </div>
                </div>
                <div className="position-relative p-5">
                    <div className="banner-profile">
                        <img src={BannerProfile} alt="profile-img"  width="100%"/>
                    </div>
                    <div className="experience-container box position-absolute">
                        <div className="experience d-flex align-items-center justify-content-between">
                            <div className="icon-box d-flex align-items-center justify-content-center">
                                <FaRegGrinStars className="primary2"/>
                            </div>
                            <div className="exp-content">
                                <p className="m-0 primary3">Experience</p>
                                <h4 className="m-0">4 Years</h4>
                            </div>
                        </div>
                    </div>
                    <div className="music-box-container box position-absolute">
                            <div className="music-box">
                                <p className="m-0 primary4">Music</p>
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
                    <div className="position-absolute play-btn-container">
                        <div className="play-btn">
                            <FaPlay/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;