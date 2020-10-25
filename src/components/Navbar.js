import React from 'react';
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

import { FILTERED_KEYS, DRAWER_WIDTH } from '../variables';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex'
	},
	appBar: {
		transition: theme.transitions.create([ 'margin', 'width' ], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		}),
		height: '10vh',
		backgroundColor: '#81c784'
	},
	appBarShift: {
		width: `calc(100% - ${DRAWER_WIDTH}px)`,
		marginLeft: DRAWER_WIDTH,
		transition: theme.transitions.create([ 'margin', 'width' ], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen
		})
	},
	menuButton: {
		marginRight: theme.spacing(2)
	},
	hide: {
		display: 'none'
	},
	drawer: {
		width: DRAWER_WIDTH,
		flexShrink: 0
	},
	drawerPaper: {
		width: DRAWER_WIDTH
	},
	drawerHeader: {
		display: 'flex',
		alignItems: 'center',
		padding: theme.spacing(0, 1),
		// necessary for content to be below app bar
		...theme.mixins.toolbar,
		justifyContent: 'flex-end'
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		}),
		marginTop: '2em'
	}
}));

const Navbar = ({ value, handleChange, open, toggle }) => {
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

export default Navbar;
