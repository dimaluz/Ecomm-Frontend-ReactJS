import './Slider.css';
import Product_card from '../../components/Product_card/Product_card';
import Price_Button from '../../components/Price_Button/Price_Button';

const Slider = () => {
    return (
        <div className='slider'>
            <div className='slider-track'>

                <div className='slide'>
                    <div className="container-product_card_slide">
                        <div className='slide-img-container'>
                            <Product_card img='images/pngegg.png' />
                        </div>
                        <div className='slide-price-box'>
                            <Price_Button title='Nike Air Max' price='250.00' />
                        </div>
                    </div>
                </div>

                <div className='slide'>
                    <div className="container-product_card_slide">

                        <div className='slide-img-container'>
                            <Product_card img='images/nike2.png' />
                        </div>
                        <div className='slide-price-box'>
                            <Price_Button title='Nike Air Max' price='250.00' />
                        </div>

                    </div>
                </div>

                <div className='slide'>
                    <div className="container-product_card_slide">
                        <div className='slide-img-container'>
                            <Product_card img='images/nike3.png' />
                        </div>
                        <div className='slide-price-box'>
                            <Price_Button title='Nike Air Max' price='250.00' />
                        </div>
                    </div>
                </div>

                <div className='slide'>
                    <div className="container-product_card_slide">
                        <div className='slide-img-container'>
                            <Product_card img='images/nike4.png' />
                        </div>
                        <div className='slide-price-box'>
                            <Price_Button title='Nike Air Max' price='250.00' />
                        </div>
                    </div>
                </div>

                <div className='slide'>
                    <div className="container-product_card_slide">
                        <div className='slide-img-container'>
                            <Product_card img='images/nike5.png' />
                        </div>
                        <div className='slide-price-box'>
                            <Price_Button title='Nike Air Max' price='250.00' />
                        </div>
                    </div>
                </div>

                <div className='slide'>
                    <div className="container-product_card_slide">
                        <div className='slide-img-container'>
                            <Product_card img='images/nike1.png' />
                        </div>
                        <div className='slide-price-box'>
                            <Price_Button title='Nike Air Max' price='250.00' />
                        </div>
                    </div>
                </div>
            
            </div>
        </div>
    )
}

export default Slider;