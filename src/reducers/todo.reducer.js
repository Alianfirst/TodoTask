import { ADD_TODO, EDIT_TODO, REMOVE_TODO, TOGGLE_TODO } from './types';

export default (state, action) => {
	switch (action.type) {
		case ADD_TODO:
			return [ ...state, { id: state.length + 1, task: action.newTask, completed: false } ];
		case EDIT_TODO:
			return state.map((todo) => (todo.id === action.id ? { ...todo, task: action.newTask } : todo));
		case REMOVE_TODO:
			return state.filter((todo) => todo.id !== action.id);
		case TOGGLE_TODO:
			return state.map((todo) => (todo.id === action.id ? { ...todo, completed: !todo.completed } : todo));
		default:
			return state;
	}
};
