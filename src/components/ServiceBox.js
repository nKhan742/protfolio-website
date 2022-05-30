import React from "react";

import "./ServiceBox.scss";

const ServiceBox = (props) => {
  const text = props.text;
  const newText = text.split('\n').map(str => <p>{str}</p>);
  return (
    <div className={`service-omponent p-4 d-flex justify-content-around align-items-center w-15 ${props.class}`} style={props.style}>
            <div className="service_icon-img-container w-15">
              <img src={props.imgName} alt="" width="100%"/>
            </div>
            <h6 className="ms-2 mb-0 primary4">{newText}</h6>
    </div>
  );
}

export default ServiceBox