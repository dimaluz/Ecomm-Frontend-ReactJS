import React from "react";
import './InputField.css';

const InputField = (props) => {
    return (
        <div className="outer-input-field">
            <div className="inner-input-field">
                <input type={props.type} required />
                <div className='labelline'>{props.label}</div>
            </div>
        </div>
    )
}

export default InputField;