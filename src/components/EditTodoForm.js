import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import useInputState from '../hooks/useInputState';

import { DispatchContext } from '../context/todo.context';

import { EDIT_TODO } from '../reducers/types';

import styles from './styles/EditTodoFormStyles';

const useStyles = makeStyles(styles);

const EditTodoForm = ({ id, task, toggle }) => {
	const dispatch = useContext(DispatchContext);

	const [ input, handleChange ] = useInputState(task);

	const classes = useStyles();

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch({ type: EDIT_TODO, newTask: input, id });
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
