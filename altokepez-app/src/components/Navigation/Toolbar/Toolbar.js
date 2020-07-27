import React from "react";
import Logo from "../../Logo/Logo";
import "./Toolbar.css";
import NavigationItems from "../NavigationItems/NavigationItems";
import CatchyBox from "../../CatchyBox/CatchyBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faChartBar } from "@fortawesome/free-regular-svg-icons";

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
        <div className="col"></div>
      </div>
    </header>
  );
};

export default Toolbar;
