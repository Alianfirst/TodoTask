import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, List } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

import Todo from './Todo';
import { FILTERED_DATA } from '../variables';

const useStyles = makeStyles({
	listStyle: {
		paddingTop: 0,
		paddingBottom: 0
	}
});

const TodoList = ({ todos, value, removeTodo, editTodo, toggleTodo }) => {
	const classes = useStyles();
	if (todos.length)
		return (
			<Paper>
				<List className={classes.listStyle}>
					{todos.filter(FILTERED_DATA[value]).map((todo, index) => (
						<Fragment key={todo.id}>
							<Todo {...todo} removeTodo={removeTodo} editTodo={editTodo} toggleTodo={toggleTodo} />
							{index < todos.length - 1 && <Divider />}
						</Fragment>
					))}
				</List>
			</Paper>
		);
	return (
		<Typography variant="h6" noWrap>
			No Todos Yet:(
		</Typography>
	);
};

export default TodoList;
