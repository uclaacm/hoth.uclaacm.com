import React from 'react';
import useTitle from '../components/General/useTitle';
import '../styles/Prizes.css';
import prizeData from '../data/PrizeData'
import squiggle from '../images/prizes/squiggle.svg';
import overallIcon from '../images/prizes/overall.png';
import webIcon from '../images/prizes/web.png';
import mobileIcon from '../images/prizes/mobile.png';
import gameIcon from '../images/prizes/game.png';
import ieIcon from '../images/prizes/ie.png';
import begIcon from '../images/prizes/beg.png';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function Prizes() {
	useTitle(' | Prizes');

	const getPrizeIcon = (type) => {
		switch(type) {
			case 'overall': return overallIcon;
			case 'web': return webIcon;
			case 'mobile': return mobileIcon;
			case 'game': return gameIcon;
			case 'ie': return ieIcon;
			case 'beginner': return begIcon;
			default: return overallIcon;
		}
	};

	return (
		<div id='prizes'>
			<h1 className='prizes-title'>Prize Tracks</h1>
			<div className='prizes-container'>
				<p className='prizes-subtitle'>Below are the total prize amounts for each prize track! :)</p>
				<div className='prize-grid'>
				{prizeData.map(prize => (
					<div className='prize-card' key={prize.id}>
					<LazyLoadImage
						src={getPrizeIcon(prize.type)}
						alt={`${prize.name} Icon`}
						className='prize-card-icon'
					/>
					<h2>{prize.name}</h2>
					<LazyLoadImage src={squiggle} alt='Squiggle' className='card-squiggle' />
					<p className='prize-label'>{prize.label || 'PRIZE'}</p>
					<p className='prize-amount'>{prize.amount}</p>
					</div>
					))}
				</div>
			</div>
		</div>
	);
}
