import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Event from '../HomePage/Event';
import ScheduleRoundedIcon from '@material-ui/icons/ScheduleRounded';
import Box from '@material-ui/core/Box';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import { getTimeZoneWithFormat } from '../../utils/timezone_names.js';

const useStyles = makeStyles(theme => {
	return {
		ul: {
			padding: 0
		},
		clockImage: {
			marginLeft: '-8px',
			marginRight: '4px'
		},
		timeSlotHeader: {
			backgroundColor: '#fafafa',
			color: 'black',
			top: '56px',
			[theme.breakpoints.up('sm')]: {
				top: '64px'
			}
		},
		eventItem: {
			marginTop: theme.spacing(2),
			marginBottom: theme.spacing(6),
			marginLeft: '20px' // width + margin of svg
		}
	};
});

const timeFormatter = new Intl.DateTimeFormat('en-US', { hour: 'numeric', minute: '2-digit' });

function StickyTimeslot({ time, events }) {
	const classes = useStyles();
	return (
		<ul className={classes.ul}>
			<ListSubheader className={classes.timeSlotHeader}>
				<Box display='flex' alignItems='center'>
					<ScheduleRoundedIcon fontSize='small' className={classes.clockImage} />
					<Typography component='h2'>
						<time dateTime={time.toISOString()}>{timeFormatter.format(time)}</time>
						<Box color='gray' component='span'>
							{' '}
							{getTimeZoneWithFormat(time, 'short')}
						</Box>
					</Typography>
				</Box>
			</ListSubheader>
			{events.map(event => {
				return <ListItem key={event.name} className={classes.eventItem}>
					<Event
						name={event.name}
						subtitles={[event.duration, event.location]}
						description={event.description}
					/>
				</ListItem>;
			})}
		</ul>
	);
}

StickyTimeslot.propTypes = {
	time: PropTypes.object.isRequired,
	events: PropTypes.array.isRequired
};

export default StickyTimeslot;
