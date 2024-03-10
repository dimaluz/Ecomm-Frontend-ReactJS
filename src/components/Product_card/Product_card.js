import './Product_card.css';


const Product_card = (props) => {
    return (
        <div className="outer-product-card">
            <div className="inner-product-card">
                <img src={props.img} alt="" />
            </div>
        </div>
    );
}

export default Product_card;