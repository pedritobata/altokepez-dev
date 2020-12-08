import React from 'react';
import './FlatArrow.css';
import {Link} from 'react-router-dom';

const FlatArrow = props => {

    return (
        <Link style={{...props.position, ...props.style}} className="flatArrow" to={props.link}>{props.text}<span className="flatArrow__extension">>></span></Link>
    );
}

export default FlatArrow;