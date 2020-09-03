
import * as actionTypes from './actionTypes';

// action creators

const saveName = (name) => {
    return {
        type: actionTypes.LOGIN,
        name: name
    }
}

export const login = (userName) => {
    return (dispatch, getState) => {
        console.log("userName: ",getState().auth.userName);
        //codigo asincrono
        setTimeout(() => {
            dispatch(saveName(userName));
        }, 3000);
    }
}