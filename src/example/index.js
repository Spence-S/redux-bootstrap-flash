// App deps
import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

// modules
import logger from 'redux-logger';
import { flashState } from '../Flash'

// styles
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

// components
import App from './components/App';




let store = createStore(flashState,
applyMiddleware(logger)
);

const Main = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

export default Main;
