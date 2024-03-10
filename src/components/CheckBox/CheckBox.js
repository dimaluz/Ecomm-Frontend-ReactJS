import React from "react";
import './CheckBox.css';

const CheckBox = (props) => {
    return(
        <div className="checkbox-container">
            <label><input type='checkbox' />{props.title}</label>
        </div>
    )
}

export default CheckBox;