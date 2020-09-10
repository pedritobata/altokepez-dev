import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <img
      className="banner__dish"
        src="https://cdn.pixabay.com/photo/2015/12/20/17/11/fish-1101436_1280.jpg"
        alt="dish left"
      />
      <img
      className="banner__dish"
        src="https://cdn.pixabay.com/photo/2016/03/05/20/15/asian-1238725__480.jpg"
        alt="dish right"
      />
    </div>
  );
};

export default Banner;
