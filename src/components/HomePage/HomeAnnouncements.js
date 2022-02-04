import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Announcement from '../AnnouncementsPage/Announcement';
import data from '../../data/announcements.json';
import { Link } from 'gatsby';

const useStyles = makeStyles(theme => ({
	subject: {
		color: theme.palette.primary.main,
		fontWeight: theme.typography.fontWeightBold,
		paddingTop: theme.spacing(4)
	},
	timestamp: {
		color: theme.palette.secondary.light
	},
    heading: {
        paddingTop: theme.spacing(4),
        textAlign: 'center'
    },
	body: {
        paddingTop: theme.spacing(4),
		paddingBottom: theme.spacing(4)
	},
    link: {
        textDecoration: 'none'
    },
    box: {
        justifyItems: 'center',
        textAlign: 'center',
        paddingBottom: theme.spacing(4)
    },
    divider: {
        paddingTop: theme.spacing(0.25)
    },
    allAnnouncements: {
		width: 'auto',
		color: '#C960FF',
		textAlign: 'center',
        textDecoration: 'none',
		justifyItems: 'center',
		fontWeight: 400,
		margin: '10px 0px',
		padding: '4px 1.5em',
		maxWidth: 'fit-content',
		border: '2px solid #C960FF',
		'&:hover': {
			color: '#FFFFFF',
			background: '#DB99FD'
		},
		[theme.breakpoints.down('sm')]: {
			maxWidth: '100%'
		}
	},
}));

export default function HomeAnnouncements() {
	const classes = useStyles();
    const announcement = data[0];

	return (
		<Container maxWidth='md'>
			{data.length === 0 ?
				null :
				<>
                    <Divider/>
                    <Typography variant='h4' component='h1' className={classes.heading}>
                                Announcement:
                    </Typography>
                    </>}
				<>
                    <Announcement
                        key={announcement.id}
                        subject={announcement.subject}
                        timestamp={announcement.timestamp}
                        body={announcement.body}
                    />
                    <Box
                        className={classes.box}
                    >
                        <Link
                            to='/announcements'
                            className={classes.link}
                        >
                            <Button
                                className={classes.allAnnouncements}
                                target='_blank'
                            >
                                See all announcements
                            </Button>
                        </Link>
                    </Box>
                    <Divider/>
				</>
		</Container>
	);
}