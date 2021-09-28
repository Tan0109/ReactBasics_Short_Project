import style1 from './homePage.module.css';

function Product(props)
{
    return (
        <>
        <span className = {style1.productDetails}>{props.name}</span>
        
        </>
    )
}

export default Product;