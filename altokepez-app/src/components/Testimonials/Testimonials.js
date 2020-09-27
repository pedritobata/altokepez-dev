import React, { useState, useEffect } from "react";
import "./Testimonials.scss";

const Testimonials = (props) => {

    const [page, setPage] = useState(1);

  return (
    <div className="testimonials">
      {props.items.map(item => {
        return (
          <div className="testimonial" style={{width:`${100 / props.perpage}%`}}>
            <img
              src={item.photo}
              alt={item.name}
              className="testimonial__photo"
            />
            <h4 className="testimonial__name">{item.name}</h4>
            <p className="testimonial__testimony">{item.testimony}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Testimonials;
