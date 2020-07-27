import React  from 'react';
import Logo from "../../Logo/Logo";
import "./Toolbar.css"
import NavigationItems from '../NavigationItems/NavigationItems';
import CatchyBox from '../../CatchyBox/CatchyBox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser , faChartBar} from '@fortawesome/free-regular-svg-icons';


const Toolbar = props => {

    return <header className="toolbar">
    
        <nav>
            <NavigationItems  />
        </nav>

    </header>
}


export default Toolbar;
