import React from "react";

import "./ButtonComponent.scss";

const ButtonComponent = (props) => {
    return(
        <button className={props.class}>{props.name}</button>
    )
}

export default ButtonComponent;