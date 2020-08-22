import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
	name: {
		color: theme.palette.secondary.main,
		fontWeight: 'bold',
		textTransform: 'uppercase'
	},
	subtitle: {
		fontWeight: theme.typography.fontWeightMedium,
		color: '#858585',
		display: 'flex',
		alignItems: 'center',
		marginTop: '1ex',
		'& > :nth-child(1)': {
			marginRight: '1.5em',
			fontSize: '1.1em' // up for debate
		}
	},
	description: {
		fontSize: '1em',
		[theme.breakpoints.up('md')]: {
			paddingLeft: '2.75em'
		}
	}
}));

function Event({ startTime, name, location, description }) {
	const classes = useStyles();
	return (
		<Grid container spacing={1}>
			<Grid item sm={12} md={4}>
				<Typography component='h3' variant='subtitle1' className={classes.name}>
					{name}
				</Typography>
				<Box className={classes.subtitle}>
					<Typography variant='body2'>
						{startTime}
					</Typography>
					<Typography variant='body2' >
						{location}
					</Typography>
				</Box>
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
	startTime: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	location: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired
};

export default Event;
