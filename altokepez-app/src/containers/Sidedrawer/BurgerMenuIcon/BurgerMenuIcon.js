import React from 'react';
import './BurgerMenuIcon.scss';

const BurgerMenuIcon = (props) => {

    return (
        <div className="burgermenuIcon" onClick={props.clicked}>
            <p></p>
            <p></p>
            <p></p>
        </div>
    );
}

export default BurgerMenuIcon;