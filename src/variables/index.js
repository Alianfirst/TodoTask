export const DRAWER_WIDTH = 240;

export const FILTERED_DATA = {
	All: () => true,
	Done: (todo) => todo.completed,
	Active: (todo) => !todo.completed
};

export const FILTERED_KEYS = Object.keys(FILTERED_DATA);
