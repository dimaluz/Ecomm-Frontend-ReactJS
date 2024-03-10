import React from 'react';
import './Order.css';
import CheckBox from '../../components/CheckBox/CheckBox';

const Order = () => {

    return (
        <div className='order-grid'>
            <div className='order-form'>
                <div className='order-form-tab'>
                    {/* <CheckBox title='Email me with news and offers'/> */}
                </div>
            </div>
            <div className='order-details'>
                <div className='order-details-tab'>
                    {/* <LoginForm /> */}
                </div>
            </div>
        </div>
    )
}

export default Order;