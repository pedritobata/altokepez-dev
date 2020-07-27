import React from 'react';
import './CatchyBox.css';

const CatchyBox = props => {

    return <div className="catchy-box">
        <span>{props.text}</span>
    </div>
}

export default CatchyBox;