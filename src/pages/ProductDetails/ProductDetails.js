import './ProductDetails.css';
import Button from '../../components/Button/Button';
import Product_card from '../../components/Product_card/Product_card';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Slider from '../../components/Slider/Slider';
// import ProductProperty from '../../components/ProductProperty/ProductProperty';
import Properties from '../../components/ProductProperty/Properties';

const Next = () => {
    let items = document.querySelectorAll('.slide-item');
    return document.querySelector('.slides').appendChild(items[0]);
}

const Prev = () => {
    let items = document.querySelectorAll('.slide-item');
    return document.querySelector('.slides').prepend(items[items.length-1]);
}


const ProductDetails = () => {

    return (
        <main>
            <div className='pdetails-grid-container'>

                <div className='pdetails-grid navbar'>
                    <Navbar />
                </div>

                <div className='pdetails-grid maincontent'>
                    <div className='maincontent-grid-box'>
                        <div className='slides-container'>
                            <div className='slides'>
                                <div className='slide-item'>
                                    <Product_card img='images/pngegg.png' />
                                </div>
                                <div className='slide-item'>
                                    <Product_card img='images/nike3.png' />
                                </div>
                                <div className='slide-item'>
                                    <Product_card img='images/nike5.png' /> 
                                </div>
                                <div className='slide-item'>
                                    <Product_card img='images/nike1.png' />
                                </div>
                                <div className='slide-item'>
                                    <Product_card img='images/nike2.png' />
                                </div>
                            </div>
                            <div className='list-button'>
                                <div className="outer-list-button">
                                    <div className="inner1-list-button" onClick={Prev}>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="25" viewBox="0 -960 960 960" width="45" fill="#fff"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/></svg>
                                    </div>
                                    <div className="inner2-list-button" onClick={Next}>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="25" viewBox="0 -960 960 960" width="45" fill="#fff"><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"/></svg>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    
                        <div className='description-container'>
                            <div className='description'>
                                
                                <div className='header-container'>
                                    <div className='title'>
                                        <h2>Nike Air Max</h2>
                                    </div>
                                    <div className='price'>
                                        <h3>PRICE</h3>
                                        <div className='btn-price-container'>
                                            <Button title='$250.00 USD' />
                                        </div>
                                    </div>
                                </div>
                                
                                <div className='properties'>
                                    <Properties />
                                </div>

                                <div className='description-button'>
                                    <div className='btn-container'>
                                        <Button title='Add To Card' />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                
                <div className='pdetails-grid related-product'>
                    <h3>Related Products</h3>
                </div>

                <div className='pdetails-grid subcontent'>
                    <Slider />
                </div>

                <div className='pdetails-grid footer'>
                    <Footer />
                </div>

            </div>
        </main>
    )
}

export default ProductDetails;