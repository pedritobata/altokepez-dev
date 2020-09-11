import React from 'react';
import './DiscountBox.css';
import Button from '../UI/Button/Button';

const DiscountBox = (props) => {

    return (
        <div className={"discountbox ".concat(props.position)}>
            <h1>{props.text}</h1>
            <Button value="comprar ahora" />
        </div>
    );
}

export default DiscountBox;