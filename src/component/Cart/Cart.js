import React from 'react';
import './Cart.css';

const Cart = (proms) => {
    const { cart } = proms;
    
    let totalPrice = 0;
    let shipping = 0;
    let quantity = 0;

    for (const product of cart) {
        totalPrice = totalPrice + product.price * product.quantity;
        shipping = shipping + product.shipping;
        quantity = quantity + product.quantity;
    }

    const tax = totalPrice * 7 / 100;
    const grandPrice = totalPrice + shipping + tax;

    return (
        <div className='cart'>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Total Shipping Charge: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <h5>Grand Total: ${grandPrice}</h5>
        </div>
    );
};

export default Cart;