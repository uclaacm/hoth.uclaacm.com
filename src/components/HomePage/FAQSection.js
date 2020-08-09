import React from 'react';
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

function FAQSection() {
	const classes = useStyles();
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
				a programmer – designers, entrepreneurs, and even those who are curious
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
						href='https://hoth6.devpost.com/submissions'>HOTH 6</Link>, <Link
						href='https://hoth5.devpost.com/submissions'>HOTH 5</Link>, and <Link
						href='https://hoth4.devpost.com/submissions'>HOTH 4</Link>.
				</>
		}
	];

	const faqComponents = faqs.map(({ question, answer }, i) => {
		const panelName = 'faqPanel' + i;
		return (
			<Accordion
				key={panelName}
				square
				expanded={expanded === panelName}
				onChange={handleChange(panelName)}>
				<AccordionSummary
					expandIcon={expanded === panelName ? <Remove /> : <Add />}
					aria-controls={panelName + '-content'}
					id={panelName + '-header'}>
					<Typography variant='body1' className={classes.question}>
						{question}
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography variant='body1'>
						{answer}
					</Typography>
				</AccordionDetails>
			</Accordion>
		);
	});

	const theme = useTheme();

	return (
		<Box component='section' paddingY={{ xs: 8, md: 10 }} bgcolor='background.grey'>
			<Container maxWidth='md'>
				<Box component='hgroup' paddingBottom={{ xs: 4, md: 8 }}>
					<Typography
						variant='h4'
						component='h2'
						style={{ fontWeight: 'bold' }}>
						FAQ
					</Typography>
					<Typography
						variant='h6'
						component='h3'
						style={{ color: theme.palette.grey[600] }}>
						Frequently Asked Questions
					</Typography>
				</Box>
				{faqComponents}
			</Container>
		</Box>
	);
}

export default FAQSection;
