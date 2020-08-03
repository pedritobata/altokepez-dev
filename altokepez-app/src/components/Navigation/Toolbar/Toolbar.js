import React from "react";
import Logo from "../../Logo/Logo";
import "./Toolbar.css";
import NavigationItems from "../NavigationItems/NavigationItems";
import CatchyBox from "../../CatchyBox/CatchyBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faChartBar } from "@fortawesome/free-regular-svg-icons";
import Icon from '../../Icon/Icon';
import { mainIconDefaultSize } from '../../../shared/commons/css-constants';

const Toolbar = (props) => {
  return (
    <header className="container container-v1">
      <div className="row bar border-bottom-0 align-items-center">
        <div className="col-3"><Logo /></div>
        <div className="col-6">
          <nav>
            <NavigationItems />
          </nav>
        </div>
        <div className="col-3 d-flex justify-content-center align-items-center">
          <Icon 
            color="black"
            iconName="person"
            hiddenMobile
            size={`calc(${mainIconDefaultSize} + 0.3rem)`}
          />
          <Icon 
              color="black"
              iconName="heart"
              hidden
              size={mainIconDefaultSize}
          />
          <Icon 
            color="black"
            iconName="cart"
            hidden
            size={mainIconDefaultSize}
          />
          <CatchyBox text="Delivery" />
        </div>
      </div>
    </header>
  );
};

export default Toolbar;
