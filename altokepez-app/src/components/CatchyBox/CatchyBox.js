import React from 'react';
import './CatchyBox.css';

const CatchyBox = props => {

    return <div className="catchy-box">
        {props.text}
    </div>
}

export default CatchyBox;