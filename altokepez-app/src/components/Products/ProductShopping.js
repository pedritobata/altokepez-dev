import React from "react";
import { Link } from 'react-router-dom';
import './ProductShopping.scss';

const ProductShopping = props => {

    return (
        <Link to={{
            pathname: `/shop/products`,
            state: {
                id: props.productId
            }
        }} className="productshopping">
            <img src={props.image} 
            alt=""/>
            <div className="productshopping__info">
                <h3 className="productshopping__title">{props.title}</h3>
                <p className="productshopping__description">{props.description}</p>
                <span className="productshopping__price">{props.price}</span>
            </div>
        </Link>
    );
}

export default ProductShopping;