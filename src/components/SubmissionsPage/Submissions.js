import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

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
	link: {
		color: theme.palette.secondary.main
	},
	linkClicked: {
		color: theme.palette.secondary.dark
	}
}));

const SubmissionsPage = () => {
	const classes = useStyles();

	const [formClicked, setFormClicked] = useState(false);
	const [devPostClicked, setDevPostClicked] = useState(false);

	const handleFormClick = () => {
		setFormClicked(true);
	};

	const handleDevPostClick = () => {
		setDevPostClicked(true);
	};

	return (
		<Container maxWidth="md">
			<Typography
				align="left"
				variant="h4"
				component="h1"
				className={classes.title}
			>
				Submission Info
			</Typography>

			<Typography align="left" variant="h5" component="h2">
				Follow These 2 Final Steps to Submit Your Project:
			</Typography>

			<Typography className={classes.info}>
				1{')'} Submit the project on the HOTH XI{' '}
				<Link
					href="https://hoth-xi.devpost.com/?ref_feature=challenge&ref_medium=discover"
					target="_blank"
					className={devPostClicked ? classes.linkClicked : classes.link}
					onClick={handleDevPostClick}
					rel="noopener noreferrer"
				>
					Devpost
				</Link>
			</Typography>

			<Typography className={classes.info}>
				2{')'} Fill out the HOTH XI{' '}
				<Link
					href="https://forms.gle/VPBHtLTyPo1pn7pn9"
					target="_blank"
					className={formClicked ? classes.linkClicked : classes.link}
					onClick={handleFormClick}
					rel="noopener noreferrer"
				>
					Submission Google Form
				</Link>
			</Typography>

			<Typography
				className={classes.info}
				align="left"
				variant="h6"
				component="h3"
			>
				Thank You for Participating in HOTH XI!
			</Typography>
		</Container>
	);
};

export default SubmissionsPage;
