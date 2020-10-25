import React, { Fragment, useContext } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, List } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

import Todo from './Todo';

import { ValueContext } from '../context/value.context';

import { FILTERED_DATA } from '../variables';

import styles from './styles/TodoListStyles';

const useStyles = makeStyles(styles);

const TodoList = ({ todos }) => {
	const { value } = useContext(ValueContext);
	const classes = useStyles();
	const todoList = todos.length ? (
		<Paper>
			<List className={classes.listStyle}>
				{todos.filter(FILTERED_DATA[value]).map((todo, index) => (
					<Fragment key={todo.id}>
						<Todo {...todo} />
						{index < todos.length - 1 && <Divider />}
					</Fragment>
				))}
			</List>
		</Paper>
	) : (
		<Typography variant="h6" noWrap>
			No Todos Yet:(
		</Typography>
	);
	return todoList;
};

const mapStateToProps = (state) => {
	return { todos: state.todos };
};

export default connect(mapStateToProps)(TodoList);
