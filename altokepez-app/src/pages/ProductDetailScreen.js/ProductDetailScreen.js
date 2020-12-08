import React, { useEffect, useState } from "react";
import NumberSelector from "../../components/NumberSelector/NumberSelector";
import Button from "../../components/UI/Button/Button";
import "./ProductDetailScreen.scss";
import FlatArrow from "../../components/UI/FlatArrow";

const ProductDetailScreen = (props) => {
  const [product, setProduct] = useState();
  const [qty, setQty] = useState(1);

  // Effects
  useEffect(() => {
    //cargar producto de la BD
    console.log("Param recceived:", props.location);
  }, []);


  // Handlers
  const changeNumberSelectorHandler = (selectedQty) => {
    setQty(selectedQty);
  }

  return (
    <article className="productDetail">
      <img
        className="productDetail__image"
        src="https://scontent.flim9-1.fna.fbcdn.net/v/t1.0-9/29790443_1699615846789241_4916546054447164864_n.jpg?_nc_cat=100&ccb=2&_nc_sid=9267fe&_nc_eui2=AeHr_2AsMZ0erLp8DkY-sKNdYL9IrZuOjgBgv0itm46OAPtp9DOI8ED0PeedBr64clU&_nc_ohc=UbKl0UZePpkAX-RzZMA&_nc_ht=scontent.flim9-1.fna&oh=1e7ca09783427dee37afa675df1327bf&oe=5FE2638E"
        alt="foto"
      />
      <div className="productDetail__info">
        <div className="productDetail__infoTop">
          <div className="productDetail__infoTop--left">
            <h3 className="productDetail__title">Ceviche Mixto</h3>
            <span className="productDetail__price">S/ 12.90</span>
            <div className="productDetail__rating">
              {Array.from({ length: 5 }).map((star) => (
                <i className="fas fa-star"></i>
              ))}
            </div>
          </div>
          <div className="productDetail__infoTop--right">
            <NumberSelector click={changeNumberSelectorHandler} />
            <span className="productDetail__subtotal">{`S/ ${(qty * 12.9).toFixed(2)}`}</span>
          </div>
        </div>
        <p className="productDetail__description">
          Calf-length dress in airy, textured cotton fabric with a printed
          pattern Sed hendrerit. Cras risus ipsum, faucibus ut, ullamcorper id,
          varius estibulum ante ipsum primis in faucibus Product Details
          Inspired by traditional blockprinting techniques in India, our own
          in-house.
        </p>
        <Button
          style={{ padding: "0.9rem 1.1rem" }}
          value="Agregar al pedido"
        ></Button>
        <FlatArrow
          style={{ fontSize: "1.2rem", marginLeft: "10px" }}
          position={{ bottom: "0rem", right: "0.5rem" }}
          text="Regresar"
          link="/"
        />
      </div>
      <hr />
      <div className="productDetail__comments"></div>
    </article>
  );
};

export default ProductDetailScreen;
