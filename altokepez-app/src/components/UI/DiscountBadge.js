import React from 'react';
import './DiscountBadge.css';

const DiscountBadge = props => {

    return (
        <p className="discountBadge">{props.text}</p>
    );
}

export default DiscountBadge;