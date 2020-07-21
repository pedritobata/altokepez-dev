import React from "react";
import { NavLink } from "react-router-dom";
import './NavigationItem.css';

const NavigationItem = (props) => {
  
  return (
    <li className="nav-item">
        <NavLink 
            to={props.link} 
            exact={props.exact}
            activeClassName=""
        >{props.children}</NavLink>
    </li>
  );
};

export default NavigationItem;
