import React from 'react';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';

import routes from '../routes';

export default class AppRoot extends React.Component {
	constructor(props) {
		super(props)
		this.displayName = 'AppRoot'
	}
	render() {
		const { store } = this.props;
		return (
			<Provider store={store}>
				<Router history={browserHistory} routes={routes}/>
			</Provider>
		);
	}
}