import { ADD_TODO, EDIT_TODO, REMOVE_TODO, TOGGLE_TODO } from './types';

const initialTodos = {
	todos: [ { id: 1, task: 'Wash the car', completed: false }, { id: 2, task: 'Wash the cat', completed: true } ]
};

export default (state = initialTodos.todos, action) => {
	switch (action.type) {
		case ADD_TODO:
			return [ ...state, { id: state.length + 1, task: action.payload, completed: false } ];
		case EDIT_TODO:
			return state.map(
				(todo) => (todo.id === action.payload.id ? { ...todo, task: action.payload.newTask } : todo)
			);
		case REMOVE_TODO:
			return state.filter((todo) => todo.id !== action.payload);
		case TOGGLE_TODO:
			return state.map((todo) => (todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo));
		default:
			return state;
	}
};
