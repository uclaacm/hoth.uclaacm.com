import React from 'react';
import { Accordion, AccordionItem as Item } from '@szhsin/react-accordion';
import { Link } from 'react-router-dom';
import '../../styles/FAQSection.css';

const hothNum = 'XII';
const hothDate = 'Sunday, March 2, 2025';
const hothLocation = 'Covel Commons, Grand Horizon Ballroom';
const appDeadline = 'Tuesday, February 25, 2025';
const discordLink = 'https://discord.gg/MStu2cnBV9';
const email = 'hack@uclaacm.com';
const projectGalleryLink = 'https://hothx.devpost.com/project-gallery';

const faqs = [
	{
		question: "What's a hackathon?",
		answer: (
			<>
				A hackathon is an event during which people from different backgrounds
				come together to create a project from start to finish in a limited time
				frame. Check out some examples from last year's HOTH{' '}
				<Link to={projectGalleryLink}>here</Link>!
			</>
		),
	},
	{
		question: 'Who can join?',
		answer: (
			<>
				Applications for HOTH {hothNum} are open to anyone! However, we are
				prioritizing UCLA students for our prize tracks as well as in-person
				hacking.
			</>
		),
	},
	{
		question: 'How many people can I work with?',
		answer: <>You can work by yourself or in teams of up to 4 people total.</>,
	},
	{
		question: "What if I don't have a team?",
		answer: (
			<>
				Don't worry! You can create one the day of! We'll be leading
				team-building activities before and at the start of the event, so you
				can find the people you vibe best with.
			</>
		),
	},
	{
		question: `When is HOTH ${hothNum} taking place? How long is it going to be?`,
		answer: (
			<>
				The hackathon will take place on {hothDate} and it will be 12 hours
				long. While check-in will begin at 8 am and the closing ceremony will
				end around 11 pm, the actual hacking portion will be from 9 am to 9 pm.
			</>
		),
	},
	{
		question: `Where is HOTH ${hothNum} taking place?`,
		answer: (
			<>
				Currently, we are planning for HOTH {hothNum} to be in-person with the
				event taking place at the {hothLocation}.
			</>
		),
	},
	{
		question: 'How do I sign up?',
		answer: (
			<>
				Hit the apply button above and fill out the application! A few days
				before the event, you'll be emailed a confirmation form along with
				appropriate links and additional event information. Applications close
				on {appDeadline} at 11:59 pm PST.
			</>
		),
	},
	{
		question: 'What if I have never made a project before?',
		answer: (
			<>
				No worries! Throughout HOTH {hothNum}, you'll have access to workshops
				on all sorts of topics to help you start bringing your ideas to life and
				mentors to support you through any roadblocks.
			</>
		),
	},
	{
		question: `I have coding experience and want to make a difference at HOTH ${hothNum}. How can I get involved?`,
		answer: (
			<>
				We would love to have you as a mentor to answer participants' technical
				questions and help them with their projects. If you are interested, send
				us an email at <Link to={`mailto:${email}`}>{email}</Link> or DM us on
				our <Link to={discordLink}>Discord server</Link>!
			</>
		),
	},
	{
		question: `Where can I get updates on HOTH ${hothNum} and learn more about what ACM Hack is doing?`,
		answer: (
			<>
				Come join us on our <Link to={discordLink}>Discord server</Link>. We'd
				love to have you!
			</>
		),
	},
	{
		question: 'I have some other questions.',
		answer: (
			<>
				Send us an email at <Link to={`mailto:${email}`}>{email}</Link>!
			</>
		),
	},
];

const AccordionItem = ({ header, ...rest }) => (
	<Item
		{...rest}
		header={
			<>
				{header}
				<svg
					className='chevron'
					xmlns='http://www.w3.org/2000/svg'
					width='24'
					height='24'
					viewBox='0 0 24 24'
					strokeWidth='2'
					stroke='currentColor'
					fill='none'
					strokeLinecap='round'
					strokeLinejoin='round'
				>
					<title>Expand/Collapse</title>
					<path stroke='none' d='M0 0h24v24H0z' fill='none' />
					<polyline points='6 9 12 15 18 9' />
				</svg>
			</>
		}
		className='item'
		buttonProps={{
			className: ({ isEnter }) => `itemBtn ${isEnter ? 'itemBtnExpanded' : ''}`,
		}}
		contentProps={{ className: 'itemContent' }}
		panelProps={{ className: 'itemPanel' }}
	/>
);

export default function FAQSection() {
	return (
		<section className='faq-section'>
			<div className='faq-header'>
				<h2>FAQ</h2>
				<h3>Frequently Asked Questions</h3>
			</div>
			<Accordion transition transitionTimeout={250}>
				{faqs.map((faq, index) => (
					<AccordionItem key={index} header={faq.question}>
						{faq.answer}
					</AccordionItem>
				))}
			</Accordion>
		</section>
	);
}
