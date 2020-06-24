import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Event from '../SchedulePage/Event';
import ScheduleRoundedIcon from '@material-ui/icons/ScheduleRounded';

const useStyles = makeStyles(theme => ({
	time: {
		fontFamily: theme.typography.fontFamily,
		marginLeft: 4
	},
	timeContainer: {
		display: 'flex',
		alignItems: 'center'
	},
	timeSlot: {
		paddingLeft: '16px',
		paddingRight: '16px',
		[theme.breakpoints.up('md')]: {
			width: theme.breakpoints.values.md,
			marginLeft: 'auto',
			marginRight: 'auto'
		}
	}
}));

const timeFormatter = new Intl.DateTimeFormat('en-US', { timeStyle: 'short' });

function Timeslot({ time, events }) {
	const classes = useStyles();
	return (
		<div className={classes.timeSlot}>
			<Divider />
			<div className={classes.timeContainer}>
				<ScheduleRoundedIcon fontSize={'inherit'} className={classes.clockImage}/>
				<Typography className={classes.time}>{timeFormatter.format(time)}</Typography>
			</div>
			{events.map(event => {
				return <Event {...event} key={event.name}/>;
			})}
		</div>
	);
}

Timeslot.propTypes = {
	time: PropTypes.object.isRequired,
	events: PropTypes.array.isRequired
};

export default Timeslot;
