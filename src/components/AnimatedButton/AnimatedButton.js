import React from "react";
import './AnimatedButton.css';

function BtnClick(){
    const button = document.querySelector('.animated-btn');
    button.classList.toggle('active');
}

const AnimatedButton = (props) => {
    return(
        <div className='animated-btn' onClick={BtnClick}>
            <div className='img-container'>{props.img}</div>
            <div className='title-container'>{props.title}</div>
            <div className="progress-wrapper">
                <div className="inner-progress"></div>
                <div className="checkmark">
                    <span></span>
                    <span></span>
                </div>
                <div className="circle-wrapper">
                    <div className="bar left">
                        <div className="progress"></div>
                    </div>
                    <div className="bar right">
                        <div className="progress"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AnimatedButton;