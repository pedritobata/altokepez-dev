import React from "react";
import "./Banner.css";
import {Animated} from "react-animated-css";
import DiscountBox from "../DiscountBox/DiscountBox";

const Banner = () => {
  return (
    <div className="banner">
      <DiscountBox  text="Descuento hasta el 20%"  position="center"/>
      <Animated animationIn="fadeInDown" 
      animationInDuration={1100}
      animationInDelay={0}
      className="animationContainer">
       
          <img
          className="banner__dishImg"
            src="https://cdn.pixabay.com/photo/2015/12/20/17/11/fish-1101436_1280.jpg"
            alt="dish left"
          />
        
      </Animated>
      <Animated animationIn="fadeInUp"
       animationInDuration={1200}
       animationInDelay={0}
       className="animationContainer">
       
          <img
          className="banner__dishImg"
            src="https://cdn.pixabay.com/photo/2016/03/05/20/15/asian-1238725__480.jpg"
            alt="dish right"
          />
        
      </Animated>
    </div>
  );
};

export default Banner;
