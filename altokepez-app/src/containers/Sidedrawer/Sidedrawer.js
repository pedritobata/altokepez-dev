import React from 'react';
import './Sidedrawer.scss';

const Sidedrawer = (props) => {

    return (
        <div className={`sidedrawer ${props.showup}`}>
            <nav>
                <h1>Soy el SideDrawerd ddddddddddddddddd</h1>
            </nav>
        </div>
    );
}

export default Sidedrawer;