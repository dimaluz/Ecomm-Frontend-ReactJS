import './Button.css';

const Button = (props) => {
    return (
        <div className="outer-button">
            <div className="inner-button">
                <button>{props.title}</button>
            </div>
        </div>
    );
}

export default Button;