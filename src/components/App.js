import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import TodoForm from './TodoForm';
import TodoList from './TodoList';
import Navbar from './Navbar';

import useTodoState from '../hooks/useTodoState';
import useInputState from '../hooks/useInputState';
import useToggleState from '../hooks/useToggleState';

import { DRAWER_WIDTH } from '../variables';

const useStyles = makeStyles((theme) => ({
	paper: {
		margin: 0,
		padding: 0,
		height: '100vh'
	},
	appBar: {
		height: '10vh',
		backgroundColor: '#81c784'
	},
	grid: {
		marginTop: '1rem'
	},
	gridShift: {
		width: `calc(100% - ${DRAWER_WIDTH}px)`,
		marginLeft: DRAWER_WIDTH,
		transition: theme.transitions.create([ 'margin', 'width' ], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen
		})
	}
}));

const App = () => {
	const initialTodos = [
		{ id: 1, task: 'Wash the car', completed: false },
		{ id: 2, task: 'Wash the cat', completed: true }
	];
	const { todos, addTodo, editTodo, removeTodo, toggleTodo } = useTodoState(initialTodos);

	const [ value, handleChange ] = useInputState('All');
	const [ open, toggle ] = useToggleState(false);

	const classes = useStyles();

	return (
		<Paper className={classes.paper}>
			<CssBaseline />
			<Navbar value={value} handleChange={handleChange} open={open} toggle={toggle} />
			<Grid
				container
				justify="center"
				className={clsx(classes.grid, {
					[classes.gridShift]: open
				})}
			>
				<Grid item xs={11} md={8} lg={4}>
					<TodoForm addTodo={addTodo} />
					<TodoList
						todos={todos}
						removeTodo={removeTodo}
						editTodo={editTodo}
						toggleTodo={toggleTodo}
						value={value}
					/>
				</Grid>
			</Grid>
		</Paper>
	);
};

export default App;
