import React from 'react';
import './DiscountBox.scss';
import Button from '../UI/Button/Button';

const DiscountBox = (props) => {

    return (
        <div className={"discountbox ".concat(props.position)}>
            <h1>{props.text}</h1>
            <Button value="ver ofertas" />
        </div>
    );
}

export default DiscountBox;