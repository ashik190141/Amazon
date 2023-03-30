import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (proms) => {
    const { img, name, price, seller, ratings } = proms.product;
    const handleToCart = proms.handleToCart;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='info'>
                <p className='product-name'>{name}</p>
                <p className='price'>Price: ${price}</p>
                <p className='fontsize'>Manufacture: {seller}</p>
                <p className='fontsize'>Rating: {ratings} stars</p>
            </div>
            <button onClick={()=> handleToCart(proms.product)} className='btn' >Add To Cart
            <FontAwesomeIcon icon={faShoppingCart} className="cartIcon" />
            </button>
        </div>
    );
};

export default Product;