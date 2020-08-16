import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Event from '../SchedulePage/Event';
import ScheduleRoundedIcon from '@material-ui/icons/ScheduleRounded';
import Box from '@material-ui/core/Box';
import { currentTimeZoneShort } from '../../utils/timezone_names.js';

const timeFormatter = new Intl.DateTimeFormat('en-US', { hour: 'numeric', minute: '2-digit' });

const useStyles = makeStyles({
	clockImage: {
		marginTop: '1px',
		marginBottom: '1px',
		marginRight: '4px'
	}
});

function Timeslot({ time, events }) {
	const classes = useStyles();
	return (
		<Box display='flex'>
			<ScheduleRoundedIcon fontSize='small' className={classes.clockImage} />
			<div>
				<Typography component='h2' className={classes.time}>
					<time dateTime={time.toISOString()}>
						{timeFormatter.format(time)}
						<Box color='gray' component='span'>
							{' '}
							{currentTimeZoneShort}
						</Box>
					</time>
				</Typography>
				{events.map(event => {
					return <Event {...event} key={event.name} />;
				})}
			</div>
		</Box>
	);
}

Timeslot.propTypes = {
	time: PropTypes.object.isRequired,
	events: PropTypes.array.isRequired
};

export default Timeslot;
