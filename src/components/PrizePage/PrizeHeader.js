import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	title: {
		fontWeight: theme.typography.fontWeightBold,
		paddingTop: theme.spacing(11),
		[theme.breakpoints.down('sm')]: {
			paddingTop: theme.spacing(4)
		},
		paddingBottom: theme.spacing(4)
	}
}));

export default function PrizeHeader() {
	const classes = useStyles();
	return (
		<Container maxWidth='md'>
			<Typography variant='h4' component='h1' className={classes.title}>
				Prize Tracks
			</Typography>
		</Container>
	);
}
