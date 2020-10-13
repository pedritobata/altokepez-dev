import React, { useState, useEffect } from "react";
import Logo from "../../Logo/Logo";
import "./Toolbar.scss";
import NavigationItems from "../NavigationItems/NavigationItems";
import CatchyBox from "../../CatchyBox/CatchyBox";
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
      <div className="header__bar">
        <div className="header__left">
          <BurgerMenuIcon clicked={props.onShowSideDrawer}/>
           <nav className="nav-items--chirrion">
            <NavigationItems />
          </nav>
        </div>
        <div className="header__main">
        
          <h2 className="main-title main-title--chirrin">al toke pez</h2>
        </div>
        <div className="header__right">
          <NavLink to="#" exact>
            <Icon
              color="black"
              iconName="person"
              hidden
              clicked={props.loginClicked}
              size={`calc(${mainIconDefaultSize} + 0.3rem)`}
            />
          </NavLink>
         {/*  <Icon
            color="black"
            iconName="heart"
            hidden
            size={mainIconDefaultSize}
          /> */}
          <NavLink to="#" exact>
          <Icon
            color="black"
            iconName="cart"
            /* hidden */
            hiddenMobile
            size={mainIconDefaultSize}
          />
          </NavLink>
         
          <CatchyBox text="Delivery" />
        </div>
      </div>
    </header>
  );
};

export default Toolbar;
