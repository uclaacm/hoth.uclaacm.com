import * as React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useTheme from '@material-ui/core/styles/useTheme';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Workshop from './Workshop.js';
import { makeStyles } from '@material-ui/core/styles';
import ComingSoon from '../ComingSoon/ComingSoon';
// import { AnchorLink } from 'gatsby-plugin-anchor-links';
// import { Button } from '@material-ui/core';
// import StickyBox from 'react-sticky-box';
// import Divider from '@mui/material/Divider';
const workshopsAvailable = true;
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
				author: 'Hannah Kendall',
				description: `This workshop covers the basics of Web Development - HTML, CSS, and JavaScript! 
				Together, they make up the structure (HTML), the style (CSS), and the functionality (JS) of a 
				web application. Keep reading or watch the workshop to learn how to utilize these tools to 
				make a super cool web application of your own!`,
				youtube: 'https://youtu.be/fSvbqxaAWqE?si=mBKZSfSBflfU0Jsm',
				readme: 'https://github.com/uclaacm/hothXI-workshops/tree/main/intro-to-html-css-js',
				slides: 'https://docs.google.com/presentation/d/1Z6rnFfiFMpTCIxXbZz9fndr4hMB4XVyQbtid2ET0BSk/edit?usp=drive_link'
			},
			{
				title: 'Intro to Web APIs',
				author: 'Kaylin Chung',
				description: `Hello! Welcome to HOTH XI's Intro to Web APIs workshop. This is a guide to introduce you 
				to the foundations of Web APIs that will allow you to integrate them into any fullstack project. We 
				will be covering the client-server model, HTTP requests & responses, and how we can leverage external 
				servers to retrieve data and services for an app. Keep reading to learn more!`,
				youtube: 'https://youtu.be/ZIamyNtujBY?si=r0v5ojIThiKzzcsQ',
				readme: 'https://github.com/uclaacm/hothXI-workshops/tree/main/intro-to-webapis',
				slides: 'https://docs.google.com/presentation/d/1CpiERteBZsqKqRjnYgGruBO2aZnonjRWibSqnthcRws/edit?usp=drive_link'
			},
			{
				title: 'Intro to Servers',
				author: 'Samuel Perrott',
				description: `In this workshop, you will learn server-side programming in the context of full stack 
				applications! Topics covered include HTTP, CRUD, and REST APIs. The second half of the workshop 
				will include a hands-on demo building your own REST API using Flask and connecting it with a React 
				frontend. By the end of the workshop you will become a server savant savvy with tools such as Postman. 
				Viewers are recommended to have a strong foundation in JavaScript and Python.`,
				youtube: 'https://youtu.be/1w60BwDG6hs?si=vSZTMTo7ntuUlmO4',
				readme: 'https://github.com/uclaacm/hothXI-workshops/tree/main/intro-to-servers',
				slides: 'https://docs.google.com/presentation/d/1ZvL1TrNetVCnJHxDT0ffca0QwEP678LnVAGC846DtZ4/edit?usp=drive_link'
			},
			{
				title: 'Intro to React.js',
				author: 'Kayla Kamakawa',
				description: `Hello! Welcome to the Intro to React JS workshop for HOTH XI! Here we 
				will be introducing frontend web development using React. In this workshop we will utilize 
				HTML, CSS, and JavaScript, so I would recommend watching the workshop on those if you are not already 
				familiar with them!`,
				youtube: 'https://youtu.be/JZrRLf5Gmqg?si=CZOJhja-tA5qpo0M',
				readme: 'https://github.com/uclaacm/hothXI-workshops/tree/main/intro-to-react',
				slides: 'https://docs.google.com/presentation/d/1VsaDQLJS2ShCG8dLjvUt0BP7f9Zrq0oIPf73wCQtbNM/edit?usp=drive_link'
			}
		]
	},
	{
		type: 'Mobile Development',
		abbrev: 'Mobile Dev',
		elements: [
			{
				title: 'Intro to React Native',
				author: 'Max Lee',
				description: `Hello and welcome to our Intro to React Native workshop! We'll be covering the 
				basics of React Native in a way that I hope is simple to understand and impactful enough to teach 
				some key features of app development. Happy hacking!`,
				youtube: 'https://youtu.be/ulqijuEyi5Y?si=aZfrltAPnZMBoCbW',
				readme: 'https://github.com/uclaacm/hothXI-workshops/tree/main/intro-to-react-native',
				slides: 'https://docs.google.com/presentation/d/1_7WB4HkKUErKpaTbwc2Z7R__20CiRZ8BXlc5oo7FcLw/edit?usp=drive_link'
			}
		]
	},
	{
		type: 'Miscellaneous',
		abbrev: 'Misc',
		elements: [
			{
				title: 'Hackathon 101',
				author: 'Aazel Tan',
				description: `This workshop video explains the basics of hackathons, which are events where
				people work together to create technology projects. You'll learn what to expect and how to make
				the most out of your experience. By the end of the video, you'll have a better understanding of
				what hackathons are all about and how to get started with attending one. Happy hacking, handy
				hackers!`,
				youtube: 'https://www.youtube.com/watch?v=Plz5kfY8JLs&list=PLPO7_kXilXFYCo6UngcitrjAHnRXyBmwi',
				readme: null,
				slides: 'https://docs.google.com/presentation/d/1omzpuEm3yUB92c0uwrMp79aXWa74Ft99jgSNZoUOb7I/edit?usp=drive_link'
			},
			{
				title: 'Intro to Git',
				author: 'Lillian Gonick',
				description: `Hello everyone! Welcome to the Intro to Git workshop README! In this workshop, we will
				 be covering the version control system: Git. Together, we will walk through installing git, creating 
				 our first repository, and merging two branches!`,
				youtube: 'https://youtu.be/Gw2AGGJKnbg?si=0b5FhNxT__V_2Svk',
				readme: 'https://github.com/uclaacm/hothXI-workshops/tree/main/intro-to-git',
				slides: 'https://docs.google.com/presentation/d/1fU0VoWGm95IsHadN5STolL6PO74Et_sfQFq7WQ5_d24/edit?usp=drive_link'
			},
			{
				title: 'Intro to Databases',
				author: 'Sneha Agarwal',
				description: `Hi! Welcome to HOTHXI's Database workshop, in this workshop we'll be covering
				the basics of what a database is and walkthrough how to set up, retrieve information, and
				add information to our database! Before starting this workshop I recommend checking out 
				the React JS or React Native workshops if you're not familar with them.`,
				youtube: 'https://youtu.be/09dT8CcrgTw?si=TVP-hXHPBUk_xX1x',
				readme: 'https://github.com/uclaacm/hothXI-workshops/tree/main/intro-to-databases',
				slides: 'https://docs.google.com/presentation/d/1rkeQNLEeXlpSXsoHmFdx77FY4HgK-rTUSqRSs7JOe5E/edit?usp=drive_link'
			},
			{
				title: 'Intro to Deep Learning',
				author: 'Leon Lenk, Maxine Wu, & Jordan Lin (ACM AI)',
				description: `Shoutout to the folks over at ACM AI for putting this together! They created this workshop
				so serve as an introduction to deep learning, including a notebook linked on the readme to show you 
				actual deep learning code and take you through a hands-on of how you can build this code yourself! 
				In the process of building this model, they go over Big Data, avoiding bias and unintended patterns, 
				understanding our data, making the network, and training`,
				youtube: 'https://youtu.be/RggC7sb1_cE?si=4FLeRtfCLOgZezhU',
				readme: 'https://bit.ly/acm_ai_24w_intro_dl',
				slides: null
			},
			{
				title: 'Intro to Game Development',
				author: 'Austin Law (ACM Game Studio)',
				description: `Shoutout to Austin Law from ACM Game Studio for putting this workshop together
				for us! In this section, he talks about game development, some tips to success, and lastly, 
				a short introduction to using the Unity game engine`,
				youtube: 'https://youtu.be/WkqycKI6vdc?si=ub0ytPWJGkXAhkj8',
				readme: null,
				slides: 'https://docs.google.com/presentation/d/1s545_VhUktrxMzpx6k6hi_kOUbsRiJP0evhJ1x9ai38/edit?usp=sharing'
			}
			// {
			// 	title: 'Intro to UI/UX Design',
			// 	author: 'Caitlyn Chen and Sara Kuchimpos (Creative Labs)',
			// 	description: ``,
			// 	youtube: 'https://youtu.be/TxWxpsna2Us',
			// 	readme: null,
			// 	slides: 'https://www.figma.com/file/9wDd7hY9OvRRETh8Gt91fF/HOTH-Workshop?node-id=29%3A32'
			// }
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
				justifyContent={isSmall ? 'center' : 'flex-start'}
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
					{!workshopsAvailable ?
						<ComingSoon alignment='left' /> :
						<>{workshopCards}</>
					}
				</Container>
			</div>
		</React.Fragment>
	);
}

export default WorkshopPage;
