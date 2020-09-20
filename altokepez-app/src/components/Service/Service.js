import React from 'react';
import './Service.scss';

const Service = ({img, title, description}) => {

    console.log("img", img);

    return (
        <div className="service">
            <img className="service__image" src={img} alt="servicio"/>
            <h4 className="service__title">{title}</h4>
            <p className="service__description">{description}</p>
        </div>
    );
}

export default Service;