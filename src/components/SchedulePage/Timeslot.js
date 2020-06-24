import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
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
	}
}));

const formatTime = time => {
	let hours = time.getHours();
	let minutes = time.getMinutes();
	const ampm = hours >= 12 ? 'PM' : 'AM';
	hours %= 12;
	hours = hours ? hours : 12; // the hour '0' should be '12'
	minutes = minutes < 10 ? '0' + minutes : minutes;
	const strTime = hours + ':' + minutes + ' ' + ampm;
	return strTime;
};

function Timeslot({ time, events }) {
	const classes = useStyles();
	return (
		<Container maxWidth="md">
			<Grid container spacing={1}>
				<Grid item xs={12}>
					<Divider />
					<div className={classes.timeContainer}>
						<ScheduleRoundedIcon fontSize={'small'} className={classes.clockImage}/>
						<Typography className={classes.time}>{formatTime(time)}</Typography>
					</div>
					{events.map(event => {
						return <Event {...event} key={event.name}/>;
					})}
				</Grid>
			</Grid>
		</Container>
	);
}

Timeslot.propTypes = {
	time: PropTypes.string.isRequired,
	events: PropTypes.array.isRequired
};

export default Timeslot;
