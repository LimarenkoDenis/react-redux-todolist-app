import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import router from './router';
import store from './store';

import './styles.css';

ReactDOM.render(
	<Provider store={store}>{router}</Provider>,
	window.document.querySelector('#root')
);