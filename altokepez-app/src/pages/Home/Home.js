import React from "react";
import { connect } from "react-redux";
import Banner from "../../components/Banner/Banner";
import Services from "../../containers/Services/Services";
import RecommendedMeal from "../../components/RecommendedMeal/RecommendedMeal";
import "./Home.scss";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Testimonials from "../../components/Testimonials/Testimonials";
import ProductGeneric from "../../components/Products/ProductGeneric";
import DiscountBadge from "../../components/UI/DiscountBadge";
import Icon from "../../components/Icon/Icon";
import FooterWeb from "../../containers/FooterWeb/FooterWeb";
import { Controller, Scene } from "react-scrollmagic";
import FlatArrow from "../../components/UI/FlatArrow";
import toshiImage from '../../assets/images/toshi-fire.jpg';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [
        {
          photo:
            "http://cdn.shopify.com/s/files/1/0414/0069/6999/files/image-12.jpg?v=1593146865",
          name: "Momo",
          comment:
            "Saved our business! We have no regrets! Thanks for the great service. Sunmi is worth much more than I paid Saved our business! We have no regrets! Thanks for the great service. Sunmi is worth much more!",
        },
        {
          photo:
            "http://cdn.shopify.com/s/files/1/0414/0069/6999/files/image-13.jpg?v=1593146872",
          name: "Toshi",
          comment:
            "Saved our business! We have no regrets! Thanks for the great service. Sunmi is worth much more than I paid Saved our business! We have no regrets! Thanks for the great service. Sunmi is worth much more!",
        },
        {
          photo:
            "http://cdn.shopify.com/s/files/1/0414/0069/6999/files/image-11.jpg?v=1593146856",
          name: "Jhon",
          comment:
            "Saved our business! We have no regrets! Thanks for the great service. Sunmi is worth much more than I paid Saved our business! We have no regrets! Thanks for the great service. Sunmi is worth much more!",
        },
        {
          photo:
            "http://cdn.shopify.com/s/files/1/0414/0069/6999/files/image-12.jpg?v=1593146865",
          name: "Tato",
          comment:
            "Saved our business! We have no regrets! Thanks for the great service. Sunmi is worth much more than I paid Saved our business! We have no regrets! Thanks for the great service. Sunmi is worth much more!",
        },
        {
          photo:
            "http://cdn.shopify.com/s/files/1/0414/0069/6999/files/image-13.jpg?v=1593146872",
          name: "Kike",
          comment:
            "Saved our business! We have no regrets! Thanks for the great service. Sunmi is worth much more than I paid Saved our business! We have no regrets! Thanks for the great service. Sunmi is worth much more!",
        },
        {
          photo:
            "http://cdn.shopify.com/s/files/1/0414/0069/6999/files/image-11.jpg?v=1593146856",
          name: "Yerbita",
          comment:
            "Saved our business! We have no regrets! Thanks for the great service. Sunmi is worth much more than I paid Saved our business! We have no regrets! Thanks for the great service. Sunmi is worth much more!",
        },
      ],
    };
  }

  render() {
    return (
      <main className="home" id="homeId">
        <Banner />
        <Services />

        <div className="introduction" id="introductionId">
          <Controller>
            <Scene
              duration={0}
              triggerElement="#introductionId"
              classToggle="introduction__image--shake"
              reverse={false}
              triggerHook="end"
            >
              <img
                src={toshiImage}
                alt="Altoke pez"
                className="introduction__image"
              />
            </Scene>
          </Controller>
          <div className="introduction__info">
            <h2 className="introduction__title">
              Al Toke Pez, calidad al alcance de todos
            </h2>
            <p className="introduction__description">
              Hola, soy Toshi, fundador de <cite>Al Toke Pez</cite>. Te invito a
              probar la sazón que aprendí de mi viejo en la legendaria{" "}
              <cite>Cocina de Darío</cite> y que ahora, después de meterle mi
              propio flow, pongo a disposición de tu paladar y bajo tu propia
              responsabilidad....sólo bromeaba!. Aunque estos platos sí van muy
              en serio, así que antes de que se me queme esta chita chapa tus
              monedas y haz tus pedidos al toque pez!!.
            </p>
            <cite className="introduction__author">
              <p></p> Tomás Matsufuji
            </cite>
          </div>
        </div>

        <div className="home__container">
          <SectionTitle title="Hoy te recomiendo" />
          <div className="recommended">
            <RecommendedMeal
              id="recommended1"
              title="Cachetitos de Róbalo"
              image="https://scontent.flim9-1.fna.fbcdn.net/v/t31.0-8/55504_418774461526827_2011798023_o.jpg?_nc_cat=100&ccb=2&_nc_sid=cdbe9c&_nc_eui2=AeFxI-qHohANka806_ESfDl8VlIEjGJaB59WUgSMYloHn6P1yTL0JbD-TzqVfZjLEYU&_nc_ohc=ZcNBQp45Y6oAX-59B6p&_nc_ht=scontent.flim9-1.fna&oh=2fda1f1bcf3948077c2fcaed949e4b4a&oe=5FE2B2FA"
            />
            <RecommendedMeal
              id="recommended2"
              title="Tallarines salteados"
              image="https://scontent.flim9-1.fna.fbcdn.net/v/t1.0-9/80308779_3309508445786733_2992348077840400384_o.jpg?_nc_cat=103&ccb=2&_nc_sid=730e14&_nc_eui2=AeG68MztRh-sRogCIqmYGaS7mXGOFnNtJjCZcY4Wc20mMA5RBnbXT85_r4AHADQZbZE&_nc_ohc=cH9ePRfI7_AAX8r3VNp&_nc_ht=scontent.flim9-1.fna&oh=a899b2f24e4b0694dce925f9f5aacf71&oe=5FE06674"
            />
            <RecommendedMeal
              id="recommended3"
              title="Combinado de pescado"
              image="https://scontent.flim9-1.fna.fbcdn.net/v/t1.0-9/68646787_2470779802979058_3805730311501774848_o.jpg?_nc_cat=111&ccb=2&_nc_sid=9267fe&_nc_eui2=AeEczeL31uCOiblcvjxuzwa9qZMmoIZXfE-pkyaghld8Txc5banfiiPbLDyhUwlQ6CQ&_nc_ohc=_4B3sQ1e5R0AX9xQNzD&_nc_ht=scontent.flim9-1.fna&oh=82e67502203052d98bcadc97dbd2628d&oe=5FE325C9"
            />
            <RecommendedMeal
              id="recommended4"
              title="Leche de Tigre"
              image="https://scontent.flim9-1.fna.fbcdn.net/v/t1.0-9/79908155_3319135381490706_6780833648972136448_o.jpg?_nc_cat=103&ccb=2&_nc_sid=730e14&_nc_eui2=AeHawir4JGjba0lJubE8wv5oHTsG2pkU5_cdOwbamRTn9x3RHbip4tz84ylJdvwy8mw&_nc_ohc=_sg8y8-lm9AAX8VsGhj&_nc_ht=scontent.flim9-1.fna&oh=efe5806e9b4f02df4040b8f6a9f0a130&oe=5FE21657"
            />
          <FlatArrow  position={{bottom: "-1.6rem", right: "0.5rem"}} text="Más platos a la carta"  link="/"/>
          </div>
          <SectionTitle title="Algunos clásicos y ofertas" />
          <div className="home__clasicos">
            <ProductGeneric
              title="Pescado frito"
              image="https://media-cdn.tripadvisor.com/media/photo-w/0c/43/52/e2/fried-fish.jpg"
            >
              <DiscountBadge text="Oferta" />
            </ProductGeneric>
            <ProductGeneric
              title="Combinado mixto"
              image="https://media-cdn.tripadvisor.com/media/photo-w/13/e8/9a/d5/mixto.jpg"
            />
            <ProductGeneric
              title="Cebiche de Pota"
              image="https://media-cdn.tripadvisor.com/media/photo-m/1280/17/31/80/f3/photo0jpg.jpg"
            />
            <ProductGeneric
              title="Paella"
              image="https://media-cdn.tripadvisor.com/media/photo-w/11/c8/45/df/soup-delicious-and-very.jpg"
            >
              <DiscountBadge text="Oferta" />
            </ProductGeneric>
            <ProductGeneric
              title="Chicharrón de Calamar"
              image="https://media-cdn.tripadvisor.com/media/photo-o/18/2f/90/c4/img-20190704-153158-largejpg.jpg"
            />
            <ProductGeneric
              title="Trío marino"
              image="https://media-cdn.tripadvisor.com/media/photo-w/14/96/1f/e0/al-toke-pez.jpg"
            >
              <DiscountBadge text="Oferta" />
            </ProductGeneric>
            <ProductGeneric
              title="Trío bravazo"
              image="https://media-cdn.tripadvisor.com/media/photo-w/12/f5/a4/29/photo0jpg.jpg"
            />
            <ProductGeneric
              title="Combo personal"
              image="https://media-cdn.tripadvisor.com/media/photo-o/09/1b/b6/77/al-toke-pez.jpg"
            />
          <FlatArrow position={{bottom: "0.5rem", right: "0.5rem"}} text="Ver más"  link="/"/>
          </div>

          <SectionTitle title="Qué dice la gentita?" />
          <Testimonials comments={this.state.comments} perpage={3} />
        </div>
        <section className="home__contact" id="contactoId">
          <div className="home__contact--background"></div>
          <div className="home__contact--front">
            <h2 className="home__contact__title">
              Suscríbete a nuestras notificaciones y novedades
            </h2>
            <p className="home__contact__subTitle">
              Déjanos tu email y podrás recibir ofertas, anuncios e invitaciones
              especiales
            </p>
            <form className="home__contact__form">
              <input type="text" placeholder="Ingresa tu email" />
              <button type="button">
                <Icon color="white" iconName="envelope-fill" size="1.5rem" />
              </button>
            </form>
          </div>
        </section>
        <FooterWeb />
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userEmail: state.auth.email,
  };
};

export default connect(mapStateToProps)(Home);
