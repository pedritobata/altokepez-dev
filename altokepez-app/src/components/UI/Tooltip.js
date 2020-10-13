import React from 'react';
import './Tooltip.scss';

const Tooltip = props => {

    return (
       
      <p className="tooltipCustom" style={{opacity: `${props.show ? "1" : "0"}`}}>{props.text}</p> 
       
    );
};

export default Tooltip;