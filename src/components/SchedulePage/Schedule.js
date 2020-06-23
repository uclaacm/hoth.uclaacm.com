import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TimeSlot from '../SchedulePage/Timeslot';

// Must be ordered
const testEvents = [
	{
		name: 'ACM-W X ACM Hack | Hackathon 101 + Team Formation',
		location: 'Sycamore Room',
		// eslint-disable-next-line no-multi-str
		description: 'First hackathon? We’ll show you all the tips and tricks you’ll ' +
		'need to know to be successful and most importantly, have fun!',
		startTime: '9:30 AM'
	},
	{
		name: 'Git and Github',
		location: 'De Neve Auditorium',
		// eslint-disable-next-line no-multi-str
		description: 'With multiple developers each working on ' +
		'a different feature of a project, bringing things together ' +
		'can get messy pretty easily. Come learn how to use Git to ' +
		'manage code across multiple collaborators and versions!',
		startTime: '10:00 AM'
	},
	{
		name: 'INTRO TO IOS',
		location: 'Sycamore Room',
		// eslint-disable-next-line no-multi-str
		description: 'Learn all about the fundamentals of iOS development ' +
		'by making a simple app in Swift and XCode! ' +
		'You must have a Mac to be able to code along in this workshop.',
		startTime: '10:00 AM'
	},
	{
		name: 'FACEBOOK | ZERO TO HERO WITH REACT NATIVE',
		location: 'De Never Auditorium ',
		// eslint-disable-next-line no-multi-str
		description: 'In this workshop we will learn how to quickly create a mobile app' +
		'using React Native. We will be covering the React fundamentals (such as props' +
		'and state) and apply them to quickly build a simple cross-platform app using' +
		'React Native. This will be a hands-on workshop, so come in with the intent to hack!' +
		'If possible, come in with Node.js, Git, and a text editor of your choice installed already!',
		startTime: '11:00 AM'
	},
	{
		name: 'INTRO TO WEB DEV: HTML AND CSS',
		location: 'Sycamore Room',
		// eslint-disable-next-line no-multi-str
		description: 'Ever wanted to create and design your own website?' +
		'Come learn about HTML and CSS, the basic components behind every' +
		'website, and how you can use them to build unique and impressive web pages!',
		startTime: '11:00 AM'
	},
	{
		name: 'INTRO TO ANDROID',
		location: 'De Neve Learning Center',
		// eslint-disable-next-line no-multi-str
		description: 'Learn all about the fundamentals of iOS development ' +
		'by making a simple app in Swift and XCode! ' +
		'You must have a Mac to be able to code along in this workshop.',
		startTime: '11:00 AM'
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
/*
Organize the events into bins by time and display each bin as a time slot
NOT DONE. VERY BAD. DO NOT COMMIT.
*/
const SchedulePage = () => {
	const classes = useStyles();
	// Create array of pairs: (time, [events])
	const timeslots = [];
	let time = '';
	for (const event of testEvents) {
		if (event.startTime === time) {
			timeslots[timeslots.length - 1][1].push(event);
		} else {
			timeslots.push([event.startTime, [event]]);
			time = event.startTime;
		}
	}
	return <>
		<Typography align='center' variant='h4' className={classes.title}>Schedule</Typography>
		{timeslots.map(timeslot => {
			return <TimeSlot events={timeslot[1]} time={timeslot[0]} key={timeslot[0]} />;
		})}
	</>;
};

export default SchedulePage;