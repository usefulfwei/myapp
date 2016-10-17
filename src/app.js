import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import { createStore } from 'redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
// import rootReducer from './reducers';
import configureStore from './store/configureStore.js';

// let store = createStore(rootReducer);
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.getElementById('app')
);