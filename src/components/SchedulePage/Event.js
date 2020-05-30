import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import { Typography } from '@material-ui/core';

const styles = theme => ({
	eventName: {
		fontFamily: theme.typography.fontFamily,
		color: theme.palette.secondary.main,
		fontWeight: 'bold',
		textTransform: 'uppercase'
	},
	eventLocation: {
		fontFamily: theme.typography.fontFamily,
		fontWeight: theme.typography.fontWeightMedium
	}
});

function Event(props) {
	return (
		<Container maxWidth="md">
			<Grid container spacing={1}>
				<Grid item xs={12} sm={12} md={4}>
					<Typography variant='subtitle1' className={props.classes.eventName}>
						{props.eventName}
					</Typography>
					<Typography variant='body1' className={props.classes.eventLocation}>
						{props.eventLocation}
					</Typography>
				</Grid>
				<Grid item xs={12} sm={12} md={8}>
					<Typography variant='body1'>
						{props.eventDescription}
					</Typography>
				</Grid>
			</Grid>
		</Container>
	);
}

Event.propTypes = {
	classes: PropTypes.object.isRequired,
	eventName: PropTypes.string.isRequired,
	eventLocation: PropTypes.string.isRequired,
	eventDescription: PropTypes.string.isRequired
};

export default withStyles(styles)(Event);
