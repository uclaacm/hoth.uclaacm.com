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
		title: 'Meteor Metronome',
		category: 'Best Game',
		description: `Asteroids – with rhythm. Combining the latest innovations in
			rhythm-based gaming with the classic asteroids arcade game. Meteor
			Metronome is a game in which players shoot asteroids and avoid
			collisions, but must do so to a regular beat.`,
		link: 'https://devpost.com/software/meteor-metronome',
		id: 'meteor'
	},
	{
		title: 'Wave',
		category: 'Best Machine Learning',
		description: `Wave allows for people to use hand gestures to control their
			computers. Wave sits in the background as you use your device. It
			recognizes gestures to perform relevant tasks based on your activity.`,
		link: 'https://devpost.com/software/wave-m1pz20',
		id: 'wave'
	},
	{
		title: 'Bruin Dining',
		category: 'Best Design, Best React Native',
		description: `A more beautiful and insightful way to dine on the Hill. It's
			no fun going to a dining hall and being surprised or disappointed by the
			food.`,
		link: 'https://devpost.com/software/bruin-dining-table-16',
		id: 'bruindining'
	},
	{
		title: 'SYFGames',
		category: 'Best Hack',
		description: `A multi-platform game that you can play with friends to
			compete and see who can recognize music the most quickly and accurately!`,
		link: 'https://devpost.com/software/spuckfotify',
		id: 'syfgames'
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
							...GatsbyImageSharpFluid
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
						style={{ fontWeight: theme.typography.fontWeightRegular,
							textTransform: 'uppercase',
							fontSize: '1em',
							letterSpacing: '.5px' }}>
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
