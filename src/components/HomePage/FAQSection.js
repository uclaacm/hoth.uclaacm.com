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
	const hothNum = 'XI';
	const appDeadline = 'Monday, February 26, 2024';
	const hothDate = 'Sunday, March 3, 2024';
	const hothLocation = 'Hill';
	const faqs = [
		{
			question: `What's a hackathon?`,
			answer:
				<>
					A hackathon is an event during which people from different backgrounds
					come together to create a project from start to finish in a limited time frame.
					Check out some examples from last year&apos;s
					HOTH <Link href='https://hoth9.devpost.com/project-gallery'>here</Link>!
				</>
		},
		{
			question: `Who can join?`,
			answer: `Applications for HOTH ${hothNum} are open to anyone! However, we are prioritizing 
				UCLA students for our prize tracks as well as in-person hacking.`
		},
		{
			question: `How many people can I work with?`,
			answer: `You can work by yourself or in teams of up to 4 people total.`
		},
		{
			question: `What if I don't have a team?`,
			answer: `Don't worry! You can create one the day of! We'll be leading team building 
				activities before and at the start of the event, so you can find the people you 
				vibe best with.`
		},
		{
			question: `When is HOTH ${hothNum} taking place? How long is it going to be?`,
			answer: `The hackathon will take place on ${hothDate} and it will be 12 hours long. While 
            check-in will begin at 8am and the closing ceremony will end around 11pm, the actual 
            hacking portion will be from 9am to 9pm.`
		},
		{
			question: `Where is HOTH ${hothNum} taking place?`,
			answer:
				<>
					Currently, we are planning for HOTH {hothNum} to be in-person
					with the event taking place at the {hothLocation}.
				</>
		},
		{
			question: `How do I sign up?`,
			answer: `Hit the apply button above and fill out the application! A few days before
				the event, you'll be emailed a confirmation form along with appropriate links
				and additional event information. Applications close on ${appDeadline} at 11:59pm PST.`
		},
		{
			question: `What if I have never made a project before?`,
			answer: `No worries! Throughout HOTH ${hothNum}, you'll have access to workshops on all sorts of
				topics to help you start bringing your ideas to life and mentors to support you through
				any road blocks.`
		},
		{
			question: `I have coding experience and want to make a difference at HOTH ${hothNum}. 
				How can I get involved?`,
			answer:
				<>
					We would love to have you as a mentor to answer participants&apos; technical
					questions and help them with their projects. If you are interested, send us an email
					at <Link href='mailto:hack@uclaacm.com'>hack@uclaacm.com</Link> or dm us on
					our <Link href='https://discord.gg/MStu2cnBV9'>discord server</Link>!
				</>
		},
		{
			question: `Where can I get updates on HOTH ${hothNum} and learn more about what ACM Hack is doing?`,
			answer:
				<>
					Come join us on our <Link href='https://discord.gg/MStu2cnBV9'>discord server</Link>.
					We&apos;d love to have you!
				</>
		},
		{
			question: `I have some other questions.`,
			answer:
				<>
					Send us an email at <Link href='mailto:hack@uclaacm.com'>hack@uclaacm.com</Link>!
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
