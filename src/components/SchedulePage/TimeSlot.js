import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
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
		}
	};
});

const timeFormatter = new Intl.DateTimeFormat('en-US', { timeStyle: 'short', hour: 'numeric', minute: '2-digit' });

function Timeslot({ time, events }) {
	const classes = useStyles();
	return (
		<>
			<ListSubheader className={classes.timeSlotHeader}>
				<Divider />
				<Box display='flex'>
					<ScheduleRoundedIcon fontSize={'small'} className={classes.clockImage} />
					<Typography component='h2'>
						<time dateTime={time.toISOString()}>{timeFormatter.format(time)}</time>
					</Typography>
				</Box>
				{/* <Divider /> */}
			</ListSubheader>
			{events.map(event => {
				return <ListItem key={event.name}>
					<Event {...event} />
				</ListItem>;
			})}
		</>
	);
}

Timeslot.propTypes = {
	time: PropTypes.object.isRequired,
	events: PropTypes.array.isRequired
};

export default Timeslot;
