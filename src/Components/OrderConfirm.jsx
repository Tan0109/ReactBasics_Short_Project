import style1 from './homePage.module.css';
import React from 'react';


function OrderConfirm()
{
    return(
    <>
    <button  className = {style1.OrderConfirm} onClick={function() {
        return(
            <>
            <div>Thank you for ordering!</div>
            </>
        );
    }}>
    Place Order</button>
    </>
    );
}
export default OrderConfirm;