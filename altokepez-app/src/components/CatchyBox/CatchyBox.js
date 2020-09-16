import React from 'react';
import './CatchyBox.scss';

const CatchyBox = props => {

    return <div className="catchy-box">
        {props.text}
    </div>
}

export default CatchyBox;