import React from "react";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";

const Layout = (props) => {
  
  
  return <>
            <Toolbar />

            {props.children}
        </>;
  
};

export default Layout;
