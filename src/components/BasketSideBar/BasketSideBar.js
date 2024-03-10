import React from "react";
import './BasketSideBar.css';
import CrossButton from "../CrossButton/CrossButton";
import Basket_pcard from '../Basket_pcard/Basket_pcard';
import Button from '../Button/Button';

// const Click = () => {
//     const sidebar = document.querySelector('.basket-right-sidebar');
//     sidebar.classList.toggle('open');
// }

const CloseBasketSideBar = () => {
    const wrapper = document.querySelector('.mainwrapper');
    const basket_sidebar = document.querySelector('.basket-right-sidebar');
    const basket_wrapper = document.querySelector('.basket-sidebar-wrapper');

    wrapper.classList.remove('active');
    basket_sidebar.classList.remove('open');
    basket_wrapper.classList.remove('active');
}

const BasketSideBar = () => {
    return(
        <div className="basket-right-sidebar-grid">
            <div className="basket-right-sidebar-container">
                <div className="basket-right-sidebar">

                    <div className="basket-sidebar-item title">
                        <h3>My Cart</h3>
                        <div className="container-cross_button" onClick={CloseBasketSideBar}>
                            <CrossButton />
                        </div>
                    </div> 
                    <div className="basket-sidebar-item basket-card">
                        <div className="container-basket-product-card">
                            <Basket_pcard title="Nike Air" price="$100.00 USD" description="size 42" img="images/nike4.png" />
                        
                            <Basket_pcard title="Nike Max" price="$145.00 USD" description="size 32" img="images/nike2.png" />
                        </div>
                    </div>
                    <div className="basket-sidebar-item details">
                        <div className="container-price-details">
                            <div className="price-item taxes">
                                <div className="price-title">
                                    Taxes
                                </div>
                            </div>
                            <div className="price-item taxes-price">
                                <div className="price-container">
                                    $0.00 USD
                                </div>
                            </div>
                            <div className="price-item shipping">
                                <div className="price-title">
                                    Shipping
                                </div> 
                            </div>
                            <div className="price-item shipping-price">
                                <div className="price-container">
                                    Calculate at checkout
                                </div>
                            </div>
                            <div className="price-item total">
                                <div className="price-title">
                                    Total
                                </div>
                            </div>
                            <div className="price-item total-price">
                                <div className="price-container">
                                    $140.00 USD
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="basket-sidebar-item button">
                        <div className="container-price-button">
                            <Button title="Proceed to Checkout" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default BasketSideBar;