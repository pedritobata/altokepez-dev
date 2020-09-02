import * as actionTypes from '../actions/actionTypes';

const initialAuthState = {
    userName: ""
}

export const authReducer = (state = initialAuthState, action) => {
    switch(action.type){
        case actionTypes.LOGIN:
            return {
                ...state,
                userName: action.name
            };
        default:
            return state;
    }
} ;

