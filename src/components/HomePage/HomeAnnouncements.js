import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import data from '../../data/announcements.json';
import { Link } from 'gatsby';

import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const useStyles = makeStyles(theme => ({
	subject: {
		color: theme.palette.primary.main,
		fontWeight: theme.typography.fontWeightBold,
		paddingTop: theme.spacing(1),
		textAlign: 'left',
	},
	date: {
		color: theme.palette.secondary.light,
		textAlign: 'center',
		paddingTop: theme.spacing(1),
		paddingBottom: theme.spacing(1)
	},
	heading: {
		paddingTop: theme.spacing(4),
		textAlign: 'left'
	},
	body: {
		paddingTop: theme.spacing(1),
		paddingBottom: theme.spacing(4),
		textAlign: 'left'
	},
	link: {
		textDecoration: 'none'
	},
	box: {
		justifyItems: 'center',
		textAlign: 'center',
		paddingBottom: theme.spacing(4)
	},
	arrow: {
		fontSize: '14px'
	},
	allAnnouncements: {
		width: 'auto',
		color: '#C960FF',
		textAlign: 'center',
		textDecoration: 'none',
		fontSize: '14px',
		justifyItems: 'center',
		fontWeight: 400,
		margin: '5px 0px',
		padding: '2px 1em',
		maxWidth: 'fit-content',
		border: '2px solid #C960FF',
		'&:hover': {
			color: '#FFFFFF',
			background: '#DB99FD'
		},
		[theme.breakpoints.down('sm')]: {
			maxWidth: '100%'
		}
	}
}));

function HomeAnnouncement({ subject, timestamp, body}) {
	const classes = useStyles();
	const d = new Date(timestamp);
	const date = d.toLocaleDateString('en-US');

	return (
		<Container>
			<Grid container direction='column'>
				<Grid container direction='row' justifyContent='space-between'>
					<Grid item xs={9}>
						<Typography variant='subtitle1' className={classes.subject}>
							{subject}
						</Typography>
					</Grid>
					<Grid item xs={3}>
						<Typography variant='subtitle2' className={classes.date}>
							Posted on {date}
						</Typography>
					</Grid>
				</Grid>
				<Grid container direction='row' justifyContent='space-between' alignItems='center'>
					<Grid item xs={9}>
							<Typography variant='body2' className={classes.body}>
								{body}
							</Typography>
					</Grid>
					<Grid item
						className={classes.box}
						xs={3}
						justifyContent='right'
					>
						<Link
							to='/announcements'
							className={classes.link}
						>
							<Button
								className={classes.allAnnouncements}
								target='_blank'
							>
								See All
								<ArrowForwardIosIcon className={classes.arrow}></ArrowForwardIosIcon>
							</Button>
						</Link>
					</Grid>
				</Grid>
			</Grid>
			
		</Container>
	)
}

export default function HomeAnnouncements() {
	const classes = useStyles();
	const announcement = data[0];
	const [dismissed, changeVisibility] = useState(0);

	return (
		<Container maxWidth='md'>
			{data.length === 0 ?
				null :
				<>
					<Typography variant='h5' component='h1' className={classes.heading}>
						Announcement:
					</Typography>
					<HomeAnnouncement
						key={announcement.id}
						subject={announcement.subject}
						timestamp={announcement.timestamp}
						body={announcement.body}
					/>
				</>}
		</Container>
	);
}
