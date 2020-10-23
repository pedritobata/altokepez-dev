import React from "react";
import "./RecommendedMeal.scss";
import Button from "../UI/Button/Button";
import { Controller, Scene } from "react-scrollmagic";

const RecommendedMeal = (props) => {

  const calculateStyleOddEven = () => {
    let resultStyle = {}
    if(Number(props.id.replace("recommended", '')) % 2 === 0){
      resultStyle = {
        animateStyle: "recommended-meal--fadeInRight",
        offsetStyle: "recommended-meal--offsetRight"
      } ;
    }else{
      resultStyle = {
        animateStyle: "recommended-meal--fadeInLeft",
        offsetStyle: "recommended-meal--offsetLeft"
      } ;
    }
    return resultStyle;
  }

  return (
    <Controller>
      <Scene duration={0} triggerElement={'#' + props.id}
         classToggle={calculateStyleOddEven().animateStyle}
         reverse={false}
         triggerHook="onCenter">
        <div className={`recommended-meal ${calculateStyleOddEven().offsetStyle}`} id={props.id}>
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
      </Scene>
    </Controller>
  );
};

export default RecommendedMeal;
