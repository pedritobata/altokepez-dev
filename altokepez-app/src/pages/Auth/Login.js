import React, { useState } from 'react';
import './Login.css';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/index';
import Backdrop from '../../components/Backdrop/Backdrop';
import Button from '../../components/UI/Button/Button';

const Login = (props) => {

    const [ user, setUser ] = useState("");
    const [ password, setPassword ] = useState("");
    

    const changeInputHandler = (event, element) => {
        if(element === 'user')
            setUser(event.target.value);
        
        if(element === 'pass')
            setPassword(event.target.value);   

    }
   

    const loginHandler = (event) => {
        event.preventDefault();
        props.onSubmitAuth(user, password, false);
    }

    return (
        <div>
        <Backdrop clicked={props.backdropClicked} />
        <section className="login__container">
            <h1 className="login__title">Please Sign in</h1>
            <hr />
            <p className="login__phrase">Qué gusto tenerte de vuelta!</p>
            <form onSubmit={loginHandler} className="login__form">
                <input type="text" onChange={(event) => changeInputHandler(event,"user")} value={user} placeholder="Email"/>
                <input type="password" onChange={(event) => changeInputHandler(event,"pass")} value={password} placeholder="Contraseña"/>
                <small>Olvidé mi contraseña</small>
                <Button value="Sign in" />
            </form>
            <div className="login__registro">
                <p>No tienes una cuenta?</p><small>Registrarme</small>
            </div>
        {props.authError && <p>{props.authError.message}</p>}
        </section>
    </div> 
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmitAuth: (user, pass, isSignup) => dispatch(actionCreators.auth(user, pass, isSignup))
    }
}

const mapStateToProps = state => {
    return {
        authError: state.auth.error
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
export const TestLogin = Login;