import React from 'react';
import './CatchyBox.scss';
import { withRouter } from 'react-router-dom';

const CatchyBox = props => {

    const clickHandler = () => {
        console.log("props.history",props.history);
        props.history.push({
            pathname: '/shop/ofertas',
        });
    }

    return <div className="catchy-box" onClick={clickHandler}>
        {props.text}
    </div>
}

export default withRouter(CatchyBox);