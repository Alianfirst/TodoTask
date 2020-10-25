import React, { useContext, memo } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import { ValueContext } from '../context/value.context';

import { FILTERED_KEYS } from '../variables';

import styles from './styles/NavbarStyles';

const useStyles = makeStyles(styles);

const Navbar = ({ open, toggle }) => {
	const { value, handleChange } = useContext(ValueContext);

	const classes = useStyles();

	return (
		<div className={classes.root}>
			<CssBaseline />
			<AppBar
				position="static"
				className={clsx(classes.appBar, {
					[classes.appBarShift]: open
				})}
			>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						onClick={toggle}
						edge="start"
						className={clsx(classes.menuButton, open && classes.hide)}
					>
						<ChevronRightIcon />
					</IconButton>
					<Typography variant="h6" noWrap>
						Todo App
					</Typography>
				</Toolbar>
			</AppBar>
			<Drawer
				className={classes.drawer}
				variant="persistent"
				anchor="left"
				open={open}
				classes={{
					paper: classes.drawerPaper
				}}
			>
				<div className={classes.drawerHeader}>
					<IconButton onClick={toggle}>
						<ChevronLeftIcon />
					</IconButton>
				</div>
				<Divider />
				<FormControl component="fieldset" className={classes.content}>
					<FormLabel component="legend">Filter Todos By:</FormLabel>
					<RadioGroup aria-label="filter" name="value" value={value} onChange={handleChange}>
						{FILTERED_KEYS.map((key) => (
							<FormControlLabel value={key} control={<Radio />} label={key} key={key} />
						))}
					</RadioGroup>
				</FormControl>
			</Drawer>
		</div>
	);
};

export default memo(Navbar);
