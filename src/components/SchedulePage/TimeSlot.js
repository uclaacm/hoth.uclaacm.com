import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Event from '../SchedulePage/Event';
import ScheduleRoundedIcon from '@material-ui/icons/ScheduleRounded';
import Box from '@material-ui/core/Box';
import { currentTimeZoneShort } from './timezone_names.js';

const timeFormatter = new Intl.DateTimeFormat('en-US', { hour: 'numeric', minute: '2-digit' });

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

function Timeslot({ time, events }) {
	const classes = useStyles();
	timeFormatter.formatToParts(time);
	return (
		<>
			<Divider />
			<Box display='flex'>
				<ScheduleRoundedIcon fontSize={'small'} className={classes.clockImage} />
				<div>
					<Typography component='h2'>
						<time dateTime={time.toISOString()}>
							{timeFormatter.format(time).toString()}
							<Box color='gray' component='span'>
								{' '}
								{currentTimeZoneShort.value}
							</Box>
						</time>
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
