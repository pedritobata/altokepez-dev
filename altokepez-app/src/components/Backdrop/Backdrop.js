import React from 'react';
import './Backdrop.css';

const Backdrop = (props) => {

    return (
        <div className="backdrop" onClick={props.clicked}>
            {props.children}
        </div>
    );
}

export default Backdrop;


