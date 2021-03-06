import React from 'react';
import './Button.scss';

const Button = (props) => {

    const getStyleFromUSer = () => {
        
    }

    return (
        <button {...props} className={`button ${props.light ? 'button-light' : ''}`} type="submit">{props.value}</button>
    );
}

export default Button;