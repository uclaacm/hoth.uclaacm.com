import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
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
		paddingBottom: theme.spacing(4)
	}
}));

function Announcement({ subject, timestamp, body }) {
	const classes = useStyles();

	return (
		<Container>
			<Typography variant='h4' component='h2' className={classes.subject}>
				{subject}
			</Typography>
			<Typography variant='h6' component='h3' className={classes.timestamp}>
                Posted on: {timestamp}
			</Typography>
			<Typography variant='h6' component='h4' className={classes.body}>
				{body}
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
