import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItem';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

import useToggleState from '../hooks/useToggleState';
import EditTodoForm from './EditTodoForm';

const useStyles = makeStyles({
	item: {
		height: '5rem'
	}
});

const Todo = ({ id, task, completed, removeTodo, editTodo, toggleTodo }) => {
	const [ isEdit, toggle ] = useToggleState(false);

	const classes = useStyles();

	const handleDelete = () => {
		removeTodo(id);
	};
	const handleToggle = () => {
		toggleTodo(id);
	};
	return (
		<ListItem component="div" className={classes.item}>
			{isEdit ? (
				<EditTodoForm id={id} task={task} editTodo={editTodo} toggle={toggle} />
			) : (
				<Fragment>
					<Checkbox tabIndex={-1} disableRipple checked={completed} color="primary" onClick={handleToggle} />
					<ListItemText style={{ textDecoration: completed ? 'line-through' : 'none' }}>{task}</ListItemText>
					<ListItemSecondaryAction>
						<IconButton aria-label="Edit" onClick={toggle}>
							<EditIcon />
						</IconButton>
						<IconButton aria-label="Delete" onClick={handleDelete}>
							<DeleteIcon />
						</IconButton>
					</ListItemSecondaryAction>
				</Fragment>
			)}
		</ListItem>
	);
};

export default Todo;
