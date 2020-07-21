import React  from 'react';
import Logo from "../../Logo/Logo";
import "./Toolbar.css"
import NavigationItems from '../NavigationItems/NavigationItems';
import CatchyBox from '../../CatchyBox/CatchyBox';


const Toolbar = props => {

    return <header className="toolbar">
        <Logo  />
        <nav>
            <NavigationItems  />
        </nav>
        <CatchyBox  />
    </header>
}


export default Toolbar;
