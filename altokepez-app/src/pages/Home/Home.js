import React  from 'react';
import { connect } from 'react-redux';
import Banner from '../../components/Banner/Banner';


class Home extends React.Component{

    render(){

        
        return (
            <main className="home">
                <Banner  />
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
