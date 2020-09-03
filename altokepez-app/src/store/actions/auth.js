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
        authData: authData
    }
}

const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}

export const auth = (email, password) => {
    return dispatch => {

        const authData = {
            
        }
        axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=${authConfig.AUTH_API_WEB_KEY}`, authData);
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

