import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';
import Cart from '../Cart/Cart';
import '../../utilities/fakedb';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    useEffect(() => {
        const saveCart = [];
        const storedCart = getShoppingCart();
        for (const id in storedCart) {
            const saveProduct = products.find(product => product.id === id);
            if (saveProduct) {
                const quantity = storedCart[id];
                saveProduct.quantity = quantity;
                saveCart.push(saveProduct);
            }
        }
        setCart(saveCart);
    }, [products]);

    const handleToCart = (product) => {
        let newCart = [];
        const exist = cart.find(pd => pd.id === product.id);
        if (!exist) {
            product.quantity = 1;
            newCart = [...cart, product];
        } else {
            exist.quantity += 1;
            const remaining = cart.filter(pd => pd.id !== product.id);
            newCart = [...cart, remaining];
        }
        setCart(newCart);
        addToDb(product.id);
    };

    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleToCart={handleToCart}
                    ></Product>)
                }
            </div>
            <div className="order-container">
                <h2 className='align'>Order Summary</h2>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;