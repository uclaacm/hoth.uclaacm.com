import React from 'react';
import { basename } from 'path';
import { graphql, useStaticQuery } from 'gatsby';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Img from 'gatsby-image';

const winners = [
	{
		title: 'Meteor Metronome',
		category: 'Best Game',
		description: `Asteroids – with rhythm. Combining the latest innovations in
			rhythm-based gaming with the classic asteroids arcade game. Meteor
			Metronome is a game in which players shoot asteroids and avoid
			collisions, but must do so to a regular beat. Players build up a combo by
			shooting with each beat, and earn points with each asteroid shot, with a
			bonus of the combo squared.`,
		link: 'https://devpost.com/software/meteor-metronome',
		id: 'meteor'
	},
	{
		title: 'Wave',
		category: 'Best Machine Learning Project',
		description: `Wave allows for people to use hand gestures to control their
			computers. Wave sits in the background as you use your device. It
			recognizes gestures to perform relevant tasks based on your activity. It
			runs completely locally on your device, so your information is kept
			private, and stores no identifying data anywhere.`,
		link: 'https://devpost.com/software/wave-m1pz20',
		id: 'wave'
	},
	{
		title: 'Bruin Dining',
		category: 'Best Design, Best React Native',
		description: `A more beautiful and insightful way to dine on the Hill. It's
			no fun going to a dining hall and being surprised or disappointed by the
			food. We made a UCLA Dining Hall Menus app with crowdsourced images and
			ratings.`,
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
		return (
			<Grid container key={item.title} spacing={2} alignItems='center'
				style={{ paddingTop: 60 }}>
				<Grid item md={5} xs={12}>
					<Img fluid={winnerImageMap.get(item.id)} />
				</Grid>
				<Grid item md={7} xs={12}>
					<Typography variant='h5'>{item.title} –{' '}
						<span style={{ fontStyle: 'italic' }}>
							{item.category}
						</span>
					</Typography>
					<Typography variant='body1' style={{ paddingBottom: 5, paddingTop: 5 }}>
						{item.description}
					</Typography>
					<Link href={item.link} target='_blank' rel='noreferrer noopener'>
						See Project
					</Link>
				</Grid>
			</Grid>
		);
	});

	return (
		<Container maxWidth='md' style={{ paddingTop: '50px', paddingBottom: '40px' }}>
			<Typography variant='h4' component='h1' style={{
				marginBottom: '-50px', fontWeight: 500
			}}>Past Winners</Typography>
			{winnerCards}
		</Container>
	);
}

export default Winners;
