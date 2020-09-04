import React  from 'react';
import { connect } from 'react-redux';


class Home extends React.Component{

    render(){

        return <h2>Welcome {this.props.userEmail}</h2>
    }
}

const mapStateToProps = state => {
    return {
        userEmail: state.auth.email
    }
}

export default connect(mapStateToProps)(Home);
