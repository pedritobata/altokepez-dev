import React from "react";
import Logo from "../../Logo/Logo";
import "./Toolbar.css";
import NavigationItems from "../NavigationItems/NavigationItems";
import CatchyBox from "../../CatchyBox/CatchyBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faChartBar } from "@fortawesome/free-regular-svg-icons";
import Icon from '../../Icon/Icon';

const Toolbar = (props) => {
  return (
    <header className="container container-v1">
      <div className="row bar border-bottom-0 align-items-center">
        <div className="col"><Logo /></div>
        <div className="col-6">
          <nav>
            <NavigationItems />
          </nav>
        </div>
        <div className="col d-flex justify-content-sm-around align-items-sm-center">
          <Icon 
            // style="text-primary"
            color="black"
            iconName="person"
            size={26}
          />
          <Icon 
              color="black"
              iconName="heart"
              size={23}
          />
          <Icon 
            color="black"
            iconName="cart"
            size={24}
          />
          <CatchyBox text="Delivery" />
        </div>
      </div>
    </header>
  );
};

export default Toolbar;
