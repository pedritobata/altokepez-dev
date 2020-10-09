import React, { useState } from "react";
import "./ProductGeneric.scss";
import Icon from "../Icon/Icon";
import { NavLink } from "react-router-dom";

const ProductGeneric = (props) => {

    const[showOptions, setShowOptions] = useState(false);
    const[hoverColorBagIcon, setHoverColorBagIcon] = useState("black");
    const[hoverColorSearchIcon, setHoverColorSearchIcon] = useState("black");

    const imageClickHandler = () => {
      setShowOptions(false);
    }


  return (
    <div className="productGeneric" >
      <img
      onClick={imageClickHandler}
        onMouseOver={() => setShowOptions(true)}
        onMouseLeave={() => setShowOptions(false)}
        className="productGeneric__image"
        src={props.image}
        alt={props.title}
      />
      <div 
       onMouseOver={() => setShowOptions(true)}
       onMouseLeave={() => setShowOptions(false)}
      className={`productGeneric__options ${showOptions ? "productGeneric__options--visible" : ""}`}>
        <div className="productGeneric__optionsIcon"
         onMouseOver={() => setHoverColorBagIcon("white")}
         onMouseLeave={() => setHoverColorBagIcon("black")}>
            <NavLink to="#" exact>
              <Icon
                color={hoverColorBagIcon}
                iconName="bag"
                size="1.1rem"
              />
            </NavLink>
        </div>
        <div className="productGeneric__optionsIcon"
         onMouseOver={() => setHoverColorSearchIcon("white")}
         onMouseLeave={() => setHoverColorSearchIcon("black")}>
            <NavLink to="#" exact>
              <Icon
                color={hoverColorSearchIcon}
                iconName="search"
                size="1.1rem"
              />
            </NavLink>
        </div>
      </div>
      <h5 className="productGeneric__title">{props.title}</h5>
    </div>
  );
};

export default ProductGeneric;
