import style1 from './homePage.module.css';
import React from 'react';


function ButtonProduct()
{
    const [num1,set1] = React.useState(0);
    return(
<button className={style1.buttonProduct} onClick={function() {
                set1(num1+1);
            }
            }>Add to Cart = {num1}</button>
    );
}
export default ButtonProduct;