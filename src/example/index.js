// App deps
import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';

// modules
import logger from 'redux-logger';
import { flashState } from '../Flash';

// styles
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

// components
import App from './components/App';

const rootReducer = combineReducers({ flashState });

let store = createStore(rootReducer, applyMiddleware(logger));

const Main = () =>
  <Provider store={store}>
    <App />
  </Provider>;

export default Main;
