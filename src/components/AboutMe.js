import React from "react";
import { BsCheckCircle } from 'react-icons/bs'

import { FaDownload} from 'react-icons/fa'


import ButtonComponent from "./ButtonComponent";

import "./AboutMe.scss";

const AboutMe = () => {
  return (
    <div className="services section-padding">
        <div className="container">
            <div className="d-lg-flex align-items-center justify-content-between">
            <div className="service-content w-50 ms-5 pl-5">
                    <p className="m-0 primary2 line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;About Me</p>
                    <h1 className="primary4 ml-lg-5">Hi, I am here<br/>to help your next project</h1>
                    <p className="primary3 mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <ul>
                        <li className="primary4 d-flex align-items-center my-2"><BsCheckCircle className="me-3 primary2"/>Problem Solving</li>
                        <li className="primary4 d-flex align-items-center my-2"><BsCheckCircle className="me-3 primary2"/>Creative Idea</li>
                        <li className="primary4 d-flex align-items-center my-2"><BsCheckCircle className="me-3 primary2"/>Search Alot</li>
                        <li className="primary4 d-flex align-items-center my-2"><BsCheckCircle className="me-3 primary2"/>High Quality</li>
                    </ul>
                    <div className="d-flex mt-5"> 
                        <ButtonComponent class="custom-btn btn px-4" name="Hire me"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                
                        <a href="#" className="btn anchor-btn" download>Download CV <FaDownload/></a>  
                    </div>
                </div>

                <div className="service-items w-50">
                   <div className="d-lg-flex align-items-center">
                      {/* <ServiceBox class="mb-5 me-5" imgName={webDesign} text={'Web\nDesign'}/> */}
                      {/* <ServiceBox class="mt-5" imgName={mobileAppDesign}  text={"Mobile App\nDesign"}/> */}
                   </div>
                    {/* <ServiceBox imgName={prototypingWireframe} text={"Prototyping\nWireframe"}/> */}
                </div>

                
            </div>
        </div>
    </div>
  );
}

export default AboutMe