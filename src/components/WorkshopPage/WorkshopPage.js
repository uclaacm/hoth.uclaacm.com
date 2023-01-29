import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useTheme from '@material-ui/core/styles/useTheme';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Workshop from './Workshop.js';
import { makeStyles } from '@material-ui/core/styles';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { Button } from '@material-ui/core';

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
	btn: {
		fontWeight: 500
	},
	anchor: {
		textDecoration: 'none'
	},
	sideBar: {
		position: 'fixed',
		paddingTop: '10vh',
		paddingLeft: '4vw',
		width: '20%'
	}
}));

const workshops = [
	{
		type: 'Web Development',
		elements: [
			{
				title: 'Intro to Frontend',
				author: 'Rajeswhari Jadhav',
				description: `HTML (HyperText Markup Language) is a fancy way of saying text
				with extra tags that describe the structure and the content of a web page.
				Historically, HTML was much more limited, but is now able to do much more,
				such as images. Let's get started with some Frontend in HTML!`,
				youtube: 'https://youtu.be/-rg6fJKJ77c',
				readme: 'https://github.com/uclaacm/hoth9-workshops/tree/main/intro-to-frontend',
				slides: 'https://docs.google.com/presentation/d/12HhnDSDsRA8VA3x9axXg5uHfjZveNdRJ7tGE3kMNBts/edit?usp=sharing'
			},
			{
				title: 'Intro to CSS',
				author: 'Jakob Reinwald',
				description: `The code we have in our HTML file should only represent
				the content of our webpage. A different language called CSS
				(Cascading Style Sheet) is used to create the rules about the styling of our content.`,
				youtube: 'https://youtu.be/DdY_VfwJZ1w',
				readme: 'https://github.com/uclaacm/hoth8-intro-to-html-css-js/blob/main/README.md',
				slides: 'https://docs.google.com/presentation/d/1Y9rvAXjyeZOADBceqlAr9eeakO7URGWwu4QRulgvhSs/edit?usp=sharing'
			},
			{
				title: 'Intro to JavaScript',
				author: 'Jakob Reinwald',
				description: `If we want to make our website more interactive, we need to be
				able to change the web page through programming and set rules about what
				will happen given that certain events occur. This brings us to JavaScript!`,
				youtube: 'https://youtu.be/Q23CBrln3SA',
				readme: 'https://github.com/uclaacm/hoth8-intro-to-html-css-js/blob/main/README.md',
				slides: 'https://docs.google.com/presentation/d/1Y9rvAXjyeZOADBceqlAr9eeakO7URGWwu4QRulgvhSs/edit?usp=sharing'
			},
			{
				title: 'Intro to Web APIs',
				author: 'Thomas McGall',
				description: `Learn about the wonderful world of HTTP requests and web APIs where someone else
				can do the hard work for you. With PokéAPI and Google Maps API, we'll learn all
				about what APIs are, why we use them, and how we can integrate them into our code!
				Pikachu, I choose you!!!`,
				youtube: 'https://youtu.be/Nbst275dfyA',
				readme: 'https://github.com/uclaacm/hoth9-workshops/tree/main/Web-APIs',
				slides: 'https://docs.google.com/presentation/d/1RwTR04cmAl1h37xs4nX4tz4w3X8sd8nLoNgUktc2-08/edit?usp=sharing'
			},
			{
				title: 'Intro to Servers',
				author: 'Anakin Trotter',
				description: `Learn about the brains behind what makes your favorite websites work!
				In this workshop, we will go over the terms server, backend, and HTTP and explain
				what these terms mean and how they can apply to your project. There is also a demo at the
				end showing you how to program your own backend to handle GET and POST requests using
				Node.js and Express, so take your express ticket to server expertise and enjoy this workshop!`,
				youtube: 'https://youtu.be/NmFxHLpuvAg',
				readme: 'https://github.com/uclaacm/hoth9-workshops/tree/main/intro-to-servers',
				slides: 'https://docs.google.com/presentation/d/113s6r2s_LHSXV0bN1K-MIkMxi8UagFDMynRB5i78BoA/edit?usp=sharing'
			},
			{
				title: 'Intro to React.js',
				author: 'Maggie Li',
				description: `How are some of your favorite websites like Facebook and Netflix made?
				Let's talk about React, a JavaScript library used to build user interfaces! In this
				workshop, you'll learn how to set up your own React App, as well as fundamental React
				concepts such as components, props, and state. We'll even show you how to start building
				your own version of Disney+. Let the magic begin!`,
				youtube: 'https://youtu.be/4YZ0KZfCcb8',
				readme: 'https://github.com/uclaacm/hoth9-workshops/tree/main/intro-to-reactjs',
				slides: 'https://docs.google.com/presentation/d/1Q6-zbYOSTcvS5uN2GZHnxcpBYevpkj2HTGZImfVUEPc/edit?usp=sharing'
			}
		]
	},
	{
		type: 'Mobile Development',
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
		elements: [
			{
				title: 'Hackathon 101',
				author: 'Rajeshwari Jadhav',
				description: `Start here for an idea of what Hack on the Hill 9 will offer as ACM Hack's
				first hybrid hackathon. We'll also give you some tips on how to survive and thrive during
				this year's HOTH! Have fun, good luck, and we believe in you!`,
				youtube: 'https://youtu.be/GskV5qMOpkE',
				readme: null,
				slides: 'https://docs.google.com/presentation/d/1LNYFecHI-U5BGY9_OdqCTfPSFtq6wmDw9gwLld3tIVY/edit?usp=sharing'
			},
			{
				title: 'Intro to Git',
				author: 'Katelyn Yu',
				description: `Welcome to the wonderous world of version control! In this
				workshop, we'll introduce git and GitHub (two very different things) with a
				quick guide on how to set them up and how to use them. We'll simulate creating
				a project with git and GitHub with all the intricacies of terminal, branching,
				merging, and merge conflicts. Curious as to what those are? Wake up your galaxy brain,
				watch this workshop, and 'git gud' at git!`,
				youtube: 'https://youtu.be/YWEOSz7Lo8U',
				readme: 'https://github.com/uclaacm/hoth9-workshops/tree/main/intro-to-git',
				slides: 'https://docs.google.com/presentation/d/11Gb0WyIzhGyTfzxS0bg_IhUuvTgwYifyVpzmMK8aOmg/edit?usp=sharing'
			},
			{
				title: 'Intro to Databases',
				author: 'Nathan Zhang',
				description: `In this workshop you will learn all about databases! Why do we use
				databases? What are different types of databases? How do we use databases? Why does
				this summary use the word 'databases' so much? Find out the answers to all of these
				questions in this workshop! We'll even run through adding, retrieving, and displaying
				data values using Firebase, a NoSQL cloud database provided by Google!`,
				youtube: 'https://youtu.be/1qTyhlzLT-4',
				readme: 'https://github.com/uclaacm/hoth9-workshops/tree/main/intro-to-databases',
				slides: 'https://docs.google.com/presentation/d/1hDHHENCtzvLnjwS8mYuapRBkFIEbIU_g7SKLQwU6Vnc/edit?usp=sharing'
			},
			{
				title: 'Intro to Game Development',
				author: 'Peter Sutarjo (ACM Studio)',
				description: `In this workshop, we'll go over how to start thinking about your
				prospective video game, such as whether you plan to create a visual novel or a
				platformer. We'll give you some tips to succeed such as determining scope
				and finding assets. At the end, we'll introduce you to some resources for
				you to look at as you start diving deeper into developing your game.`,
				youtube: 'https://youtu.be/D_mbel-Q5_0',
				readme: null,
				slides: 'https://docs.google.com/presentation/d/1fjDNeCgPOvp4xe2yMorYeOHJZrXBI7NZ8eqSt9Fm-0Q/edit#slide=id.p'
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

	const sectionLinks = workshops.map(item =>
		<React.Fragment key={item.type}>
			<AnchorLink to={'/workshops#id_' + item.type.replace(/ /g, '_')} className={classes.anchor}>
				<Button className={classes.btn} style={{ textDecoration: 'none', textAlign: 'left' }}>
					<Typography variant='h6' component='h1'>
						{item.type}
					</Typography>
				</Button>
			</AnchorLink>
		</React.Fragment>);

	return (
		<React.Fragment>
			<div className={classes.sideBar}>
				{sectionLinks}
			</div>
			<Container maxWidth='md' style={{ marginBottom: theme.spacing(8), marginLeft: '25vw' }}>
				<Typography variant='h4' component='h1' className={classes.title}>
					Workshops
				</Typography>
				{workshopCards}
			</Container>
		</React.Fragment>
	);
}

export default WorkshopPage;
