import React, { useState } from "react";
import "./Layout.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import Login from "../../pages/Auth/Login";
import Backdrop from "../../components/Backdrop/Backdrop";
import Sidedrawer from '../Sidedrawer/Sidedrawer';

const Layout = (props) => {
  const [showLogin, setShowLogin] = useState(false);
  const [showBackdrop, setShowBackdrop] = useState(false);
  const [showSideDrawer, setShowSideDrawer] = useState("closed");

  const showLoginHandler = () => {
    setShowLogin(true);
    setShowBackdrop(true);
  };

  const showBackdropHandler = () => {
    setShowBackdrop(false);
    setShowLogin(false);
    setShowSideDrawer("close-drawer");
  };

  const showSideDrawerhandler = () => {
    setShowSideDrawer("open-drawer");
    setShowBackdrop(true);
  };

  return (
    <div className="layout">
      {showBackdrop && <Backdrop clicked={showBackdropHandler} />}
      <Toolbar loginClicked={showLoginHandler} onShowSideDrawer={showSideDrawerhandler}/>
      {showLogin && <Login />}
      <Sidedrawer showup={showSideDrawer} />

      {props.children}
    </div>
  );
};

export default Layout;
