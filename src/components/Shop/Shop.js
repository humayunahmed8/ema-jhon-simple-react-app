import React from 'react';
import fakeData from '../../fakeData';
import { useState } from 'react';
import './Shop.css';
import Product from '../Product/Product'

const Shop = () => {
    //console.log(fakeData);

    const firstTenProduct = fakeData.slice(0, 10);
    //console.log(firstTenProduct);

    const [products, setProduct] = useState(firstTenProduct);

    //const result = useState(0);
    // console.log(result);
    // console.log(products);
    //console.log(products, setProduct);

    return (
        <div className="shop-wrapper">
            <div className="shop-product-container">
                {
                    products.map(item => <Product product={item}></Product>)
                }
            </div>
            <div className="shop-cart-container">
                <h3>Order Summary</h3>
            </div>
            
        </div>
    );
};

export default Shop;