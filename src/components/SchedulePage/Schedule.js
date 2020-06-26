import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TimeSlot from '../SchedulePage/TimeSlot';

const hothDate = '2021-02-23'; // replace with real date later
const utcOffset = '-08:00'; // PST
// time is a string of the form "HH:mm:ss"
function getDateObj(time) {
	return new Date(`${hothDate}T${time}${utcOffset}`);
}

const events = [
	{
		startTime: getDateObj('09:30:00'),
		events: [
			{
				name: 'ACM-W × ACM Hack | Hackathon 101 + Team Formation',
				location: 'Sycamore Room',
				description: `First hackathon? We’ll show you all the tips and tricks you’ll
				need to know to be successful and most importantly, have fun!`
			}
		]
	},
	{
		startTime: getDateObj('10:30:00'),
		events: [
			{
				name: 'Git and GitHub',
				location: 'De Neve Auditorium',
				description: `With multiple developers each working on
				a different feature of a project, bringing things together
				can get messy pretty easily. Come learn how to use Git to
				manage code across multiple collaborators and versions!`
			},
			{
				name: 'Intro to iOS',
				location: 'Sycamore Room',
				description: `Learn all about the fundamentals of iOS development
				by making a simple app in Swift and XCode!
				You must have a Mac to be able to code along in this workshop.`
			}
		]
	},
	{
		startTime: getDateObj('11:00:00'),
		events: [
			{
				name: 'Facebook | Zero to Hero with React Native',
				location: 'De Neve Auditorium ',
				description: `In this workshop we will learn how to quickly create a mobile app
				using React Native. We will be covering the React fundamentals (such as props
				and state) and apply them to quickly build a simple cross-platform app using
				React Native. This will be a hands-on workshop, so come in with the intent to hack!\
				If possible, come in with Node.js, Git, and a text editor of your choice installed already!`
			},
			{
				name: 'Intro to Web Dev: HTML and CSS',
				location: 'Sycamore Room',
				description: `Ever wanted to create and design your own website?
				Come learn about HTML and CSS, the basic components behind every
				website, and how you can use them to build unique and impressive web pages!`
			},
			{
				name: 'Intro to Android',
				location: 'De Neve Learning Center',
				description: `Learn all about the fundamentals of iOS development
				by making a simple app in Swift and XCode!
				You must have a Mac to be able to code along in this workshop.`
			}
		]
	}
];

const useStyles = makeStyles(theme => ({
	title: {
		fontFamily: theme.typography.fontFamily,
		fontWeight: 'bold',
		paddingTop: 24,
		paddingBottom: 16
	}
}));

const SchedulePage = () => {
	const classes = useStyles();
	return <Container maxWidth='md'>
		<Typography align='center' component='h1' variant='h4' className={classes.title}>Schedule</Typography>
		{events.map(timeslot => {
			return <TimeSlot events={timeslot.events}
				time={timeslot.startTime} key={timeslot.startTime} />;
		})}
	</Container>;
};

export default SchedulePage;
