import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
	name: {
		color: theme.palette.secondary.main,
		fontWeight: 'bold',
		textTransform: 'uppercase'
	},
	location: {
		fontWeight: theme.typography.fontWeightMedium
	},
	container: {
		paddingBottom: 12
	}
}));

function Event({ name, location, description }) {
	const classes = useStyles();
	return (
		<Grid container spacing={1} className={classes.container}>
			<Grid item sm={12} md={4}>
				<Typography component='h3' variant='subtitle1' className={classes.name}>
					{name}
				</Typography>
				<Typography variant='body2' className={classes.location}>
					{location}
				</Typography>
			</Grid>
			<Grid item sm={12} md={8}>
				<Typography variant='body1'>
					{description}
				</Typography>
			</Grid>
		</Grid>
	);
}

Event.propTypes = {
	name: PropTypes.string.isRequired,
	location: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired
};

export default Event;
