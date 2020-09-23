import React  from 'react';
import { connect } from 'react-redux';
import Banner from '../../components/Banner/Banner';
import Services from '../../containers/Services/Services';
import RecommendedMeal from '../../components/RecommendedMeal/RecommendedMeal';


class Home extends React.Component{

    render(){

        
        return (
            <main className="home">
                <Banner  />
                <Services  />
                <div className="recommended">
                    <RecommendedMeal  />
                    <RecommendedMeal  />
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
