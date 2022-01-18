import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { basename } from 'path';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useTheme from '@material-ui/core/styles/useTheme';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const winners = [
	{
		title: 'Nudge',
		category: 'Best Overall Hack',
		description: `Nudge is the social self-care habit tracker you never knew you needed. Show friends you care by 
		sending them personalized nudges to keep up with healthy habits. Grow nudges into deeper conversations.`,
		link: 'https://devpost.com/software/nudge-wprc72',
		id: 'nudge'
	},
	{
		title: 'EmoSign',
		category: 'Best Web Hack',
		description: `To translate sign to language. To translate text to emotion. To connect us with people who need
		 assistance in communication`,
		link: 'https://devpost.com/software/emosign',
		id: 'emosign'
	},
	{
		title: 'EyeMotion',
		category: 'Best Web Hack',
		description: `EyeMotion is a meditation app that analyzes eye movement to provide personalized feedback about
		 the quality of one's meditation, such as by detecting restlessness, anxiety, or negative emotion.`,
		link: 'https://devpost.com/software/eyemotion',
		id: 'eyemotion'
	},
	{
		title: 'Reassure',
		category: 'You Do You',
		description: `Ever had a trouble and not been able to share it? Ever just needed to vent a bit? Then you just
		 might love Reassure! With Reassure, you can anonymously disclose your troubles and receive support.`,
		link: 'https://devpost.com/software/reassure',
		id: 'reassure'
	},
	{
		title: 'Clothes With Care',
		category: 'Best Mobile Hack',
		description: `Our app provides the platform for a neighborhood clothes exchange program, enabling users to 
		skip the hassle, financial obstacles, and environmental impact of buying new clothes.`,
		link: 'https://devpost.com/software/clothes-with-care',
		id: 'clotheswithcare'
	},
	{
		title: 'Mammal Mayhem',
		category: 'Best Game',
		description: `Mammal Mayhem is a cutesy game designed to provide casual relief to its players.`,
		link: 'https://devpost.com/software/mammal-mayhem',
		id: 'mammalmayhem'
	},
	{
		title: 'Dusk to Dawn',
		category: 'Best Design',
		description: `Being alone and socially-deprived during quarantine makes each day quite monotonous. Dusk to 
		Dawn aims to help by allowing users to wake up and fall asleep to voice messages sent by friends.`,
		link: 'https://devpost.com/software/dusk-to-dawn',
		id: 'dusktodawn'
	}
];

function Winners() {
	const theme = useTheme();
	const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

	const data = useStaticQuery(graphql`
		{
			winnerImages: allFile(filter: {relativePath: {glob:"gallery-winners/*"}}) {
				nodes {
					relativePath
					childImageSharp {
						fluid {
							...GatsbyImageSharpFluid_withWebp
						}
					}
				}
			}
		}
	`);

	const winnerImageMap = new Map();
	for (const { relativePath, childImageSharp } of data.winnerImages.nodes) {
		const id = basename(relativePath).split('.')[0];
		winnerImageMap.set(id, childImageSharp.fluid);
	}

	const winnerCards = winners.map(item => {
		const image = winnerImageMap.get(item.id);
		return (
			<Grid item key={item.id} xs={12} sm={8} md={6}
				style={{ paddingBottom: theme.spacing(isSmall ? 4 : 8),
					display: 'flex', flexDirection: 'column' }}>
				<Img fluid={{ ...image, aspectRatio: 1.5 }} style={{ borderRadius: '14px', marginBottom: '1em' }}/>
				<hgroup>
					<Typography variant='h5' component='h2'>{item.title}</Typography>
					<Typography variant='subtitle1' component='h3'
						style={{
							textTransform: 'uppercase',
							fontSize: '1em',
							letterSpacing: '.5px'
						}}
					>
						{item.category}
					</Typography>
				</hgroup>
				<Typography variant='body1' style={{ padding: '0.5em 0 1em' }}>
					{item.description}
				</Typography>
				<Button variant='contained' disableElevation color="secondary" component='a'
					href={item.link} target='_blank' rel='noreferrer noopener'
					style={{ textTransform: 'none', padding: '4px 1.5em', maxWidth: 'fit-content' }}>
					See Project
				</Button>
			</Grid>
		);
	});

	return (
		<Container maxWidth='md' style={{ marginBottom: theme.spacing(8) }}>
			<Typography variant='h4' component='h1'
				style={{ fontWeight: theme.typography.fontWeightBold,
					paddingTop: theme.spacing(isSmall ? 4 : 8),
					paddingBottom: theme.spacing(isSmall ? 4 : 8) }}>
				Past Winners 🎉
			</Typography>
			<Grid container spacing={8} justify='center'>
				{winnerCards}
			</Grid>
		</Container>
	);
}

export default Winners;
