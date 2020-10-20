import React from "react";
import "./FooterWeb.scss";
import { Link } from "react-router-dom";
import {ReactComponent as FacebookIcon} from '../../assets/images/facebook-brands.svg';
import {ReactComponent as TwitterIcon} from '../../assets/images/twitter-brands.svg';
import {ReactComponent as InstagramIcon} from '../../assets/images/instagram-square-brands.svg';
import {ReactComponent as WhatsappIcon} from '../../assets/images/whatsapp-square-brands.svg';
import {ReactComponent as VisaIcon} from '../../assets/images/cc-visa-brands.svg';
import {ReactComponent as MastercardIcon} from '../../assets/images/cc-mastercard-brands.svg';
import {ReactComponent as DinersIcon} from '../../assets/images/cc-diners-club-brands.svg';
import {ReactComponent as MailIcon} from '../../assets/images/envelope-square-solid.svg';

const FooterWeb = (props) => {
  return (
    <footer className="footer">
      <div className="footer__sectionMain">
        <h1 className="footer__mainTitle">al toke pez</h1>
        <p className="footer__subtitle">
          Platos de calidad al alcance de todos
        </p>
        <ul className="footer__redes">
          <li>
              <a href="https://www.facebook.com/Al-TOKE-PEZ-275646575839617/"><FacebookIcon  /></a>
          </li>
          <li>
              <a href="#"><InstagramIcon  /></a>
          </li>
          <li>
              <a href="#"><TwitterIcon  /></a>
          </li>
        </ul>
      </div>
      <div className="footer__section">
        <h4>Locales</h4>
        <p className="separator"></p>
        <ul>
          <li>Surquillo: Av. Angamos 886</li>
          <li>Surquillo: Av. Angamos 1086</li>
          <li>Cercado: Jr. Treneman 260</li>
        </ul>
      </div>
      <div className="footer__section">
        <h4>Contactos</h4>
        <p className="separator"></p>
        <ul>
          <li className="contactosIcon">
          <WhatsappIcon  /><p>999-999-999</p>
          </li>
          <li className="contactosIcon">
          <MailIcon /><p>toshi@gmail.com</p>
          </li>
        </ul>
      </div>
      <div className="footer__section ">
        <h4>Platillos</h4>
        <p className="separator"></p>
        <ul>
          <li>
            <Link to="#">Ofertas</Link>
          </li>
          <li>
            <Link to="#">A la carta</Link>
          </li>
          <li>
            <Link to="#">Platos clásicos</Link>
          </li>
          <li className="ccIcons">
            <VisaIcon  />
            <MastercardIcon  />
            <DinersIcon  />
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default FooterWeb;
