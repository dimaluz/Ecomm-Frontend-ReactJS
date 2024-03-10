import './Price_Button.css';

const Price_Button = (props) => {
    return (
        <div className="container-price_button">
            <div className="outer-price_button">
                <div className="inner1-price_button">
                    <h5>{props.title}</h5>
                </div>
                <div className="inner2-price_button">
                    <button>${props.price}</button>
                </div>
            </div>
        </div>
    );
}

export default Price_Button;