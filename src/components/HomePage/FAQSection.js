import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Typography, Link } from '@material-ui/core';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';

import Add from '@material-ui/icons/Add';
import Remove from '@material-ui/icons/Remove';

const useStyles = makeStyles({
	title: {
		fontWeight: 'bold'
	},
	question: {
		color: '#FB4469',
		fontWeight: 'bold'
	},
	link: {
		color: '#FB4469',
		fontWeight: 'bold'
	}
})

const ExpansionPanel = withStyles({
  root: {
    borderTop: '1px solid rgba(0, 0, 0, 1)',
    borderBottom: '1px solid rgba(0, 0, 0, 1)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    // marginBottom: -1,
    minHeight: 20,
    '&$expanded': {
      minHeight: 20,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0px',
    },
  },
	expanded: {},
	expandIcon: {
		'&$expanded': {
			transform: 'rotate(180deg)',
		},
	},
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles((theme) => ({
  root: {},
}))(MuiExpansionPanelDetails);

function FAQSection() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
	};

	const classes = useStyles();

	const FAQs = [
		{
			'question': `What's a hackathon?`,
			'answer':
				<Typography variant='p'>
					A hackathon is an event where individuals get together for a short period of time to work on a project. These events usually last 24 or 36 hours and take place during the weekend. Hack on the Hill is designed to simulate a real hackathon over a 12 hour period.
				</Typography>
		},
		{
			'question': `Who can join?`,
			'answer':
				<Typography variant='p'>
					Any UCLA student can join! And you don’t necessarily have to be a programmer - designers, entrepreneurs, and even those who are curious as to what a hackathon is like can attend. Whether you’ve never been to a hackathon before or you’ve been to several, everyone is welcome to participate in Hack on the Hill.
				</Typography>
		},
		{
			'question': `What do I bring?`,
			'answer':
				<Typography variant='p'>
					All you need is your laptop, charger, and any other materials you plan to bring for your project. We will not be providing laptops for this hackathon.
				</Typography>
		},
		{
			'question': `How many people can I work with?`,
			'answer':
				<Typography variant='p'>
						Submissions must be by groups with a maximum size of 4 people.
				</Typography>
		},
		{
			'question': `How do I sign up?`,
			'answer':
			  <Typography variant='p'>
					Hit the sign-up button above and fill out the form. After the deadline has passed, you will be emailed a confirmation that will ask for additional information. Sign up as soon as possible as space is limited!
				</Typography>
		},
		{
			'question': `What can I possibly build in 12 hours?!`,
			'answer':
				<Typography variant='p'>
					Don't think it's possible? Check out previous submissions from <Link href='https://hoth6.devpost.com/submissions' className={classes.link}>HOTH 6</Link>, <Link href='https://hoth5.devpost.com/submissions' className={classes.link}>HOTH 5</Link>, and <Link href='https://hoth4.devpost.com/submissions' className={classes.link}>HOTH 4</Link>.
				</Typography>

		}
	];

	let FAQComponents = [];
	let i = 1;
	FAQs.forEach(({question, answer}) => {
		let panelName = 'panel' + i.toString();
		FAQComponents.push(
			<ExpansionPanel square expanded={expanded === panelName} onChange={handleChange(panelName)}>
				<ExpansionPanelSummary expandIcon={expanded === panelName ? <Remove /> : <Add />} aria-controls={panelName + '-content'} id={panelName + '-header'}>
					<Typography variant='p' className={classes.question}>{question}</Typography>
				</ExpansionPanelSummary>
				<ExpansionPanelDetails>
					{answer}
				</ExpansionPanelDetails>
			</ExpansionPanel>
		);
		i++;
	});

  return (
		<>
			<Typography
				variant='h5'
				align='center'
				component='h5'
				className={classes.title}
			>
				Frequently Asked Questions (FAQ)
			</Typography>
			{FAQComponents}
		</>
  );
}

export default FAQSection;
