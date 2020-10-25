import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import App from './components/App';
import reducers from './reducers';
import { loadState, saveState } from './localStorage';
import throttle from 'lodash/throttle';

const persistedState = loadState('todos');
const store = createStore(reducers, persistedState, composeWithDevTools(applyMiddleware()));
console.log(store.getState().todos);
store.subscribe(
	throttle(() => {
		saveState(
			{
				todos: store.getState().todos
			},
			'todos'
		);
	}, 1000)
);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
