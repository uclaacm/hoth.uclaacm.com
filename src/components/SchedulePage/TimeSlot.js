import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Event from '../SchedulePage/Event';
import ScheduleRoundedIcon from '@material-ui/icons/ScheduleRounded';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
	clockImage: {
		marginTop: '1px',
		marginBottom: '1px',
		marginRight: '4px'
	},
	timeContainer: {
		display: 'flex'
	}
});

const timeFormatter = new Intl.DateTimeFormat('en-US', { timeStyle: 'short', hour: 'numeric', minute: '2-digit' });

function Timeslot({ time, events }) {
	const classes = useStyles();
	return (
		<>
			<Divider />
			<Box display='flex'>
				<ScheduleRoundedIcon fontSize={'small'} className={classes.clockImage} />
				<div>
					<Typography component='h2'>
						<time dateTime={time.toISOString()}>{timeFormatter.format(time)}</time>
					</Typography>
					{events.map(event => {
						return <Event {...event} key={event.name} />;
					})}
				</div>
			</Box>
		</>
	);
}

Timeslot.propTypes = {
	time: PropTypes.object.isRequired,
	events: PropTypes.array.isRequired
};

export default Timeslot;
