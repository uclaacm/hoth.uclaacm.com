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
			answer: `A hackathon is an event where individuals get together for a
				short period of time to work on a project. These events usually last 24
				or 36 hours and take place during the weekend. Hack off the Hill is
				designed to simulate a real hackathon over a 12-hour period.`
		},
		{
			question: `Who can join?`,
			answer: `Any UCLA student can join! And you don’t necessarily have to be
				a programmer – designers, entrepreneurs, and even those who are curious
				as to what a hackathon is like can attend. Whether you’ve never been to
				a hackathon before or you’ve been to several, everyone is welcome to
				participate in Hack off the Hill.`
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
						href='https://hoth6.devpost.com/submissions'>HOTH 6</Link>, <Link
						href='https://hoth5.devpost.com/submissions'>HOTH 5</Link>, and <Link
						href='https://hoth4.devpost.com/submissions'>HOTH 4</Link>.
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
