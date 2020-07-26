import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Event from '../SchedulePage/Event';
import ScheduleRoundedIcon from '@material-ui/icons/ScheduleRounded';
import Box from '@material-ui/core/Box';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';

const useStyles = makeStyles(theme => {
	return {
		clockImage: {
			marginTop: '1px',
			marginBottom: '1px',
			marginRight: '4px'
		},
		timeContainer: {
			display: 'flex'
		},
		timeSlotHeader: {
			backgroundColor: '#fafafa',
			color: 'rgba(0,0,0)',
			top: '56px',
			[theme.breakpoints.up('sm')]: {
				top: '64px'
			}
		},
		eventItem: {
			marginLeft: '20px' // width + margin of svg
		}
	};
});

const timeFormatter = new Intl.DateTimeFormat('en-US', { timeStyle: 'short', hour: 'numeric', minute: '2-digit' });

function StickyTimeslot({ time, events }) {
	const classes = useStyles();
	return (
		<>
			<ListSubheader className={classes.timeSlotHeader}>
				<Box display='flex'>
					<ScheduleRoundedIcon fontSize={'small'} className={classes.clockImage} />
					<Typography component='h2'>
						<time dateTime={time.toISOString()}>{timeFormatter.format(time)}</time>
					</Typography>
				</Box>
			</ListSubheader>
			{events.map(event => {
				return <ListItem key={event.name} className={classes.eventItem}>
					<Event {...event} />
				</ListItem>;
			})}
		</>
	);
}

StickyTimeslot.propTypes = {
	time: PropTypes.object.isRequired,
	events: PropTypes.array.isRequired
};

export default StickyTimeslot;
