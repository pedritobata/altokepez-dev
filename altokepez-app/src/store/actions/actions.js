
import * as actionTypes from './actionTypes';

// action creators

const saveName = (name) => {
    return {
        type: actionTypes.LOGIN,
        name: name
    }
}

export const login = (userName) => {
    return dispatch => {
        //codigo asincrono
        setTimeout(() => {
            dispatch(saveName(userName));
        }, 3000);
    }
}