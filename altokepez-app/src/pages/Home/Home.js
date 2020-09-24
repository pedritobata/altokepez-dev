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
