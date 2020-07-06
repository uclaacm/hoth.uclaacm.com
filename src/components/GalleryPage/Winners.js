import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import useTheme from '@material-ui/core/styles/useTheme';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import makeStyles from '@material-ui/styles/makeStyles';

import MeteorImg from './images/meteor.jpg';
import WaveImg from './images/wave.png';

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
			private, and stores no identifying data anywhere. Although this beta
			version runs only on a Mac, the system can be easily expanded to support
			other devices as well.`,
		link: 'https://devpost.com/software/wave-m1pz20',
		image: WaveImg
	}
];

const useStyles = makeStyles(theme => ({
	projectImg: {
		width: '40%',
		marginRight: 20,
		[theme.breakpoints.down('sm')]: {
			width: '100%',
			padding: '10px 0px'
		}
	}
}));

function Winners() {
	const classes = useStyles();
	const theme = useTheme();
	const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

	const winnerCards = winners.map(item => {
		return (
			<Box
				display='flex'
				flexDirection={isSmall ? 'column' : 'row' }
				key={item.title}
				alignItems='flex-start'
				style={{ marginTop: 20 }}
			>
				<img src={item.image} className={classes.projectImg} />
				<div>
					<Typography variant='h5'>{item.title} –{' '}
						<span style={{ fontStyle: 'italic' }}>
							{item.category}
						</span>
					</Typography>
					<Typography variant='body1'>{item.description}</Typography>
					<Link href={item.link} target='_blank' rel='noreferrer noopener'>
						See Project
					</Link>
				</div>
			</Box>
		);
	});

	return (
		<Container maxWidth='md' style={{ paddingTop: '100px' }}>
			{winnerCards}
		</Container>
	);
}

export default Winners;
