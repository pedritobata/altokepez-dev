import React from "react";
import "./RecommendedMeal.scss";
import Button from "../UI/Button/Button";

const RecommendedMeal = (props) => {
  return (
    <div className="recommended-meal">
        <div
          className="recommended-meal__container"
          style={{ backgroundImage: `url('${props.image}')` }}
        >
          
        </div>
        <div className="recommended-meal__shop">
        <h3 className="recommended-meal__title">{props.title}</h3>
        <Button light value="ver plato" />
      </div>
    </div>
  );
};

export default RecommendedMeal;
