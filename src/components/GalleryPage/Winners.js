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
	const classes = useStyles()

	const winner=winners.map(w=><p>{w.category}: {w.description}</p>)

	return (
		<div>
			<p>Past Winners</p>
			{winner}
		</div>
	);
};

export default Winners
