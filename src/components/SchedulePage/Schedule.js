import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TimeSlot from '../SchedulePage/Timeslot';

const hothDate = '2021-02-23'; // replace with real date later
const utcOffset = '-08:00'; // PST
const events = [
	{
		startTime: new Date(hothDate + 'T09:30:00' + utcOffset),
		events: [
			{
				name: 'ACM-W × ACM Hack | Hackathon 101 + Team Formation',
				location: 'Sycamore Room',
				description: <>First hackathon? We’ll show you all the tips and tricks you’ll
				need to know to be successful and most importantly, have fun!</>
			}
		]
	},
	{
		startTime: new Date(hothDate + 'T10:00:00' + utcOffset),
		events: [
			{
				name: 'Git and Github',
				location: 'De Neve Auditorium',
				description: <>With multiple developers each working on
				a different feature of a project, bringing things together
				can get messy pretty easily. Come learn how to use Git to
				manage code across multiple collaborators and versions!</>
			},
			{
				name: 'INTRO TO IOS',
				location: 'Sycamore Room',
				description: <>Learn all about the fundamentals of iOS development
				by making a simple app in Swift and XCode!
				You must have a Mac to be able to code along in this workshop.</>
			}
		]
	},
	{
		startTime: new Date(hothDate + 'T11:00:00' + utcOffset),
		events: [
			{
				name: 'FACEBOOK | ZERO TO HERO WITH REACT NATIVE',
				location: 'De Never Auditorium ',
				description: <>In this workshop we will learn how to quickly create a mobile app
				using React Native. We will be covering the React fundamentals (such as props
				and state) and apply them to quickly build a simple cross-platform app using
				React Native. This will be a hands-on workshop, so come in with the intent to hack!
				<br/>If possible, come in with Node.js, Git, and a text editor of your choice installed already!</>
			},
			{
				name: 'INTRO TO WEB DEV: HTML AND CSS',
				location: 'Sycamore Room',
				description: <>Ever wanted to create and design your own website?
				Come learn about HTML and CSS, the basic components behind every
				website, and how you can use them to build unique and impressive web pages!</>
			},
			{
				name: 'INTRO TO ANDROID',
				location: 'De Neve Learning Center',
				description: <>Learn all about the fundamentals of iOS development
				by making a simple app in Swift and XCode!
				You must have a Mac to be able to code along in this workshop.</>
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
	return <>
		<Typography align='center' variant='h4' className={classes.title}>Schedule</Typography>
		{events.map(timeslot => {
			return <TimeSlot events={timeslot.events} time={timeslot.startTime} key={timeslot.startTime} />;
		})}
	</>;
};

export default SchedulePage;
