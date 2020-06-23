import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Event from '../SchedulePage/Event';

const styles = theme => ({
	time: {
		fontFamily: theme.typography.fontFamily
	}
});

function Timeslot({ classes, time, events }) {
	return (
		<Container maxWidth="md">
			<Grid container spacing={1}>
				<Grid item xs={12}>
					<Divider />
					<Typography className={classes.time}>{time}</Typography>
					{events.map(event => {
						return <Event {...event} key={event.name}/>;
					})}
				</Grid>
			</Grid>
		</Container>
	);
}

Timeslot.propTypes = {
	classes: PropTypes.object.isRequired,
	time: PropTypes.string.isRequired,
	events: PropTypes.array.isRequired
};

export default withStyles(styles)(Timeslot);
