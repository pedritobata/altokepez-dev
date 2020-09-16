import React from 'react';
import Service from '../../components/Service/Service';
import './Services.css';

const Services = () => {

    return (
        <section className="services">
            <h2>Nuestros Servicios</h2>
            <div className="services__container">
                <Service imgUrl="" title="Nuestra barra" description="" />
                <Service imgUrl="" title="Delivery" description="" />
                <Service imgUrl="" title="Recojo en tienda" description="" />
                <Service imgUrl="" title="Recojo en tienda" description="" />
                <Service imgUrl="" title="Recojo en tienda" description="" />
                <Service imgUrl="" title="Recojo en tienda" description="" />
                <Service imgUrl="" title="Recojo en tienda" description="" />
                <Service imgUrl="" title="Recojo en tienda" description="" />
            </div>
        </section>
    );
}

export default Services;