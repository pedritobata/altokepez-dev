import React, { useState } from 'react';
import './Login.css';
import { connect } from 'react-redux';

const Login = (props) => {

    const [ name, setName ] = useState("");

    const changeInputHandler = (event) => {
        setName(event.target.value);
        //console.log(event.target.value);
    }


    const loginHandler = (event) => {
        event.preventDefault();
        props.onSubmitLogin(name);
    }

    return <div>
        <h1>Please Sign in</h1>
        <form onSubmit={loginHandler}>
            <input type="text" onChange={changeInputHandler} value={name} placeholder="Ingrese nombre de usuario"/>
            <input type="password" placeholder="Ingrese su contraseña"/>
            <input type="submit"  value="Enviar"/>
        </form>
    </div>
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmitLogin: (userName) => dispatch({ type: "LOGIN", name: userName })
    }
}

export default connect(null, mapDispatchToProps)(Login);