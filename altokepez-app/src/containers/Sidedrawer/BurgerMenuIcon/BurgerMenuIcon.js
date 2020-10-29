import React from 'react';
import './BurgerMenuIcon.scss';

const BurgerMenuIcon = (props) => {

    return (
        <div style={{...props.myStyle}} className="burgermenuIcon" onClick={props.clicked}>
            <p></p>
            <p></p>
            <p></p>
        </div>
    );
}

export default BurgerMenuIcon;