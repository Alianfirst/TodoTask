import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import TodoForm from './TodoForm';
import TodoList from './TodoList';
import Navbar from './Navbar';

import useInputState from '../hooks/useInputState';
import useToggleState from '../hooks/useToggleState';

import { TodoProvider } from '../context/todo.context';
import { ValueProvider } from '../context/value.context';

import styles from './styles/AppStyles';

const useStyles = makeStyles(styles);

const App = () => {
	const [ value, handleChange ] = useInputState('All');
	const [ open, toggle ] = useToggleState(false);

	const classes = useStyles();

	return (
		<Paper className={classes.paper}>
			<CssBaseline />
			<ValueProvider>
				<Navbar value={value} handleChange={handleChange} open={open} toggle={toggle} />
				<Grid
					container
					justify="center"
					className={clsx(classes.grid, {
						[classes.gridShift]: open
					})}
				>
					<Grid item xs={11} md={8} lg={4}>
						<TodoProvider>
							<TodoForm />
							<TodoList value={value} />
						</TodoProvider>
					</Grid>
				</Grid>
			</ValueProvider>
		</Paper>
	);
};

export default App;
