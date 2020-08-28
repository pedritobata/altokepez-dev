

const initialAuthState = {
    userName: ""
}

export const authReducer = (state = initialAuthState, action) => {
    switch(action.type){
        case "LOGIN":
            return {
                ...state,
                userName: action.name
            };
        default:
            return state;
    }
} ;

