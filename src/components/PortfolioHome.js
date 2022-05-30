import React from "react";
import { BsCheckCircle } from 'react-icons/bs'

import { FaDownload} from 'react-icons/fa'


import ButtonComponent from "./ButtonComponent";

import "./AboutMe.scss";

const PortfolioHome = () => {
  return (
    <div className="services section-padding">
        <div className="container">
            <div className="d-lg-flex align-items-center justify-content-between">
            <div className="service-content w-50 ms-5 pl-5">
                    <p className="m-0 primary2 line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;My Portfolio</p>
                    <h1 className="primary4 ml-lg-5">Some of my works</h1>
                    
                </div>                
            </div>
        </div>
    </div>
  );
}

export default PortfolioHome