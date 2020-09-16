import React  from 'react';
import { connect } from 'react-redux';
import Banner from '../../components/Banner/Banner';
import Services from '../../containers/Services/Services';


class Home extends React.Component{

    render(){

        
        return (
            <main className="home">
                <Banner  />
                <Services  />
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
