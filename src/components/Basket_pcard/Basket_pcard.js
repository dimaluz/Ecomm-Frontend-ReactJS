import React, {useState} from 'react';
import './Basket_pcard.css';


const Basket_product_card = (props) => {

    const [basket_qty_count, setQty] = useState(0);


    const BasketQtyCountPlus = () => {
        console.log(basket_qty_count);
        setQty(basket_qty_count + 1);
    }

    const BasketQtyCountMinus = () => {
        console.log(basket_qty_count);
        if (basket_qty_count > 0) {
            setQty(basket_qty_count - 1);
        }   
    }

    return (
    <div className="basket-product-card">
        <div className="card-item image">
            <div className="container-basket_card">
                <div className="cross-basket_card">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="#333"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
                </div> 
                <div className="outer-basket_card">
                    <div className="inner-basket_card">
                        <img src={props.img} alt="" />
                    </div>
                </div>
            </div> 
        </div>
        <div className="card-item description">
            <div className="card-title">{props.title}</div>
            <div className="card-description">{props.description}</div>
        </div>
        <div className="card-item price">
            <div className="card-price">{props.price}</div>
            <div className="card-qty-btn">
                
                <div className="container-qty-button">
                    <div className="outer-qty-button">
                        <div className="outer-qty-button-grid">
                            <div className="qty-button-item-1">
                                <div className="inner1-qty-button" onClick={BasketQtyCountMinus}>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="#6e6f71"><path d="M200-440v-80h560v80H200Z"/></svg>    
                                </div>
                            </div>
                            <div className="qty-button-item-2">
                                <div className="qty-container">{basket_qty_count}</div>
                            </div>
                            <div className="qty-button-item-3">
                                <div className="inner2-qty-button" onClick={BasketQtyCountPlus}>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="#6e6f71"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
    )
}
export default Basket_product_card;