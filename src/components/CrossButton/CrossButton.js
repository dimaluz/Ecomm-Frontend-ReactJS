import React from "react";
import './CrossButton.css';

const CrossButton = () => {
    return(
        <div className="outer-cross-button">
            <div className="inner-cross-button">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="#e8eaed"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
            </div>
        </div>
    )
}

export default CrossButton;