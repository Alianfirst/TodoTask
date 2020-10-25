import React, { useContext } from 'react';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import useInputState from '../hooks/useInputState';

import { DispatchContext } from '../context/todo.context';

import { ADD_TODO } from '../reducers/types';

import styles from './styles/TodoFormStyles';

const useStyles = makeStyles(styles);

const TodoForm = () => {
	const dispatch = useContext(DispatchContext);

	const [ input, handleChange, reset ] = useInputState('');

	const classes = useStyles();

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch({ type: ADD_TODO, newTask: input });
		reset();
	};
	return (
		<Paper className={classes.paper}>
			<form onSubmit={handleSubmit} noValidate autoComplete="off">
				<TextField
					value={input}
					label="Add New Todo"
					variant="outlined"
					onChange={handleChange}
					fullWidth
					margin="none"
				/>
			</form>
		</Paper>
	);
};

export default TodoForm;
