import React from 'react';
import altokepezLogo from '../../assets/images/logo-altokepez.jpg';
import './Logo.scss';

const Logo = props => {

    return <div className="logo">
        <img src={altokepezLogo} alt="logo"/>
    </div>
}

export default Logo;


