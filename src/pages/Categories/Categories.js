import './Categories.css';
import Price_Button from '../../components/Price_Button/Price_Button';
import Product_card from '../../components/Product_card/Product_card';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const Categories = () => {
    return (
        <main>
    
            <div className='categories-grid-container'>

                <div className='categories-grid navbar'>
                    <Navbar />
                </div>

                <div className='categories-grid maincontent'>
                    <div className='categories-maincontent-grid'>
                        <div className='categories-inventory'>
                            <h4>Categories</h4>
                            <ul>
                                <li><a href='#'>All Products</a></li>
                                <li><a href='#'>Boots for Men</a></li>
                                <li><a href='#'>Boots for Women</a></li>
                            </ul>

                        </div>

                        <div className='categories-products'>
                            <div className='ctg-products-container'>

                                <div className='ctg-item'>
                                    <div className='img-container'>
                                        <Product_card img='images/nike3.png' />
                                    </div>
                                    <div className='price-box'>
                                        <Price_Button title='Nike Air' price='150.00' />
                                    </div>
                                </div>

                                <div className='ctg-item'>
                                    <div className='img-container'>
                                        <Product_card img='images/nike1.png' />
                                    </div>
                                    <div className='price-box'>
                                        <Price_Button title='Nike Air2' price='100.00' />
                                    </div>
                                </div>

                                <div className='ctg-item'>
                                    <div className='img-container'>
                                        <Product_card img='images/nike2.png' />
                                    </div>
                                    <div className='price-box'>
                                        <Price_Button title='Nike Air Extra' price='99.00' />
                                    </div>
                                </div>

                                <div className='ctg-item'>
                                    <div className='img-container'>
                                        <Product_card img='images/nike5.png' />
                                    </div>
                                    <div className='price-box'>
                                        <Price_Button title='Nike Air Max' price='250.00' />
                                    </div>
                                </div>
                                <div className='ctg-item'>
                                    <div className='img-container'>
                                        <Product_card img='images/nike4.png' />
                                    </div>
                                    <div className='price-box'>
                                        <Price_Button title='Nike Air Pro' price='50.00' />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='categories-sort'>
                            <h4>Sort by</h4>
                            <ul>
                                <li><a href='#'>Relevance</a></li>
                                <li><a href='#'>Trending</a></li>
                                <li><a href='#'>Latest Arrivals</a></li>
                                <li><a href='#'>Price Low to High</a></li>
                                <li><a href='#'>Price High to Low</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='categories-grid footer'>
                    <Footer />
                </div>

            </div>
        </main>
    )
}

export default Categories;