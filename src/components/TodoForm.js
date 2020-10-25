import React from 'react';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import useInputState from '../hooks/useInputState';

const useStyles = makeStyles({
	paper: {
		margin: '1rem 0'
	}
});

const TodoForm = ({ addTodo }) => {
	const [ input, handleChange, reset ] = useInputState('');

	const classes = useStyles();

	const handleSubmit = (e) => {
		e.preventDefault();
		addTodo(input);
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
