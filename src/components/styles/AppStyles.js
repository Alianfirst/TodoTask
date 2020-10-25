import { DRAWER_WIDTH } from '../../variables';

export default (theme) => ({
	paper: {
		margin: 0,
		padding: 0,
		height: '100vh'
	},
	appBar: {
		height: '10vh',
		backgroundColor: '#81c784'
	},
	grid: {
		marginTop: '1rem'
	},
	gridShift: {
		width: `calc(100% - ${DRAWER_WIDTH}px)`,
		marginLeft: DRAWER_WIDTH,
		transition: theme.transitions.create([ 'margin', 'width' ], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen
		})
	}
});
