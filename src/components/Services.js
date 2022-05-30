import React from "react";

import "./Services.scss";
import ServiceBox from "./ServiceBox";

import webDesign from '../img/icons/web-design.png';
import mobileAppDesign from '../img/icons/mobile-app-design.png';
import prototypingWireframe from '../img/icons/prototyping-wireframe.png';

const Services = () => {
  return (
    <div className="services section-padding">
        <div className="container">
            <div className="d-lg-flex align-items-center justify-content-between">
                <div className="service-items w-50">
                   <div className="d-lg-flex align-items-center">
                      <ServiceBox class="mb-5 me-5" imgName={webDesign} text={'Web\nDesign'}/>
                      <ServiceBox class="mt-5" imgName={mobileAppDesign}  text={"Mobile App\nDesign"}/>
                   </div>
                    <ServiceBox imgName={prototypingWireframe} text={"Prototyping\nWireframe"}/>
                </div>

                <div className="service-content w-50 ms-5 pl-5">
                    <p className="m-0 primary2 line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;What I do</p>
                    <h1 className="primary4 ml-lg-5">Better desing,<br/>Better experience </h1>
                    <p className="primary3 mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Services