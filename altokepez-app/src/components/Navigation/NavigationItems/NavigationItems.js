import React from 'react';
import NavigationItem from '../NavigationItem/NavigationItem';
import './NavigationItems.css';

const NavigationItems = props => {

    return (
        <ul className="nav justify-content-center">
            <NavigationItem exact link="/home">Home</NavigationItem>
            <NavigationItem exact link="/about">About</NavigationItem>
            <NavigationItem exact link="/contact">Contact</NavigationItem>
        </ul>
    );
}


export default NavigationItems;