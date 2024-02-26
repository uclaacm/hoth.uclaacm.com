import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Link } from 'gatsby';

const useStyles = makeStyles(theme => ({
	title: {
		fontWeight: theme.typography.fontWeightBold,
		paddingTop: theme.spacing(11),
		[theme.breakpoints.down('sm')]: {
			paddingTop: theme.spacing(4)
		},
		paddingBottom: theme.spacing(4)
	},
	info: {
		paddingTop: theme.spacing(4)

	},
	divider: {
		height: '2px',
		marginLeft: theme.spacing(4),
		marginRight: theme.spacing(4),
		marginBottom: theme.spacing(4)
	}
}));


const SubmissionsPage = () => {
	const classes = useStyles();
	return <Container maxWidth='md'>
		<Typography align='left' variant='h4' component='h1' className={classes.title}>
			Submission Info
		</Typography>

		<Typography align='left' variant='h5' component='h2'>
			Thank You for Participating in HOTH XI!
		</Typography>

		<Typography align='left' variant='h5' component='h2'>
			Follow These 2 Final Steps to Submit Your Project:
		</Typography>

		<Typography className={classes.info}>
			1{')'} Submit the project on the HOTH XI {' '}
			<Link to='https://hoth-xi.devpost.com/?ref_feature=challenge&ref_medium=discover'>devpost</Link>
		</Typography>

		<Typography className={classes.info}>
			2{')'} Fill out the {' '}
			<Link to='https://forms.gle/VPBHtLTyPo1pn7pn9'>HOTH XI Submission Form</Link>
		</Typography>
	</Container>;
};

export default SubmissionsPage;
