import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useTheme from '@material-ui/core/styles/useTheme';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Workshop from './Workshop.js';

const workshops = [
	{
		type: 'Web Development',
		elements: [
			{
				title: 'Intro to HTML',
				author: 'Jakob Reinwald',
				description: `HTML (HyperText Markup Language) is a fancy way of saying text
				with extra tags that describe the structure and the content of a web page.
				Historically, HTML was much more limited, but is now able to do much more,
				such as images. Let’s get started with some HTML!`,
				url: 'https://youtu.be/qQy8lwOHkBY'
			},
			{
				title: 'Intro to CSS',
				author: 'Jakob Reinwald',
				description: `The code we have in our HTML file should only represent
				the content of our webpage. A different language called CSS
				(Cascading Style Sheet) is used to create the rules about the styling of our content.`,
				url: 'https://youtu.be/DdY_VfwJZ1w'
			},
			{
				title: 'Intro to JavaScript',
				author: 'Jakob Reinwald',
				description: `If we want to make our website more interactive, we need to be
				able to change the web page through programming and set rules about what
				will happen given that certain events occur. This brings us to JavaScript!`,
				url: 'https://youtu.be/Q23CBrln3SA'
			},
			{
				title: 'Intro to Web APIs',
				author: 'Timothy Rediehs',
				description: `Learn about the wonderful world of web APIs where someone else
				can do the hard work for you. We can use some JavaScript to talk to these APIs.
				After we learn the basics, we’ll try using the Google Natural Language API to
				detect if a block of text has a positive or negative tone.`,
				url: 'https://youtu.be/RKauOuvaoKo'
			},
			{
				title: 'Intro to Servers',
				author: 'Timothy Gu',
				description: `In this video, you will learn about what a server is and
				how it can be useful in a hackathon. We will also discuss some terms in
				computer communication such as “request,” “response,” and “JSON.”`,
				url: 'https://youtu.be/_1W4xcT2lYc'
			},
			{
				title: 'Intro to Servers Demo',
				author: 'Jamie Liu',
				description: `In this video, you’ll learn how to create your
				own server using Node.js and Express. We’ll go over GET and
				POST requests, static files, and route parameters.`,
				url: 'https://youtu.be/fQiEpmkxPxM'
			},
			{
				title: 'Intro to React.js Part 1',
				author: 'Eric Yang and Nareh Agazaryan',
				description: `React is a powerful JavaScript library that pushes your web development game
				to the next level, and it’s totally taking over the front-end development scene!
				This workshop aims to give you some basic concepts that are essential for development
				in React, but stays at an introductory level. We’ll cover what React is,
				components in React, as well as some specific applications of React and how we make
				development quick, easy, and fast with this amazing library!`,
				url: 'https://youtu.be/11adUXpddAU'
			},
			{
				title: 'Intro to React.js Part 2',
				author: 'Nareh Agazaryan',
				description: `React is a powerful JavaScript library that pushes your web development game
				to the next level, and it’s totally taking over the front-end development scene!
				This workshop aims to give you some basic concepts that are essential for development
				in React, but stays at an introductory level. We’ll cover what React is,
				components in React, as well as some specific applications of React and how we make
				development quick, easy, and fast with this amazing library!`,
				url: 'https://youtu.be/ccezb9tAJDY'
			}
		]
	},
	{
		type: 'Mobile Development',
		elements: [
			{
				title: 'Intro to React Native',
				author: 'Einar Balan',
				description: `So you want to make a mobile app,
				but don’t want to go through the hassle of maintaining two
				separate code bases? Then you’ve come to the right place!
				React Native, a framework released by Facebook, allows you
				to do exactly that using Javascript. Let’s get started!`,
				url: 'https://youtu.be/c8dGnJuqLY0'
			}
		]
	},
	{
		type: 'Miscellaneous',
		elements: [
			{
				title: 'Getting Started with a Hackathon',
				author: 'Eric Yang',
				description: `Start here if you don’t know where to start with
				hackathons. I’ll be going over five easy steps to succeeding at
				HOTH.`,
				url: 'https://youtu.be/ryXcoMyHfA8'
			},
			{
				title: 'Intro to Git',
				author: 'Chandra Suresh',
				description: `This workshop is a quick guide to setting up and using Git/Github.
				We’ll be covering the installation procedure and some essential commands for
				using both Git and Github. After that we will learn about a few auxiliary git
				commands that are less common in day-to-day usage. Finally, we will run through
				a quick crash course on bash commands.`,
				url: 'https://youtu.be/YkcZbs5Vozw'
			},
			{
				title: 'Intro to Unity',
				author: 'Jaret Ishii (ACM Studio)',
				description: `In this workshop, you’ll learn how to use Unity, a popular
				software used to make games. We’ll go over a quick tour of the Unity
				interface and then show you the steps needed to create a simple game
				where a user can roll a ball around.`,
				url: 'https://youtu.be/W3fUQM4Q0go'
			},
			{
				title: 'Intro to UIUX',
				author: 'Jennifer Lin, Chinmaya Vempati (ACM Design)',
				description: ` We will cover the higher level goals of UI/UX,
				define terms like "user research" and "wireframes", and analyze
				companies that use good UI/UX practices!`,
				url: 'https://youtu.be/jEi5lHrfSQ0'
			},
			{
				title: 'Intro to Deep Learning',
				author: 'John Dang, Justin Yi (ACM AI)',
				description: `An introduction to Machine Learning and Deep Learning
				presented to you by ACM AI. We’ll briefly introduce what Machine Learning
				and Deep Learning are and then dive into a demo to show you how you can
				train a model to recognize handwritten numbers.`,
				url: 'https://youtu.be/46NCgPTVK34'
			},
			{
				title: 'Intro to Databases',
				author: 'Sanya Srivastava (DevX)',
				description: `In this workshop you will learn about about SQL and 
				NoSQL databases, and integrating MongoDB Atlas, a fully-managed 
				cloud-based database into a Node.js application.`,
				url: 'https://youtu.be/e1CO2CxPO-w'
			}
		]
	}
];

function WorkshopPage() {
	const theme = useTheme();
	const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

	const workshopCards = workshops.map(item =>
		<React.Fragment key={item.type}>
			<Typography
				style={{
					fontWeight: theme.typography.fontWeightMedium,
					paddingBottom: theme.spacing(isSmall ? 2 : 4)
				}}
				variant='h4'
				component='h2'>
				{item.type}
			</Typography>

			<Grid
				container
				style={{
					// This counteracts the negative margin Material-UI places on the Grid component, and
					// hence acts as a small positive margin.
					marginBottom: theme.spacing(isSmall ? 0 : 4),

					// Material-UI's Grid seems to miscalculate the width, causing a spurious page overflow.
					width: 'calc(100% + 56px)'
				}}
				spacing={8}
				justify={isSmall ? 'center' : 'flex-start'}
			>
				{item.elements.map(element => <Workshop key={element.title} {...element} />)}
			</Grid>
		</React.Fragment>);

	return (
		<Container maxWidth='md' style={{ marginBottom: theme.spacing(8) }}>
			<Typography variant='h3' component='h1'
				style={{
					fontWeight: theme.typography.fontWeightBold,
					paddingTop: theme.spacing(isSmall ? 4 : 8),
					paddingBottom: theme.spacing(isSmall ? 4 : 8)
				}}>
				Workshops
			</Typography>
			{workshopCards}
		</Container>
	);
}

export default WorkshopPage;
