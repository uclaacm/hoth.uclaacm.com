import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
// import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import data from '../../data/announcements.json';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Collapse from '@material-ui/core/Collapse';
// import { borders } from '@material-ui/system';

import ClearIcon from '@material-ui/icons/Clear';
import IconButton from '@material-ui/core/IconButton';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const useStyles = makeStyles(theme => ({
	subject: {
		color: theme.palette.primary.main,
		fontWeight: theme.typography.fontWeightBold,
		textAlign: 'left'
	},
	container: {
		paddingTop: theme.spacing(1),
		paddingBottom: theme.spacing(1)
	},
	date: {
		color: theme.palette.secondary.light,
		textAlign: 'right'
	},
	heading: {
		paddingTop: theme.spacing(2),
		paddingBottom: theme.spacing(2),
		textAlign: 'left'
	},
	body: {
		paddingBottom: theme.spacing(2),
		textAlign: 'left'
	},
	icon: {
		padding: theme.spacing(2),
		textAlign: 'right',
		fontSize: '56px'
	},
	border: {
		border: 10,
		padding: theme.spacing(2),
		borderColor: theme.palette.primary.main,
		borderRadius: 16
	},
	link: {
		textDecoration: 'none',
		textAlign: 'center'
	},
	box: {
		justifyItems: 'center',
		textAlign: 'center',
		paddingBottom: theme.spacing(1)
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

function HomeAnnouncement({ subject, timestamp, body }) {
	const classes = useStyles();
	const d = new Date(timestamp);
	const date = d.toLocaleDateString('en-US');
	const time = d.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

	return (
		<Grid container direction='column' justify='space-between'>
			<Grid item>
				<Grid container justify='space-between' alignItems='center'>
					<Grid item>
						<Typography variant='subtitle1' className={classes.subject}>
							{subject}
						</Typography>
					</Grid>
					<Grid item>
						<Typography variant='subtitle2' className={classes.date}>
							{date}, {time}
						</Typography>
					</Grid>
				</Grid>
				<Grid item>
					<Typography variant='body2' className={classes.body}>
						{body}
					</Typography>
				</Grid>
			</Grid>
			<Grid item>
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
	);
}

HomeAnnouncement.propTypes = {
	subject: PropTypes.string,
	timestamp: PropTypes.string,
	body: PropTypes.string
};

export default function HomeAnnouncements() {
	const classes = useStyles();
	const announcement = data[0];
	const [dismissed, changeVisibility] = useState(0);

	return (
		<Container maxWidth='lg'>
			{data.length === 0 ?
				null :
				<>
					<Collapse in={!dismissed} timeout={400}>
						<Grid container direction='column' justify='space-between'>
							<Grid container direction='row' justify='space-between' alignItems='center'>
								<Grid item>
									<Typography variant='h5' component='h1' className={classes.heading}>
										Announcement
									</Typography>
								</Grid>
								<Grid item>
									<IconButton className={classes.icon} onClick={() => changeVisibility(a => !a)}>
										<ClearIcon />
									</IconButton>
								</Grid>
							</Grid>
							<Grid item>
								<HomeAnnouncement
									key={announcement.id}
									subject={announcement.subject}
									timestamp={announcement.timestamp}
									body={announcement.body}
								/>
							</Grid>
						</Grid>
					</Collapse>
				</>}
		</Container>
	);
}
