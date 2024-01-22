import * as React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useTheme from '@material-ui/core/styles/useTheme';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Workshop from './Workshop.js';
import { makeStyles } from '@material-ui/core/styles';
// import { AnchorLink } from 'gatsby-plugin-anchor-links';
// import { Button } from '@material-ui/core';
// import StickyBox from 'react-sticky-box';
// import Divider from '@mui/material/Divider';

const useStyles = makeStyles(theme => ({
	itemType: {
		fontWeight: 'medium',
		paddingBottom: theme.spacing(4),
		[theme.breakpoints.down('sm')]: {
			paddingBottom: theme.spacing(2)
		}
	},
	itemElements: {
		// This counteracts the negative margin Material-UI places on the Grid component, and
		// hence acts as a small positive margin.
		marginBottom: theme.spacing(4),
		[theme.breakpoints.down('sm')]: {
			marginBottom: theme.spacing(0)
		},

		// Material-UI's Grid seems to miscalculate the width, causing a spurious page overflow.
		width: 'calc(100% + 56px)'
	},
	title: {
		fontWeight: theme.typography.fontWeightBold,
		paddingTop: theme.spacing(11),
		[theme.breakpoints.down('sm')]: {
			paddingTop: theme.spacing(4)
		},
		paddingBottom: theme.spacing(4)
	},
	topics: {
		paddingBottom: theme.spacing(2)
	},
	btn: {
		fontWeight: 500,
		marginRight: '30px'

	},
	anchor: {
		textDecoration: 'none'
	},
	anchorText: {
		fontWeight: theme.typography.fontWeightMedium,
		color: theme.palette.primary.main,
		fontFamily: theme.typography.fontFamily
	},
	sections: {
		marginLeft: '20px',
		marginTop: theme.spacing(9),
		paddingTop: theme.spacing(2),
		[theme.breakpoints.down('sm')]: {
			display: 'none'
		}
	}
}));

