import React, { useState, useEffect } from "react";
import "./Testimonials.scss";
import variablesSass from "../../design-constants/_sass-variables.scss";

const sidedrawerSweetspotMobile = Number.parseInt(
  variablesSass.sidedrawerSweetspotMobile.replace("px", "")
);
const userIconDisapearMobileBreakpoint = Number.parseInt(
  variablesSass.userIconDisapearMobileBreakpoint.replace("px", "")
);
const lastSmallestBreakpoint = Number.parseInt(
  variablesSass.lastSmallestBreakpoint.replace("px", "")
);

const Testimonials = (props) => {
  const [page, setPage] = useState(1);
  const [testimoniesPerPage, setTestimoniesPerPage] = useState(props.perpage);
  const [pages, setPages] = useState(Array(Math.ceil(props.comments.length / testimoniesPerPage)).fill(''));
  const [moveCarousel, setMoveCarousel] = useState(0);
 
  useEffect(() => {
    const resizeWindowListener = (event) => {
      let vwWidth = event.target.visualViewport.width;
      if (vwWidth >= userIconDisapearMobileBreakpoint) {
        setTestimoniesPerPage(props.perpage);
        
      } else if (vwWidth >= lastSmallestBreakpoint) {
        setTestimoniesPerPage(2);
      } else {
        setTestimoniesPerPage(1);
      }
      setPages(Array(Math.ceil(props.comments.length / testimoniesPerPage)).fill(''));
    };
    window.addEventListener("resize", resizeWindowListener);

    return () => {
      window.removeEventListener("resize", resizeWindowListener);
    };
  }, [testimoniesPerPage, props.perpage,props.comments]);


  const moveCarouselHandler = (index) => {
    const targetPage = index + 1;
    const translateX = (page - targetPage) * 100;
    console.log("translateX",translateX);
    console.log("index",index);
    console.log("page",page);
    setMoveCarousel(translateX);
  }

  return (
    <>
      <div
        className="testimonials"
        style={{
          width: `calc(${props.comments.length / testimoniesPerPage} * 100vw`,
          transform: `translateX(${moveCarousel}vw)`
        }}
      >
        {props.comments.map((item) => {
          return (
            <div
              key={item.name}
              className="testimony"
              style={{ flexGrow: `${(1 / testimoniesPerPage).toFixed(1)}` }}
            >
              <img
                src={item.photo}
                alt={item.name}
                className="testimony__photo"
              />
              <h4 className="testimony__name">{item.name}</h4>
              <p className="testimony__comment">{item.comment}</p>
            </div>
          );
        })}
      </div>
      <div className="testimonials__pageSwitchersContainer">
        {
          
          pages.map((_,index) => (
            <p className="testimonials__pageSwitcher" key={index} onClick={moveCarouselHandler.bind(null, index)}>X</p>
          ))
        }
      </div>
    </>
  );
};

export default Testimonials;
