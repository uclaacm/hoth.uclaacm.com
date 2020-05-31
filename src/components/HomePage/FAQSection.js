import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Typography, Link } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';

import Add from '@material-ui/icons/Add';
import Remove from '@material-ui/icons/Remove';

const ExpansionPanel = withStyles(theme => ({
	root: {
		backgroundColor: theme.palette.background.default,
		borderTop: '1px solid rgba(0, 0, 0, 1)',
		borderBottom: '1px solid rgba(0, 0, 0, 1)',
		boxShadow: 'none',
		'&:not(:last-child)': {
			borderBottom: 0
		},
		'&:before': {
			display: 'none'
		},
		'&$expanded': {
			margin: 'auto'
		}
	},
	expanded: {}
}))(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
	root: {
		minHeight: 20,
		'&$expanded': {
			minHeight: 20
		}
	},
	content: {
		'&$expanded': {
			margin: 0
		}
	},
	expanded: {},
	expandIcon: {
		'&$expanded': {
			transform: 'rotate(180deg)'
		}
	}
})(MuiExpansionPanelSummary);

function FAQSection() {
	const [expanded, setExpanded] = React.useState('faqPanel0');

	const handleChange = panel => (event, newExpanded) => {
		setExpanded(newExpanded ? panel : false);
	};

	const faqs = [
		{
			question: `What’s a hackathon?`,
			answer: `A hackathon is an event where individuals get together for a
				short period of time to work on a project. These events usually last 24
				or 36 hours and take place during the weekend. Hack on the Hill is
				designed to simulate a real hackathon over a 12 hour period.`
		},
		{
			question: `Who can join?`,
			answer: `Any UCLA student can join! And you don’t necessarily have to be
				a programmer - designers, entrepreneurs, and even those who are curious
				as to what a hackathon is like can attend. Whether you’ve never been to
				a hackathon before or you’ve been to several, everyone is welcome to
				participate in Hack on the Hill.`
		},
		{
			question: `What do I bring?`,
			answer: `All you need is your laptop, charger, and any other materials
				you plan to bring for your project. We will not be providing laptops
				for this hackathon.`
		},
		{
			question: `How many people can I work with?`,
			answer: `Submissions must be by groups with a maximum size of 4 people.`
		},
		{
			question: `How do I sign up?`,
			answer: `Hit the sign-up button above and fill out the form. After the
				deadline has passed, you will be emailed a confirmation that will ask
				for additional information. Sign up as soon as possible as space is
				limited!`
		},
		{
			question: `What can I possibly build in 12 hours?!`,
			answer:
				<>
					Don’t think it’s possible? Check out previous submissions from <Link
						href='https://hoth6.devpost.com/submissions' >HOTH 6</Link>, <Link
						href='https://hoth5.devpost.com/submissions' >HOTH 5</Link>, and <Link
						href='https://hoth4.devpost.com/submissions'>HOTH 4</Link>.
				</>
		}
	];

	const faqComponents = faqs.map(({ question, answer }, i) => {
		const panelName = 'faqPanel' + i;
		return (
			<ExpansionPanel
				key={panelName}
				square
				expanded={expanded === panelName}
				onChange={handleChange(panelName)}>
				<ExpansionPanelSummary
					expandIcon={expanded === panelName ? <Remove /> : <Add />}
					aria-controls={panelName + '-content'}
					id={panelName + '-header'}>
					<Typography variant='body1'>
						{question}
					</Typography>
				</ExpansionPanelSummary>
				<ExpansionPanelDetails id={panelName + '-content'}>
					<Typography variant='body1'>
						{answer}
					</Typography>
				</ExpansionPanelDetails>
			</ExpansionPanel>
		);
	});

	return (
		<Container maxWidth='md'>
			<Typography
				variant='h5'
				align='center'>
				Frequently Asked Questions (FAQ)
			</Typography>
			{faqComponents}
		</Container>
	);
}

export default FAQSection;
