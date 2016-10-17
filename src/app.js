import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import AppRoot from './containers/appRoot';
import configureStore from './store/configureStore';

const store = configureStore();

ReactDOM.render(
    <AppRoot store={store}/>,
	document.querySelector('#app')
);