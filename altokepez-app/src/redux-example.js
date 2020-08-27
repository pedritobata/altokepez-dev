const redux = require('redux');

const initialState = {
    counter: 0
}

// reducer
const reducer = (state = initialState, action) => {
    switch(action.type){
        case "INC_COUNTER":
            return {
                ...state,
                counter: state.counter + 1
            };
        case "ADD_COUNTER":
            return {
                ...state,
                counter: state.counter + action.value
            };
        default:
            return state;
    }
};

// store
const store = redux.createStore(reducer);
console.log(store.getState());

//subscription
store.subscribe(() => {
    console.log(store.getState());
});

// actions
store.dispatch({
    type: "INC_COUNTER"
});

