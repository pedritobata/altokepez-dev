import React  from 'react';
import { connect } from 'react-redux';
import Banner from '../../components/Banner/Banner';
import Services from '../../containers/Services/Services';
import RecommendedMeal from '../../components/RecommendedMeal/RecommendedMeal';
import './Home.scss';
import SectionTitle from '../../components/SectionTitle/SectionTitle';


class Home extends React.Component{

    render(){

        
        return (
            <main className="home">
                <Banner  />
                <Services  />
                <div className="introduction">
                    <img src="https://scontent.flim9-1.fna.fbcdn.net/v/t31.0-0/c0.34.206.206a/p206x206/169552_418773321526941_1185790091_o.jpg?_nc_cat=108&_nc_sid=cdbe9c&_nc_eui2=AeFYMq8Ctj0sVHANgDXN9fFmqVwEOX8AMfupXAQ5fwAx--4F8EhDx7kTMuRwCa3GiY0&_nc_ohc=KJWoUUh0k3MAX_OSW5T&_nc_ht=scontent.flim9-1.fna&_nc_tp=27&oh=071342ced36873ae6b496d6c9a599696&oe=5F94A3CB" 
                    alt="Altoke pez" 
                    className="introduction__image"/>
                    <div className="introduction__info">
                        <h2 className="introduction__title">Al Toke Pez, calidad al alcance de todos</h2>
                        <p className="introduction__description">
                            Hola, soy Toshi, fundador de <cite>Al Toke Pez</cite>. Te invito a probar la sazón que aprendí de mi viejo
                            en la legendaria <cite>Cocina de Darío</cite> y que ahora, después de meterle mi propio flow, pongo a disposición de
                            tu paladar y bajo tu propia responsabilidad....sólo bromeaba!. Aunque estos platos sí van muy en serio,
                            así que antes de que se me queme esta chita chapa tus monedas y haz tus pedidos al toque pes!!.
                        </p>
                        <cite className="introduction__author"><p></p> Tomás Matsufuji</cite>
                    </div>
                </div>
                <SectionTitle title="recomendamos hoy" />
                <div className="recommended">
                    <RecommendedMeal title="Cachetitos de Róbalo" image="https://scontent.flim13-1.fna.fbcdn.net/v/t31.0-8/55504_418774461526827_2011798023_o.jpg?_nc_cat=100&_nc_sid=e007fa&_nc_eui2=AeFxI-qHohANka806_ESfDl8VlIEjGJaB59WUgSMYloHn6P1yTL0JbD-TzqVfZjLEYU&_nc_ohc=Lx3xMY83cuYAX-l9aUU&_nc_ht=scontent.flim13-1.fna&oh=584a311ead4194382fb3340fb3d2aa68&oe=5F8FA47A" />
                    <RecommendedMeal  title="Saltadito con hongos" image="https://scontent.flim13-1.fna.fbcdn.net/v/t31.0-8/329160_418773264860280_2016262609_o.jpg?_nc_cat=110&_nc_sid=e007fa&_nc_eui2=AeGjNYEE6gT_dce5_wt9jpRv7028AT2PYr_vTbwBPY9ivx9bQJimuQMih5SblI4zlKc&_nc_ohc=fcIgniADsIAAX8dMeIe&_nc_ht=scontent.flim13-1.fna&oh=14c7b0d573c7ef0cc16f31fb35fc2e9f&oe=5F8FD7C0"/>
                </div>
                
            </main>
        );
    }
}

const mapStateToProps = state => {
    return {
        userEmail: state.auth.email
    }
}

export default connect(mapStateToProps)(Home);
