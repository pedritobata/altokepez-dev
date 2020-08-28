import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { authReducer } from './store/reducers/auth';
import { Provider } from 'react-redux'


const store = createStore(authReducer);



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();
