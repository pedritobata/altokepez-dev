import * as actionTypes from './actionTypes';
import axios from 'axios';
import * as authConfig from '../../shared/app-config/auth';


const authStart = () => {
    return {
        type: actionTypes.AUTH_START

    }
}

const authSuccess = (authData) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: authData.idToken,
        email: authData.email,
        expiration: authData.expiresIn
    }
}

const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}

export const auth = (email, password, isSignup) => {
    return dispatch => {
        dispatch(authStart());

        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        }

        let url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${authConfig.AUTH_API_WEB_KEY}`;

        if(isSignup){
            url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${authConfig.AUTH_API_WEB_KEY}`;
        }

        axios.post(url, authData)
            .then(response => {
                dispatch(authSuccess(response.data));
                console.log(response);
            })
            .catch(err => {
                dispatch(authFail(err.response.data.error));
                console.log('mensaje error:',err.response.data);
            });
    }
}






// action creators

// const saveName = (name) => {
//     return {
//         type: actionTypes.LOGIN,
//         name: name
//     }
// }

// export const login = (userName) => {
//     return (dispatch, getState) => {
//         console.log("userName: ",getState().auth.userName);
//         //codigo asincrono
//         setTimeout(() => {
//             dispatch(saveName(userName));
//         }, 3000);
//     }
// }

