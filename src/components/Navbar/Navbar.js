import './Navbar.css';
// import Button from '../Button/Button';
// import Basket_pcard from '../Basket_pcard/Basket_pcard';
import LoginForm3D from '../LoginForm3D/LoginForm3D';
import BasketSideBar from '../BasketSideBar/BasketSideBar';

const LoginRegister = () => {
    const login = document.querySelector('.login-register-pannel');
    const wrapper = document.querySelector('.mainwrapper');
    const login_grid = document.querySelector('.log-reg-grid');

    login.classList.add('active');
    wrapper.classList.add('active');
    login_grid.classList.add('active');
}

const OpenBasketSideBar = () => {
    const wrapper = document.querySelector('.mainwrapper');
    const basket_sidebar = document.querySelector('.basket-right-sidebar');
    const basket_wrapper = document.querySelector('.basket-sidebar-wrapper');
    
    wrapper.classList.add('active');
    basket_sidebar.classList.add('open');
    basket_wrapper.classList.add('active');
    // b.classList.add('active');
}

// const ClickMenuButton = () => {
//     const menu_sidebar = document.querySelector(".menu-sidebar");
//     const basket_sidebar = document.querySelector(".basket-sidebar");
//     console.log(basket_sidebar.classList.value);
//     if (basket_sidebar.classList.value === "basket-sidebar open"){
//         ClickBasketButton();
//     }
//     menu_sidebar.classList.toggle("open");
//     ChangeBgColor();
// }

// const ClickBasketButton = () => {
//     const side_bar = document.querySelector(".basket-sidebar");
//     const menu_sidebar = document.querySelector(".menu-sidebar");
//     if (menu_sidebar.classList.value === "menu-sidebar open"){
//         ClickMenuButton();
//     }
//     side_bar.classList.toggle("open");
//     ChangeBgColor();
// }

// const ChangeBgColor = () => {
//     const screen_block = document.querySelector(".screen-block");
//     const navbar_container = document.querySelector(".navbar-container");
//     navbar_container.classList.toggle("open");
//     screen_block.classList.toggle("open");
// }

const Navbar = () => {
    return (
    <div className='mainwrapper'>

        {/* <div className='screen-block'></div> */}

        {/* <div className='login-register-pannel'>
            <Login />
        </div> */}

        <div className="navbar-container">

            <div className="navbar-item navbar">
                <nav className="nav-wrapper">

                    <div className="logo">
                        <svg xmlns="http://www.w3.org/2000/svg" height="50" width="90" viewBox="-128.4 -75.041 1112.8 450.246"><path d="M229 267c-111.333 47.333-183.667 44-217-10-12-18.667-15-42.667-9-72 5.333-26.667 17.333-54.667 36-84 10.667-16 23.667-33.333 39-52 10-12 24.667-28.333 44-49-15.333 24.667-25.333 49.333-30 74-8 38.667 1.333 67.667 28 87 11.333 8.667 27.167 13.5 47.5 14.5s43.5-2.167 69.5-9.5L856 3z" fill="#fff"/></svg>
                    </div>

                    <div className="container-menu_button" onClick="{ClickMenuButton}">
                        <div className="outer-menu_button">
                            <div className="inner-menu_button">
                                <svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 -960 960 960" width="16" fill="#e8eaed"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
                            </div>
                        </div>
                    </div>

                    <div className="menu-items">
                        <ul>
                            <li><a href="/all">All</a></li>
                            <li><a href="/categories">Categories</a></li>
                            <li className='login-register' onClick={LoginRegister}><a href="#">My Account</a></li>
                        </ul>
                    </div>

                    <div className="container-search">
                        <div className="outer-search">
                            <form className="search-bar" action="">
                                <input type="text" placeholder="Search for products..." />
                                <button type="submit"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="#6e6f71"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg></button>
                            </form>
                        </div>
                    </div>

                    <div className="container-basket_button" onClick={OpenBasketSideBar}>
                        <div className="basket_qty">
                            15
                        </div>
                        <div className="outer-basket_button">
                            <div className="inner-basket_button">
                                <svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 -960 960 960" width="16" fill="#e8eaed"><path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z"/></svg>
                            </div>
                        </div>
                    </div>

                </nav>
            </div>
            
            {/* <div className="basket-sidebar"> */}
                {/* <div className="basket-sidebar-item title">
                    <h3>My Cart</h3>
                    <div className="container-cross_button" onClick={ClickBasketButton}>
                        <div className="outer-cross_button">
                            <div className="inner-cross_button">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="#e8eaed"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
                            </div>
                        </div>
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
                </div> */}
            {/* </div>  */}
            
            <div className="menu-sidebar">
                <div className="menu-sidebar-item title">
                    <div className='title-container'>
                        <div className="container-menu-cross_button" onClick="{ClickMenuButton}">
                            <div className="outer-menu-cross_button">
                                <div className="inner-menu-cross_button">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="#e8eaed"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
                                </div>
                            </div>
                        </div>
                        <h3>Menu</h3>
                    </div>
                </div> 
                <div className='menu-sidebar-item search'>
                    <div className='search-sidebar-container'>
                        <div className="container-search-sidebar">
                            <div className="outer-search-sidebar">
                                <form className="search-bar-sidebar" action="">
                                    <input type="text" placeholder="Search for products..." />
                                    <button type="submit"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="#6e6f71"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='menu-sidebar-item list'>
                    <div className='list-sidebar-container'>
                        <ul>
                            <li><a href="/all">All Products</a></li>
                            <li><a href="/category">Categories</a></li>
                            <li><a href="#">My Account</a></li>
                        </ul>
                    </div>
                </div>

            </div>
            
        </div>

        <div className='screen-block'></div>

        <div className='basket-sidebar-wrapper'>
            <BasketSideBar />
        </div>

        <div className='login-register-pannel'>
            <LoginForm3D />
        </div>

        {/* <div className='screen-block'></div> */}

    </div>
    )
}
export default Navbar;