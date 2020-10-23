import React from 'react';
import NavigationItem from '../NavigationItem/NavigationItem';
import './NavigationItems.css';

const NavigationItems = props => {

    return (
        <ul className="nav">
            <li>
                <a  href="#homeId">Home</a>
            </li>
            <li>
                <a  href="#introductionId">Nosotros</a>
            </li>
            <li>
                <a  href="#contactoId">Contacto</a>
            </li>
        </ul>
    );
}


export default NavigationItems;