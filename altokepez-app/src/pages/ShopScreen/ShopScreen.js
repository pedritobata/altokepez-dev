import React, { useState, useEffect, useRef } from "react";
import ProductShopping from "../../components/Products/ProductShopping";
import "./ShopScreen.scss";

const ShopScreen = (props) => {
  const [categories, setCategories] = useState([
    "Clásicos",
    "Combos",
    "Ofertas",
    "A la Carta",
    "Bebidas",
    "Especiales",
  ]);
  const [categorySelected, setCategorySelected] = useState(props.match.params.category);
  const [showDropdownCategories, setShowDropdownCategories] = useState(false);
  const [customDropdownStyle, setCustomDropdownStyle] = useState({});

  const dropdownRef = useRef(null);

  useEffect(() => {
    // console.log("dropdownRef", dropdownRef);
    // console.log("client", dropdownRef.current.clientHeight);
    if (showDropdownCategories) {
      setCustomDropdownStyle({
        opacity: 1,
        transform: `scaleY(1)`,
        top: dropdownRef.current.parentElement.clientHeight
      });
    } else {
      setCustomDropdownStyle({
        opacity: 0,
        transform: `scaleY(0)`,
        top: dropdownRef.current.parentElement.clientHeight
      });
    }
  }, [showDropdownCategories]);

  return (
    <section className="shopscreen" onClick={() => setShowDropdownCategories(false)}>
      <div className="shopscreen__banner">
        <h2>Qué comemos hoy?</h2>
      </div>
      <div
        className="shopscreen__dropdown"
        onClick={(e) => {
          e.stopPropagation();
            setShowDropdownCategories((prev) => !prev);
        }}
      >
        <h4>{categorySelected}</h4>
        <i className="fas fa-caret-down"></i>
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
      <p className="shopscreen__dropdownCaption">Despliega para ver más categorías</p>
      <h5 className="shopscreen__categoryTitle">{categorySelected.toLowerCase()}</h5>
      <div className="shopscreen__products">
            <ProductShopping title="Ceviche Mixto"
            productId={1}
            description="Ceviche tradicional a base de Pescado, Pota, pulpo, cebolla y acompañado con canchita, camote, lechuga, yuyo y choclo"
            price="S/.12.00"
            image="https://scontent.flim9-1.fna.fbcdn.net/v/t1.0-9/29790443_1699615846789241_4916546054447164864_n.jpg?_nc_cat=100&ccb=2&_nc_sid=9267fe&_nc_eui2=AeHr_2AsMZ0erLp8DkY-sKNdYL9IrZuOjgBgv0itm46OAPtp9DOI8ED0PeedBr64clU&_nc_ohc=UbKl0UZePpkAX-RzZMA&_nc_ht=scontent.flim9-1.fna&oh=1e7ca09783427dee37afa675df1327bf&oe=5FE2638E" /> 
             <ProductShopping title="Ceviche Mixto"
            description="Ceviche tradicional a base de Pescado, Pota, pulpo, cebolla y acompañado con canchita, camote, lechuga, yuyo y choclo"
            price="S/.12.00"
            image="https://scontent.flim9-1.fna.fbcdn.net/v/t1.0-9/29790443_1699615846789241_4916546054447164864_n.jpg?_nc_cat=100&ccb=2&_nc_sid=9267fe&_nc_eui2=AeHr_2AsMZ0erLp8DkY-sKNdYL9IrZuOjgBgv0itm46OAPtp9DOI8ED0PeedBr64clU&_nc_ohc=UbKl0UZePpkAX-RzZMA&_nc_ht=scontent.flim9-1.fna&oh=1e7ca09783427dee37afa675df1327bf&oe=5FE2638E" /> 
             <ProductShopping title="Ceviche Mixto"
            description="Ceviche tradicional a base de Pescado, Pota, pulpo, cebolla y acompañado con canchita, camote, lechuga, yuyo y choclo"
            price="S/.12.00"
            image="https://scontent.flim9-1.fna.fbcdn.net/v/t1.0-9/29790443_1699615846789241_4916546054447164864_n.jpg?_nc_cat=100&ccb=2&_nc_sid=9267fe&_nc_eui2=AeHr_2AsMZ0erLp8DkY-sKNdYL9IrZuOjgBgv0itm46OAPtp9DOI8ED0PeedBr64clU&_nc_ohc=UbKl0UZePpkAX-RzZMA&_nc_ht=scontent.flim9-1.fna&oh=1e7ca09783427dee37afa675df1327bf&oe=5FE2638E" /> 
             <ProductShopping title="Ceviche Mixto"
            description="Ceviche tradicional a base de Pescado, Pota, pulpo, cebolla y acompañado con canchita, camote, lechuga, yuyo y choclo"
            price="S/.12.00"
            image="https://scontent.flim9-1.fna.fbcdn.net/v/t1.0-9/29790443_1699615846789241_4916546054447164864_n.jpg?_nc_cat=100&ccb=2&_nc_sid=9267fe&_nc_eui2=AeHr_2AsMZ0erLp8DkY-sKNdYL9IrZuOjgBgv0itm46OAPtp9DOI8ED0PeedBr64clU&_nc_ohc=UbKl0UZePpkAX-RzZMA&_nc_ht=scontent.flim9-1.fna&oh=1e7ca09783427dee37afa675df1327bf&oe=5FE2638E" /> 
             <ProductShopping title="Ceviche Mixto"
            description="Ceviche tradicional a base de Pescado, Pota, pulpo, cebolla y acompañado con canchita, camote, lechuga, yuyo y choclo"
            price="S/.12.00"
            image="https://scontent.flim9-1.fna.fbcdn.net/v/t1.0-9/29790443_1699615846789241_4916546054447164864_n.jpg?_nc_cat=100&ccb=2&_nc_sid=9267fe&_nc_eui2=AeHr_2AsMZ0erLp8DkY-sKNdYL9IrZuOjgBgv0itm46OAPtp9DOI8ED0PeedBr64clU&_nc_ohc=UbKl0UZePpkAX-RzZMA&_nc_ht=scontent.flim9-1.fna&oh=1e7ca09783427dee37afa675df1327bf&oe=5FE2638E" /> 
             <ProductShopping title="Ceviche Mixto"
            description="Ceviche tradicional a base de Pescado, Pota, pulpo, cebolla y acompañado con canchita, camote, lechuga, yuyo y choclo"
            price="S/.12.00"
            image="https://scontent.flim9-1.fna.fbcdn.net/v/t1.0-9/29790443_1699615846789241_4916546054447164864_n.jpg?_nc_cat=100&ccb=2&_nc_sid=9267fe&_nc_eui2=AeHr_2AsMZ0erLp8DkY-sKNdYL9IrZuOjgBgv0itm46OAPtp9DOI8ED0PeedBr64clU&_nc_ohc=UbKl0UZePpkAX-RzZMA&_nc_ht=scontent.flim9-1.fna&oh=1e7ca09783427dee37afa675df1327bf&oe=5FE2638E" /> 
             <ProductShopping title="Ceviche Mixto"
            description="Ceviche tradicional a base de Pescado, Pota, pulpo, cebolla y acompañado con canchita, camote, lechuga, yuyo y choclo"
            price="S/.12.00"
            image="https://scontent.flim9-1.fna.fbcdn.net/v/t1.0-9/29790443_1699615846789241_4916546054447164864_n.jpg?_nc_cat=100&ccb=2&_nc_sid=9267fe&_nc_eui2=AeHr_2AsMZ0erLp8DkY-sKNdYL9IrZuOjgBgv0itm46OAPtp9DOI8ED0PeedBr64clU&_nc_ohc=UbKl0UZePpkAX-RzZMA&_nc_ht=scontent.flim9-1.fna&oh=1e7ca09783427dee37afa675df1327bf&oe=5FE2638E" /> 
             <ProductShopping title="Ceviche Mixto"
            description="Ceviche tradicional a base de Pescado, Pota, pulpo, cebolla y acompañado con canchita, camote, lechuga, yuyo y choclo"
            price="S/.12.00"
            image="https://scontent.flim9-1.fna.fbcdn.net/v/t1.0-9/29790443_1699615846789241_4916546054447164864_n.jpg?_nc_cat=100&ccb=2&_nc_sid=9267fe&_nc_eui2=AeHr_2AsMZ0erLp8DkY-sKNdYL9IrZuOjgBgv0itm46OAPtp9DOI8ED0PeedBr64clU&_nc_ohc=UbKl0UZePpkAX-RzZMA&_nc_ht=scontent.flim9-1.fna&oh=1e7ca09783427dee37afa675df1327bf&oe=5FE2638E" /> 
             <ProductShopping title="Ceviche Mixto"
            description="Ceviche tradicional a base de Pescado, Pota, pulpo, cebolla y acompañado con canchita, camote, lechuga, yuyo y choclo"
            price="S/.12.00"
            image="https://scontent.flim9-1.fna.fbcdn.net/v/t1.0-9/29790443_1699615846789241_4916546054447164864_n.jpg?_nc_cat=100&ccb=2&_nc_sid=9267fe&_nc_eui2=AeHr_2AsMZ0erLp8DkY-sKNdYL9IrZuOjgBgv0itm46OAPtp9DOI8ED0PeedBr64clU&_nc_ohc=UbKl0UZePpkAX-RzZMA&_nc_ht=scontent.flim9-1.fna&oh=1e7ca09783427dee37afa675df1327bf&oe=5FE2638E" /> 

      </div>
    </section>
  );
};

export default ShopScreen;
