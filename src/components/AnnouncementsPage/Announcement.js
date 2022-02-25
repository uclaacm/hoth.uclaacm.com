import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
	subject: {
		color: theme.palette.primary.main,
		fontWeight: theme.typography.fontWeightBold,
		paddingTop: theme.spacing(4)
	},
	timestamp: {
		color: theme.palette.secondary.light
	},
	body: {
		paddingBottom: theme.spacing(4),
		whiteSpace: 'pre-line'
	}
}));

function Announcement({ subject, timestamp, body }) {
	const classes = useStyles();

	const d = new Date(timestamp);
	const date = d.toLocaleDateString('en-US');
	const time = d.toLocaleTimeString('en-US');

	return (
		<Container>
			<Typography variant='h5' component='h2' className={classes.subject}>
				{subject}
			</Typography>
			<Typography variant='subtitle1' component='subtitle' className={classes.timestamp}>
                Posted on {date} at {time} PST
			</Typography>
			<Typography variant='body2' component='body' className={classes.body}>
				{body.trim()}
			</Typography>
		</Container>
	);
}

export default Announcement;

Announcement.propTypes = {
	subject: PropTypes.string,
	timestamp: PropTypes.string,
	body: PropTypes.string
};
