import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TimeSlot from '../SchedulePage/Timeslot';

const testEvents = [
	{
		name: 'ACM Hack Does a Back Flip',
		location: 'Bolter Hall',
		// eslint-disable-next-line no-multi-str
		description: 'Tim Gu is very athletic and will demonstrate multiple back flipping techniques.\
		Come by to learn about back flips and their history.',
		time: Date(2020, 4, 19, 10, 30)
	},
	{
		name: 'UWU',
		location: 'Bolter Hall',
		// eslint-disable-next-line no-multi-str
		description: 'owowowowowowowowowowowo',
		time: Date(2020, 4, 19, 10, 30)
	},
	{
		name: 'NYEP',
		location: 'Bolter Hall',
		// eslint-disable-next-line no-multi-str
		description: 'Nwawawawaw',
		time: Date(2020, 4, 19, 11, 30)
	}
];

const styles = theme => ({
	title: {
		fontFamily: theme.typography.fontFamily,
		fontWeight: 'bold',
		paddingBottom: 16
	}
});

const SchedulePage = ({ classes }) => {
	return <>
		<Typography align='center' variant='h4' className={classes.title}>Schedule</Typography>
		<TimeSlot events={testEvents} time="1:30 P.M."/>
	</>;
};

SchedulePage.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SchedulePage);
