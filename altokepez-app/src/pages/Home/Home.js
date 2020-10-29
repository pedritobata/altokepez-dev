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
          name: "Chinen",
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
                src="https://scontent.flim9-1.fna.fbcdn.net/v/t31.0-0/c0.34.206.206a/p206x206/169552_418773321526941_1185790091_o.jpg?_nc_cat=108&_nc_sid=cdbe9c&_nc_eui2=AeFYMq8Ctj0sVHANgDXN9fFmqVwEOX8AMfupXAQ5fwAx--4F8EhDx7kTMuRwCa3GiY0&_nc_ohc=KJWoUUh0k3MAX_OSW5T&_nc_ht=scontent.flim9-1.fna&_nc_tp=27&oh=071342ced36873ae6b496d6c9a599696&oe=5F94A3CB"
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
              monedas y haz tus pedidos al toque pes!!.
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
              image="https://scontent.flim9-1.fna.fbcdn.net/v/t31.0-8/54079_418776008193339_1635302210_o.jpg?_nc_cat=105&ccb=2&_nc_sid=e007fa&_nc_ohc=XBbTC0hjjasAX_qAtb-&_nc_ht=scontent.flim9-1.fna&oh=59867def729c2a8f15c31c0e46626916&oe=5FB60E0D"
            />
            <RecommendedMeal
              id="recommended2"
              title="Tallarines salteados"
              image="https://scontent.flim9-1.fna.fbcdn.net/v/t1.0-9/80308779_3309508445786733_2992348077840400384_o.jpg?_nc_cat=103&_nc_sid=8024bb&_nc_ohc=NQCuBTBA5MsAX-UTJuh&_nc_ht=scontent.flim9-1.fna&oh=e3071e79e0f01476f8ce520cf1cf3a1f&oe=5F9D29F4"
            />
            <RecommendedMeal
              id="recommended3"
              title="Combinado de Calamar"
              image="https://scontent.flim9-1.fna.fbcdn.net/v/t31.0-8/461703_285899748147633_33065499_o.jpg?_nc_cat=101&_nc_sid=7aed08&_nc_ohc=S57X7po5Q1kAX8RbZI8&_nc_ht=scontent.flim9-1.fna&oh=c62eb38c3643365a8fd1771b9c1077a6&oe=5F9ED01D"
            />
            <RecommendedMeal
              id="recommended4"
              title="Leche de Tigre"
              image="https://scontent.flim9-1.fna.fbcdn.net/v/t1.0-9/79908155_3319135381490706_6780833648972136448_o.jpg?_nc_cat=103&ccb=2&_nc_sid=8024bb&_nc_ohc=SOZDw-87VMUAX97wjyb&_nc_ht=scontent.flim9-1.fna&oh=f9dea9634bed366d9a63c3eef9a68e70&oe=5FB694D7"
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
