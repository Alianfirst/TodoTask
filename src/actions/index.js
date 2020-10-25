import { ADD_TODO, EDIT_TODO, REMOVE_TODO, TOGGLE_TODO } from './types';

export const addTodo = (newTask) => {
	return {
		type: ADD_TODO,
		payload: newTask
	};
};

export const editTodo = (id, newTask) => {
	return {
		type: EDIT_TODO,
		payload: {
			id,
			newTask
		}
	};
};

export const removeTodo = (id) => {
	return {
		type: REMOVE_TODO,
		payload: id
	};
};

export const toggleTodo = (id) => {
	return {
		type: TOGGLE_TODO,
		payload: id
	};
};
