import React, { useState, useEffect } from "react";
import "./Toolbar.scss";
import NavigationItems from "../NavigationItems/NavigationItems";
import CatchyBox from "../../CatchyBox/CatchyBox";
import Icon from "../../Icon/Icon";
import { mainIconDefaultSize } from "../../../shared/commons/css-constants";
import { NavLink, withRouter, Link , useHistory} from "react-router-dom";
import BurgerMenuIcon from "../../../containers/Sidedrawer/BurgerMenuIcon/BurgerMenuIcon";

const Toolbar = (props) => {
  const [sticky, setSticky] = useState("");

  const history = useHistory();
  // console.log("history",history);

  const currentScreen = props.location.pathname;

  const isHomeScreen = () => {
    return (currentScreen === "/" || currentScreen === "/home" ) ? true : false;
  }

  useEffect(() => {
    function stickyOnScroll() {
      if (window.scrollY > 91) {
        setSticky("header--sticky");
      } else if (window.scrollY === 0) {
        setSticky("");
      }
    }
    window.addEventListener("scroll", stickyOnScroll);

    return () => window.removeEventListener(stickyOnScroll);
  }, []);

  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (event) {
        event.preventDefault();
        this.classList.add("activeLink");
        const target = document.querySelector(this.getAttribute("href"));
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
          alignToTop: true,
        });
      });

      anchor.addEventListener("blur", function (event) {
        this.classList.remove("activeLink");
      });
    });
  });

  return (
    <header className={`container-v1 header ${sticky}`}>
      <div className="header__bar">
        <div className="header__left">
          <BurgerMenuIcon myStyle={{display: `${!isHomeScreen() ? "inline-block" : "none"}`}} clicked={props.onShowSideDrawer} />
          {isHomeScreen() ? (
              <nav className="nav-items--chirrion">
                <NavigationItems />
              </nav>
          ) : null}
        </div>
        <div className="header__main">
          <h2 className="main-title main-title--chirrin">
            <Link to="/" style={{color: history.location.pathname.includes("shop") ? '#f0003f' : ''}}>al toke pez</Link>
          </h2>
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
              hiddenMobile={isHomeScreen()}
              size={mainIconDefaultSize}
            />
          </NavLink>
          {!isHomeScreen() ? null : (
            <CatchyBox text="Ver Carta" />
          )}
        </div>
      </div>
    </header>
  );
};

export default withRouter(Toolbar);
