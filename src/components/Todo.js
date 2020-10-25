import React, { Fragment, useContext, memo } from 'react';
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

import { DispatchContext } from '../context/todo.context';

import { TOGGLE_TODO, REMOVE_TODO } from '../reducers/types';

import styles from './styles/TodoStyles';

const useStyles = makeStyles(styles);

const Todo = ({ id, task, completed }) => {
	const dispatch = useContext(DispatchContext);

	const [ isEdit, toggle ] = useToggleState(false);

	const classes = useStyles();

	const handleDelete = () => {
		dispatch({ type: REMOVE_TODO, id });
	};
	const handleToggle = () => {
		dispatch({ type: TOGGLE_TODO, id });
	};

	const todoItem = isEdit ? (
		<EditTodoForm id={id} task={task} toggle={toggle} />
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
	);
	return (
		<ListItem component="div" className={classes.item}>
			{todoItem}
		</ListItem>
	);
};

export default memo(Todo);
