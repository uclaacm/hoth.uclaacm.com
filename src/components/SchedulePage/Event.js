import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
	name: {
		fontFamily: theme.typography.fontFamily,
		color: theme.palette.secondary.main,
		fontWeight: 'bold',
		textTransform: 'uppercase'
	},
	location: {
		fontFamily: theme.typography.fontFamily,
		fontWeight: theme.typography.fontWeightMedium
	},
	description: {
		fontFamily: theme.typography.fontFamily
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
				<Typography variant='subtitle1' className={classes.name}>
					{name}
				</Typography>
				<Typography variant='body1' className={classes.location}>
					{location}
				</Typography>
			</Grid>
			<Grid item sm={12} md={8}>
				<Typography variant='body1' className={classes.description}>
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
