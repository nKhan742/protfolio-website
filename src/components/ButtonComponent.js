import React from "react";

import "./ButtonComponent.scss";

const ButtonComponent = (props) => {
    return(
        <button className="custom-btn btn px-4">{props.name}</button>
    )
}

export default ButtonComponent;