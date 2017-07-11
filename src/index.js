import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger';
import rootReducer from './reducers/rootReducer';

import Example from './components/Example';
import registerServiceWorker from './registerServiceWorker';

let store = createStore(rootReducer,
applyMiddleware(logger)
);
console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <Example />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