const workshops = [
	{
		type: 'Web Development',
		abbrev: 'Web Dev',
		elements: [
			{
				title: 'Intro to HTML, CSS, and JS',
				author: 'Shiyu Ye',
				description: `This workshop will take you on a fun and interactive
				journey through the three amigos of web development: HTML, CSS, and
				JavaScript. We will go over how to use HTML to structure your web
				pages, CSS to style them up with colors, fonts, and layouts, and
				JavaScript to add some fun little tricks. As a practice, we will
				be creating a personal website for Anya from Spy x Family! Hope to
				spy you there, fam ;)`,
				youtube: 'https://youtu.be/bU1C5UoKlSU',
				readme: 'https://github.com/uclaacm/hothX-workshops/tree/main/intro-to-html-css-js',
				slides: 'https://docs.google.com/presentation/d/1mpto8de9naxHfKPpK9p8updtKn-Z2wSzQV-Ravq6I58/edit?usp=sharing'
			},
			{
				title: 'Intro to Web APIs',
				author: 'Abigail Tran',
				description: `Sick of waiting all year for your Spotify Wrapped? Learn
				how to build your own version of Receiptify or Spotify Pie using spotify
				APIs! In this workshop, we will learn all about using Web APIs to integrate
				existing software systems (like Twitter, Venmo, Spotify, Google Maps) within
				your OWN project! So wrap up your Spotify playlist, and queue up this workshop
				on APIs!`,
				youtube: 'https://youtu.be/U2MOLOC6GAI',
				readme: 'https://github.com/uclaacm/hothX-workshops/tree/main/intro-to-apis',
				slides: 'https://docs.google.com/presentation/d/1iQU02GAt75Y2JhRN6iniuJFAt_tKBy1xE2whg-1DJs0/edit?usp=sharing'
			},
			{
				title: 'Intro to Servers',
				author: 'Andy Lewis',
				description: `This intro to servers workshop covers the basics of the client-server
				model and touches on relevant topics like hardware and software servers, HTTP,
				and JSON. During the accompanying demo, you will learn how to create a simple
				server and its API using JavaScript, Node.js, and Express. The server features
				a simulated user database with user manipulation using GET, POST, and DELETE
				requests, which we will test using the API tester, Postman! Stay posted for this
				workshop and take your express ticket to server expertise!`,
				youtube: 'https://youtu.be/pdE3bA_S4q8',
				readme: 'https://github.com/uclaacm/hothX-workshops/tree/main/intro-to-servers',
				slides: 'https://docs.google.com/presentation/d/1RRLdpQPd8cEvC-9tqNKD9qUO08CcmGYJo30rTwJiQkU/edit?usp=sharing'
			},
			{
				title: 'Intro to React.js',
				author: 'Brooke Jiang',
				description: `In this workshop, we cover the basics of React with a simple demo
				of creating a grocery list. We will introduce React, explain why we want to use it, make
				our first component, and allow it to display different information using props and
				array.map()! Furthermore, we will learn the basics of State and useState, and how React magic
				lets the user interact with the site. Shop no longer for ways to create your ideal website
				and state tuned for this introduction to React!`,
				youtube: 'https://youtu.be/1GNq5ez2Lxg',
				readme: 'https://github.com/uclaacm/hothX-workshops/tree/main/intro-to-react',
				slides: 'https://docs.google.com/presentation/d/1dAx-azdKEiOLCANUMoKRm1PP2Cme5SfXaAM-xh6Ozdg/edit?usp=sharing'
			}
		]
	},
	{
		type: 'Mobile Development',
		abbrev: 'Mobile Dev',
		elements: [
			{
				title: 'Intro to React Native',
				author: 'James Wu',
				description: `Ever wanted to make your own mobile app? Let's explore React Native—a cross
				platform development tool that's behind Instagram, Facebook, Discord, and many other
				iconic names. In this workshop, we'll learn how to create our own app from scratch,
				going over views, components, functionality, and more so that you can be a native of React! `,
				youtube: 'https://youtu.be/TYvmyMJc3PQ',
				readme: 'https://github.com/uclaacm/hoth9-workshops/tree/main/intro-to-react-native',
				slides: 'https://docs.google.com/presentation/d/1hPfBtJzcgahXPLuJlQ6y0HcmpqrflBbZPpmL5e1vTQE/edit?usp=sharing'
			}
		]
	},
	{
		type: 'Miscellaneous',
		abbrev: 'Misc',
		elements: [
			{
				title: 'Hackathon 101',
				author: 'Anan Wang',
				description: `This workshop video explains the basics of hackathons, which are events where
				people work together to create technology projects. You'll learn what to expect and how to make
				the most out of your experience. By the end of the video, you'll have a better understanding of
				what hackathons are all about and how to get started with attending one. Happy hacking, handy
				hackers!`,
				youtube: 'https://youtu.be/p8ssQybQsd8',
				readme: null,
				slides: 'https://docs.google.com/presentation/d/1oln-vrDxRUNNjYx9DT616e8QW2x6HYdkriyty0N8Rkc/edit?usp=sharing'
			},
			{
				title: 'Intro to Git',
				author: 'Jenna Wang',
				description: `Git is a distributed version control system; it brings a local copy of the
				complete repository to every team member’s computer, facilitating collaboration and easy
				tracking of changes made to code. The benefits of using Git include the flexibility to
				work offline, reliable backup copies, fast merging and flexible branching, rapid feedback,
				fewer merge conflicts, and available support. We’ll be going over how to install and
				configure Git and how to use various Git commands to switch branches, commit, push, and
				pull code, so let's 'git gud' at git!`,
				youtube: 'https://youtu.be/BefzoplcCzs',
				readme: 'https://github.com/uclaacm/hothX-workshops/tree/main/intro-to-git',
				slides: 'https://docs.google.com/presentation/d/1kzZsZGdJ4h_GscDhjbLPs4L3j0XPIpE1-F_w2_zc6N4/edit?usp=sharing'
			},
			{
				title: 'Intro to Databases',
				author: 'Satyen Subramaniam',
				description: `All good projects need a strong foundation - a base for their data. Join us in this
				workshop where we'll run through the use cases of databases, the structure of popular types of
				databases, and how to choose a database. We'll also do a full demo using Google Firebase - a
				beginner friendly non-relational database - and connect it to a custom website using React, all
				completely from scratch! Get ready cus this workshop is gonna be absolutely fire (and make your
				websites hella based) :)`,
				youtube: 'https://youtu.be/l6D8X0L_L_g',
				readme: 'https://github.com/uclaacm/hothX-workshops/tree/main/intro-to-databases',
				slides: 'https://docs.google.com/presentation/d/1LE2CYSIvGKSbGdGuZuMC1hOnxjmKgP3uwH0-LPEWSFw/edit?usp=sharing'
			},
			{
				title: 'Intro to Game Development',
				author: 'Austin Law (ACM Game Studio)',
				description: `It’s gamer time! In this workshop, we cover some general tips to game development.
				Whether you want to make an action RPG or a visual novel, it's important to keep in mind where
				to start, how to scale properly, and how to work with a team. Then, we briefly dive into Unity
				and the Unity Editor, and follow a condensed version of Unity's Roll-A-Ball tutorial. So grab
				your headsets and watch this workshop cus it’s time to up your game dev game!`,
				youtube: 'https://youtu.be/WkqycKI6vdc',
				readme: null,
				slides: 'https://docs.google.com/presentation/d/1s545_VhUktrxMzpx6k6hi_kOUbsRiJP0evhJ1x9ai38/edit?usp=sharing'
			},
			{
				title: 'Intro to UI/UX Design',
				author: 'Caitlyn Chen and Sara Kuchimpos (Creative Labs)',
				description: `We will cover the higher level goals of UI/UX, how to think about
				design, and common design mistakes. Along the way, we'll drops some tips and
				tricks to make your design absolutely bomb and give you guys some extra resources
				to reference.`,
				youtube: 'https://youtu.be/TxWxpsna2Us',
				readme: null,
				slides: 'https://www.figma.com/file/9wDd7hY9OvRRETh8Gt91fF/HOTH-Workshop?node-id=29%3A32'
			},
			{
				title: 'Intro to Machine Learning',
				author: 'Caden Davis, Jason Jewik, and Nisha McNealis (ACM AI)',
				description: `This workshop is an introduction to Machine Learning
				presented to you by ACM AI. We'll briefly introduce what Machine Learning is,
				the theory behind it, and how you can apply it to your own hackathon project.`,
				youtube: 'https://youtu.be/byTbOGoAbRI',
				readme: null,
				slides: 'https://docs.google.com/presentation/d/15iGiw78UcoYgqZZR7BHfVzRGgzhXFz8Imok-OwMTWXQ/edit?usp=sharing'
			}
		]
	}
];

