import React from 'react';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles({
	title: {
		textAlign: 'center',
		margin: '60px 10px 30px',
		fontSize: '2em',
		fontWeight: 700
	},
	lastYear: {
		textAlign: 'center',
		margin: '20px 10px',
		fontSize: '2em',
		fontWeight: 700
	},
	wrench: {
		width: '40px',
		marginTop: '30px'
	}
});

export default function PrizeHeader() {
	const classes = useStyles();

	return (
		<>
			<Typography variant='h3' component='h2' className={classes.title}>
				Prize Announcements Coming Soon!
			</Typography>
			<Typography variant='h3' component='h2' className={classes.lastYear}>
				This Year’s Prizes:
			</Typography>
		</>
	);
}
