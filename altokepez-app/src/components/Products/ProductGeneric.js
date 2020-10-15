import React, { useState } from "react";
import "./ProductGeneric.scss";
import Icon from "../Icon/Icon";
import { NavLink } from "react-router-dom";
import Tooltip from "../UI/Tooltip";

const ProductGeneric = (props) => {

    const[showOptions, setShowOptions] = useState(false);
    const[hoverColorBagIcon, setHoverColorBagIcon] = useState("black");
    const[hoverColorSearchIcon, setHoverColorSearchIcon] = useState("black");
    const[showTooltipBagIcon, setShowTooltipBagIcon] = useState(false);
    const[showTooltipSearchIcon, setShowTooltipSearchIcon] = useState(false);

    const imageClickHandler = () => {
      setShowOptions(false);
    }


  return (
    <div className="productGeneric" >
      {props.children}
      <img
      style={{filter:`${showOptions ? 'brightness(0.5)' : 'brightness(1)'}`}}
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
         onMouseOver={() =>{ 
           setHoverColorBagIcon("white"); 
           setShowTooltipBagIcon(true);
          }}
         onMouseLeave={() => {
           setHoverColorBagIcon("black");
           setShowTooltipBagIcon(false);
           }}>
           <Tooltip text="Agregar al carrito" show={showTooltipBagIcon}/>
            <NavLink to="#" exact>
              <Icon
                color={hoverColorBagIcon}
                iconName="bag"
                size="1.5rem"
              />
            </NavLink>
        </div>
        <div className="productGeneric__optionsIcon"
         onMouseOver={() => {
           setHoverColorSearchIcon("white");
           setShowTooltipSearchIcon(true);
          }}
         onMouseLeave={() => {
           setHoverColorSearchIcon("black");
           setShowTooltipSearchIcon(false);
           }}>
        <Tooltip text="Ver plato" show={showTooltipSearchIcon}/>
            <NavLink to="#" exact>
              <Icon
                color={hoverColorSearchIcon}
                iconName="search"
                size="1.5rem"
              />
            </NavLink>
        </div>
      </div>
      <h5 className="productGeneric__title">{props.title}</h5>
    </div>
  );
};

export default ProductGeneric;
