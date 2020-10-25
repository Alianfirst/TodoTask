import React, { createContext } from 'react';

import { reducers } from '../reducers';
import useLocalStorageReducer from '../hooks/useLocalStorageReducer';

const initialTodos = [
	{ id: 1, task: 'Wash the car', completed: false },
	{ id: 2, task: 'Wash the cat', completed: true }
];

export const TodoContext = createContext();
export const DispatchContext = createContext();

export const TodoProvider = ({ children }) => {
	const { todoReducer } = reducers;
	const [ todos, dispatch ] = useLocalStorageReducer('todos', initialTodos, todoReducer);

	return (
		<TodoContext.Provider value={todos}>
			<DispatchContext.Provider value={dispatch}>{children}</DispatchContext.Provider>
		</TodoContext.Provider>
	);
};
