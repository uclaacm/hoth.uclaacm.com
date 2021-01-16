import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import useTheme from '@material-ui/core/styles/useTheme';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import makeStyles from '@material-ui/core/styles/makeStyles';

import Add from '@material-ui/icons/Add';
import Remove from '@material-ui/icons/Remove';

const Accordion = withStyles(theme => ({
	root: {
		backgroundColor: theme.palette.background.grey,
		boxShadow: 'none',
		borderColor: theme.palette.grey[400],
		borderTopWidth: 2,
		borderTopStyle: 'solid',
		'&:last-child': {
			borderBottomWidth: 2,
			borderBottomStyle: 'solid'
		},
		'&::before': {
			display: 'none'
		},
		'&$expanded': {
			margin: 0
		}
	},
	expanded: {}
}))(MuiAccordion);

const AccordionSummary = withStyles(theme => ({
	root: {
		minHeight: 'auto',
		'&$expanded': {
			minHeight: 'auto'
		},
		[theme.breakpoints.down('xs')]: {
			paddingLeft: theme.spacing(1),
			paddingRight: theme.spacing(1)
		}
	},
	content: {
		margin: '12px 0',
		'&$expanded': {
			margin: '12px 0'
		}
	},
	expanded: {}
}))(MuiAccordionSummary);

const AccordionDetails = withStyles(theme => ({
	root: {
		paddingBottom: theme.spacing(6),
		[theme.breakpoints.down('xs')]: {
			paddingBottom: theme.spacing(4),
			paddingLeft: theme.spacing(1),
			paddingRight: theme.spacing(1)
		}
	}
}))(MuiAccordionDetails);

const useStyles = makeStyles(theme => ({
	question: {
		fontWeight: theme.typography.fontWeightMedium,
		color: theme.palette.secondary.main,
		fontFamily: theme.typography.fontFamily
	}
}));

function AccordionQA({ index, question, answer }) {
	const [expanded, setExpanded] = useState(index === 0);
	const classes = useStyles();
	const panelName = 'faqPanel' + index;
	const theme = useTheme();

	return (
		<Accordion
			key={panelName}
			square
			expanded={expanded}
			onChange={() => setExpanded(e => !e)}>
			<AccordionSummary
				expandIcon={expanded ? <Remove /> : <Add />}
				aria-controls={panelName + '-content'}
				id={panelName + '-header'}>
				<Typography variant='body1' className={classes.question}>
					{question}
				</Typography>
			</AccordionSummary>
			<AccordionDetails>
				<Typography variant='body1' style={{ maxWidth: theme.breakpoints.values.md * 0.8 }}>
					{answer}
				</Typography>
			</AccordionDetails>
		</Accordion>
	);
}

AccordionQA.propTypes = {
	question: PropTypes.node.isRequired,
	answer: PropTypes.node.isRequired,
	index: PropTypes.number.isRequired
};

function FAQSection() {
	const faqs = [
		{
			question: `What’s a hackathon?`,
			answer:
				<>
					A hackathon is an event during which people from different backgrounds
					come together to create a project from start to finish in a limited time frame.
					Check out some examples <Link href='https://hoth7.devpost.com/project-gallery'>here</Link>!
				</>
		},
		{
			question: `Who can join?`,
			answer: `Applications for HOTH 8 are open to anyone! However, only current 
				UCLA students will be eligible for our prize tracks.`
		},
		{
			question: `How many people can I work with?`,
			answer: `You can work by yourself or in teams of up to 4 people total.`
		},
		{
			question: `What if I don't have a team?`,
			answer: `Don't worry! We'll be leading team building activities before 
				and at the start of the event.`
		},
		{
			question: `How do I sign up?`,
			answer: `Hit the apply button above and fill out the application! A few days before
				the event, you'll be emailed a confirmation form along with appropriate links
				and additional event information. Applications close on February 1st at 11:59pm PST.`
		},
		{
			question: `What if I have never made a project before?`,
			answer:	`No worries! Throughout HOTH 8, you'll have access to workshops on all sorts of
				topics to help you start bringing your ideas to life and mentors to support you through
				any roadblocks.`
		},
		{
			question: `I have coding experience and want to make a difference at HOTH 8. 
				How can I get involved?`,
			answer:
				<>
					We{'\''}d love to have you as a mentor to answer participants{'\''} technical
					questions and help them with their projects. You can sign up
					to be a mentor <Link href='https://tinyurl.com/hoth-8-mentor-app'>here</Link>!
				</>
		},
		{
			question: `I have some other questions.`,
			answer:
				<>
					Send us an email at <Link href='mailto:uclaacmhack@gmail.com'>uclaacmhack@gmail.com</Link>!
				</>
		}
	];

	const theme = useTheme();

	return (
		<Box component='section' paddingY={{ xs: 8, md: 10 }} bgcolor='background.grey'>
			<Container maxWidth='md'>
				<Box component='hgroup' paddingBottom={{ xs: 4, md: 8 }}>
					<Typography
						variant='h4'
						component='h2'
						style={{ fontWeight: theme.typography.fontWeightBold }}>
						FAQ
					</Typography>
					<Typography
						variant='h6'
						component='h3'
						style={{ color: theme.palette.grey[600] }}>
						Frequently Asked Questions
					</Typography>
				</Box>
				{faqs.map((faq, i) => <AccordionQA key={i} index={i} {...faq} />)}
			</Container>
		</Box>
	);
}

export default FAQSection;
