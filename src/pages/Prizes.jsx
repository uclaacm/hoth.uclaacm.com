import React from 'react';
import useTitle from '../components/General/useTitle';
import '../styles/Prizes.css';
import squiggle from '../images/prizes/squiggle.svg';
import overallIcon from '../images/prizes/overall.png';
import webIcon from '../images/prizes/web.png';
import mobileIcon from '../images/prizes/mobile.png';
import gameIcon from '../images/prizes/game.png';
import ieIcon from '../images/prizes/ie.png';
import begIcon from '../images/prizes/beg.png';

export default function Prizes() {
	useTitle(' | Prizes');

	return (
		<div id='prizes'>
			<h1 className='prizes-title'>Prize Tracks</h1>
			<div className='prizes-container'>
				<p className='prizes-subtitle'>Below are the total prize amounts for each prize track! :)</p>

				<div className='prize-grid'>
					{/* Best Overall */}
					<div className='prize-card'>
						<div className='prize-card-icon-circle'>
							<img
								src={overallIcon}
								alt='Trophy Icon'
								className='prize-card-icon'
							/>
						</div>
						<h2>Best Overall</h2>
						<img src={squiggle} alt='Squiggle' className='card-squiggle' />
						<p className='prize-label'>PRIZE</p>
						<p className='prize-amount'>$150 Amazon Gift Card</p>
					</div>

					{/* Best Web */}
					<div className='prize-card'>
						<div className='prize-card-icon-circle'>
							<img src={webIcon} alt='Web Icon' className='prize-card-icon' />
						</div>
						<h2>Best Web</h2>
						<img src={squiggle} alt='Squiggle' className='card-squiggle' />
						<p className='prize-label'>PRIZE</p>
						<p className='prize-amount'>$80 Amazon Gift Card</p>
					</div>

					{/* Best Mobile */}
					<div className='prize-card'>
						<div className='prize-card-icon-circle'>
							<img
								src={mobileIcon}
								alt='Mobile Icon'
								className='prize-card-icon'
							/>
						</div>
						<h2>Best Mobile</h2>
						<img src={squiggle} alt='Squiggle' className='card-squiggle' />
						<p className='prize-label'>PRIZE</p>
						<p className='prize-amount'>$80 Amazon Gift Card</p>
					</div>

					{/* Best Game */}
					<div className='prize-card'>
						<div className='prize-card-icon-circle'>
							<img src={gameIcon} alt='Game Icon' className='prize-card-icon' />
						</div>
						<h2>Best Game</h2>
						<img src={squiggle} alt='Squiggle' className='card-squiggle' />
						<p className='prize-label'>PRIZE</p>
						<p className='prize-amount'>$80 Amazon Gift Card</p>
					</div>

					{/* Best in Intersectional Environmentalism */}
					<div className='prize-card'>
						<div className='prize-card-icon-circle'>
							<img
								src={ieIcon}
								alt='Intersectional Environmentalism Icon'
								className='prize-card-icon'
							/>
						</div>
						<h2>Best in Intersectional Environmentalism</h2>
						<img src={squiggle} alt='Squiggle' className='card-squiggle' />
						<p className='prize-label'>PRIZE</p>
						<p className='prize-amount'>
							2 Camping Hammocks and 2 Wireless Charging Pads
						</p>
					</div>

					{/* Best Beginner */}
					<div className='prize-card'>
						<div className='prize-card-icon-circle'>
							<img
								src={begIcon}
								alt='Beginner Icon'
								className='prize-card-icon'
							/>
						</div>
						<h2>Best Beginner</h2>
						<img src={squiggle} alt='Squiggle' className='card-squiggle' />
						<p className='prize-label'>PRIZE</p>
						<p className='prize-amount'>4 Wireless 3-in-1 Charging Stations</p>
					</div>
				</div>
			</div>
		</div>
	);
}
