import React, { useState, useEffect } from "react";
import Logo from "../../Logo/Logo";
import "./Toolbar.scss";
import NavigationItems from "../NavigationItems/NavigationItems";
import CatchyBox from "../../CatchyBox/CatchyBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faChartBar } from "@fortawesome/free-regular-svg-icons";
import Icon from "../../Icon/Icon";
import { mainIconDefaultSize } from "../../../shared/commons/css-constants";
import { NavLink } from "react-router-dom";
import BurgerMenuIcon from "../../../containers/Sidedrawer/BurgerMenuIcon/BurgerMenuIcon";

const Toolbar = (props) => {
  const [sticky, setSticky] = useState("");

  useEffect(() => {
    function stickyOnScroll() {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 91) {
          setSticky("header--sticky");
        } else if (window.scrollY === 0) {
          setSticky("");
        }
      });
    }
    stickyOnScroll();

    return () => window.removeEventListener(stickyOnScroll);
  }, []);

  return (
    <header className={`container-v1 header ${sticky}`}>
      <div className="row bar border-bottom-0 align-items-center">
        <div className="col-3 d-flex align-items-center">
          <BurgerMenuIcon clicked={props.onShowSideDrawer}/>
          <Logo />
        </div>
        <div className="col-6">
          <nav className="nav-items--chirrion">
            <NavigationItems />
          </nav>
        </div>
        <div className="col-3 d-flex justify-content-end align-items-center">
          <NavLink to="#" exact>
            <Icon
              color="black"
              iconName="person"
              hiddenMobile
              clicked={props.loginClicked}
              size={`calc(${mainIconDefaultSize} + 0.3rem)`}
            />
          </NavLink>
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
