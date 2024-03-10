import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Slider from '../../components/Slider/Slider';
import Price_Button from '../../components/Price_Button/Price_Button';
import Product_card from '../../components/Product_card/Product_card';
import "./Home.css";

const Home = () => {
    return (
        <main>
            <div className="grid-container">

                <div className="grid-item navbar"> 
                    <Navbar />
                </div> 

                <div className="grid-item maincontent">
                    <div className="container-maincontent">

                        <div className="item maincontent1">
                            <div className="container-product_card_1">
                                <Product_card img='images/pngegg.png' />
                            </div>
                            <div className='price-box'>
                                <Price_Button title='Nike Air Max' price='250.00' />
                            </div>
                        </div>

                        <div className="item maincontent2">
                            <div className="container-product_card_2">
                                <Product_card img='images/nike3.png' />
                            </div>
                            <div className='price-box'>
                                <Price_Button title='Nike Air Max' price='250.00' />
                            </div>
                        </div>

                        <div className="item maincontent3">
                            <div className="container-product_card_3">
                                <Product_card img='images/nike5.png' />
                            </div>
                            <div className='price-box'>
                                <Price_Button title='Nike Air Max' price='250.00' />
                            </div>
                        </div>

                    </div>
                </div>

                <div class="grid-item subcontent">
                    <Slider />
                </div>

                <div class="grid-item footer">
                    <Footer />
                </div>
                
            </div>
        </main>
    )
}

export default Home;