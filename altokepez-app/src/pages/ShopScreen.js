import React, { useState, useEffect, useRef } from "react";
import "./ShopScreen.scss";

const ShopScreen = (props) => {
  const [categories, setCategories] = useState([
    "Ofertas",
    "Clásicos",
    "Combos",
    "A la Carta",
    "Bebidas",
    "Especiales",
  ]);
  const [categorySelected, setCategorySelected] = useState(categories[0]);
  const [showDropdownCategories, setShowDropdownCategories] = useState(false);
  const [customDropdownStyle, setCustomDropdownStyle] = useState({});

  const dropdownRef = useRef(null);

  useEffect(() => {
    console.log("dropdownRef", dropdownRef);
    console.log("client", dropdownRef.current.clientHeight);
    if (showDropdownCategories) {
      setCustomDropdownStyle({
        // transform: `translateY(
        // }px)`,
        opacity: 1,
        transform: `scaleY(1)`,
        top: dropdownRef.current.parentElement.clientHeight
      });
    } else {
      setCustomDropdownStyle({
        // display: "none",
        opacity: 0,
        transform: `scaleY(0)`,
        top: dropdownRef.current.parentElement.clientHeight
      });
    }
  }, [showDropdownCategories]);

  return (
    <section className="shopscreen">
      <div className="shopscreen__banner">
        <h2>Qué comemos hoy?</h2>
      </div>
      <div
        className="shopscreen__dropdown"
        onClick={(e) => {
            setShowDropdownCategories((prev) => !prev);
        }}
      >
        <h4>{categorySelected}</h4>
        <i class="fas fa-caret-down"></i>
        <ul
          ref={dropdownRef}
          className="shopscreen__dropdownItems"
          style={{...customDropdownStyle, width: '100%'}}
        >
          {categories
            .filter((item) => item !== categorySelected)
            .map((item) => {
              return (
                <li key={item} className="shopscreen__dropdownItem" onClick={(e) => setCategorySelected(e.target.innerText)}>
                 {item}
                </li>
              );
            })}
        </ul>
      </div>
      <div className="shopscreen__products"></div>
    </section>
  );
};

export default ShopScreen;
