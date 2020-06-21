import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
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
});

function Event({ classes, name, location, description }) {
	return (
		<Container maxWidth="md">
			<Grid container spacing={1} className={classes.container}>
				<Grid item xs={12} sm={12} md={4}>
					<Typography variant='subtitle1' className={classes.name}>
						{name}
					</Typography>
					<Typography variant='body1' className={classes.location}>
						{location}
					</Typography>
				</Grid>
				<Grid item xs={12} sm={12} md={8}>
					<Typography variant='body1' className={classes.description}>
						{description}
					</Typography>
				</Grid>
			</Grid>
		</Container>
	);
}

Event.propTypes = {
	classes: PropTypes.object.isRequired,
	name: PropTypes.string.isRequired,
	location: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired
};

export default withStyles(styles)(Event);
