import React, { useState } from "react";
import './Layout.css';
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import Login from "../../pages/Auth/Login";

const Layout = (props) => {
  const [showLogin, setShowLogin] = useState(false);

  const showBackdropHandler = () => {
    setShowLogin(!showLogin);
  };

  return (
    <div className="layout">
      <Toolbar clicked={showBackdropHandler} />
     {showLogin ? <Login backdropClicked={showBackdropHandler} /> : null}

      {props.children}
    </div>
  );
};

export default Layout;
