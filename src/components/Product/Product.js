import React from 'react';

const Product = (props) => {
    // console.log(props.product)
    return (
        <div className="single-product">
            <div className="product-thumbnail">
                <img src={props.product.img} alt=""/>
            </div>
            <div className="product-content">
                <h4>{props.product.name}</h4>
            </div>
            
        </div>
    );
};

export default Product;