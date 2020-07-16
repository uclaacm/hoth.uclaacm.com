import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import makeStyles from '@material-ui/styles/makeStyles';

import MeteorImg from './images/winners/meteor.jpg';
import WaveImg from './images/winners/wave.jpg';

const winners = [
	{
		title: 'Meteor Metronome',
		category: 'Best Game',
		description: `Asteroids - with rhythm. Combining the latest innovations in
			rhythm-based gaming with the classic asteroids arcade game. Meteor
			Metronome is a game in which players shoot asteroids and avoid
			collisions, but must do so to a regular beat. Players build up a combo by
			shooting with each beat, and earn points with each asteroid shot, with a
			bonus of the combo squared.`,
		link: 'https://devpost.com/software/meteor-metronome',
		image: MeteorImg
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
		image: WaveImg
	}
];

const useStyles = makeStyles(theme => ({
	projectImg: {
		width: '100%',
		[theme.breakpoints.down('xs')]: {
			width: '100%',
			padding: '10px 0px'
		}
	}
}));

function Winners() {
	const classes = useStyles();

	const winnerCards = winners.map(item => {
		return (
			<Grid container key={item.title} spacing={2} alignItems='center'
				style={{ paddingTop: 60 }}>
				<Grid item md={5} sm={12}>
					<img src={item.image} className={classes.projectImg} />
				</Grid>
				<Grid item md={7} sm={12}>
					<Typography variant='h5'>{item.title} –{' '}
						<span style={{ fontStyle: 'italic' }}>
							{item.category}
						</span>
					</Typography>
					<Typography variant='body1'>{item.description}</Typography>
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
				marginBottom: '-50px'
			}}>Past Winners</Typography>
			{winnerCards}
		</Container>
	);
}

export default Winners;
