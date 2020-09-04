import * as actionTypes from '../actions/actionTypes';

const initialAuthState = {
    email: "",
    tokenId: "",
    error: null
}

export const authReducer = (state = initialAuthState, action) => {
    switch(action.type){
        case actionTypes.AUTH_SUCCESS:
            return {
                ...state,
                error: null,
                email: action.email,
                tokenId: action.token
            };
        case actionTypes.AUTH_FAIL:
            return {
                ...state,
                error: action.error
            };
        default:
            return state;
    }
} ;

