import React from 'react';
import './Service.css';

const Service = ({imgUrl, title, description}) => {

    return (
        <div className="service">
            <img className="service__image" src={imgUrl} alt="servicio"/>
            <h4 className="service__title">{title}</h4>
            <p className="service__description">{description}</p>
        </div>
    );
}

export default Service;