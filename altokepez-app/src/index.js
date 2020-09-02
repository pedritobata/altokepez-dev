import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, combineReducers , applyMiddleware, compose} from 'redux';
import { authReducer } from './store/reducers/auth';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';

const reducers = combineReducers({
  auth: authReducer
});

const logger = store => {
  return next => {
    return action => {
      console.log("[Middleware] action dispatched:", action);
      const result = next(action);
      console.log("[Middleware] next state", store.getState());
      return result;
    }
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(logger, thunk)));



ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();