function WorkshopPage() {
	const theme = useTheme();
	const classes = useStyles();
	const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
	// const renderSidebar = true;

	const workshopCards = workshops.map(item =>
		<React.Fragment key={item.type}>
			<Typography
				variant='h4'
				component='h2'
				className={classes.itemType}
				id={'id_' + item.type.replace(/ /g, '_')}>
				{item.type}
			</Typography>

			<Grid
				container
				className={classes.itemElements}
				spacing={8}
				justify={isSmall ? 'center' : 'flex-start'}
			>
				{item.elements.map(element => <Workshop key={element.title} {...element} />)}
			</Grid>
		</React.Fragment>);

	// const sectionLinks = workshops.map(item =>
	// 	<React.Fragment key={item.type}>
	// 		<AnchorLink to={'/workshops#id_' + item.type.replace(/ /g, '_')}
	// 			className={classes.anchor}>
	// 			<Button className={classes.btn} style={{ textDecoration: 'none',
	// 				display: 'flex', justifyContent: 'flex-start' }}>
	// 				<Typography variant='h6' component='h1' align='left' className={classes.anchorText}>
	// 					{item.abbrev}
	// 				</Typography>
	// 			</Button>
	// 		</AnchorLink>
	// 	</React.Fragment>);

	return (
		<React.Fragment>
			<div style={{ display: 'flex', alignItems: 'flex-start' }}>
				{/* {renderSidebar ? */}
				{/* <StickyBox offsetTop={20} offsetBottom={20} className={classes.sections}> */}
				{/* <Typography variant='h4' component='h1' align='left' className={classes.topics}> */}
				{/* Topics */}
				{/* </Typography> */}
				{/* {sectionLinks} */}
				{/* </StickyBox> : */}
				{/* null } */}
				{/* <Divider orientation="vertical" variant="middle" flexItem className={classes.sideBarVertical} /> */}
				<Container maxWidth='md' style={{ marginBottom: theme.spacing(8) }}>
					<Typography variant='h4' component='h1' className={classes.title}>
						Workshops
					</Typography>
					<Typography variant='h5' component='h2'
						style={{
							paddingBottom: theme.spacing(isSmall ? 4 : 8)
						}}>
						Workshops coming soon, here are the ones from last year!
					</Typography>
					{workshopCards}
				</Container>
			</div>
		</React.Fragment>
	);
}

export default WorkshopPage;
