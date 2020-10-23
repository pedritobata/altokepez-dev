import React from "react";
import Service from "../../components/Service/Service";
import "./Services.scss";
import standImage from "../../assets/images/stand.png";
import motoImage from "../../assets/images/vespa.png";
import storeImage from "../../assets/images/barbershop.png";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { Controller, Scene } from "react-scrollmagic";

const Services = () => {
  return (
    <section className="services">
      <SectionTitle title="Nuestros Servicios" />
      <Controller>
        <Scene duration={0} triggerElement="#servicesContainer"
         classToggle="services__container--fadeInbottom"
         reverse={false}
         triggerHook="onEnter">
          {
            (progress, event) => {
              //console.log("*****Se disparó el scroll!!!")
              return (
                <div id="servicesContainer" className="services__container">
            <Service
              img={standImage}
              title="En la barra"
              description="Disfruta tu almuerzo en nuestra hermosa barra de siempre y acomódate como puedas!"
            />
            <Service
              img={motoImage}
              title="Delivery"
              description="Debido a la coyuntura actual, hemos implementado nuestro servicio de Delivery cumpliendo rigurosamente todos los protocolos sanitarios"
            />
            <Service
              img={storeImage}
              title="Recojo en tienda"
              description="También puedes hacer tu pedido y decidir en qué momento pasarás a recogerlo a nuestro local"
            />
          </div>
              );
            }
          }
        </Scene>
      </Controller>
    </section>
  );
};

export default Services;
