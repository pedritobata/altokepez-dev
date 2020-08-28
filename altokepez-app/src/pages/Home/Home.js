import React  from 'react';
import { connect } from 'react-redux';


class Home extends React.Component{

    render(){

        return <h2>Welcome {this.props.userName}</h2>
    }
}

const mapStateToProps = state => {
    return {
        userName: state.userName
    }
}

export default connect(mapStateToProps)(Home);
