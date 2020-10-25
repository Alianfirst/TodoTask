import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import useInputState from '../hooks/useInputState';

import { editTodo } from '../actions';

import styles from './styles/EditTodoFormStyles';

const useStyles = makeStyles(styles);

const EditTodoForm = ({ id, task, toggle, editTodo }) => {
	const [ input, handleChange ] = useInputState(task);

	const classes = useStyles();

	const handleSubmit = (e) => {
		e.preventDefault();
		editTodo({ id, newTask: input });
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

const mapStateToProps = (state, ownProps) => {
	return {
		id: ownProps.id,
		task: ownProps.task,
		toggle: ownProps.toggle
	};
};

export default connect(mapStateToProps, { editTodo })(EditTodoForm);
