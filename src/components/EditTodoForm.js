import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import useInputState from '../hooks/useInputState';

const useStyles = makeStyles({
	editForm: {
		width: '100%'
	}
});

const EditTodoForm = ({ id, task, editTodo, toggle }) => {
	const [ input, handleChange ] = useInputState(task);

	const classes = useStyles();

	const handleSubmit = (e) => {
		e.preventDefault();
		editTodo(id, input);
		toggle();
	};
	return (
		<form onSubmit={handleSubmit} className={classes.editForm}>
			<TextField
				fullWidth
				autoFocus
				value={input}
				onChange={handleChange}
				label="Edit Field"
				variant="outlined"
			/>
		</form>
	);
};

export default EditTodoForm;
