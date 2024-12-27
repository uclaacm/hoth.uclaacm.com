import React from 'react';
import '../../styles/Home.css';
import hothBanner from '../../images/hothXI-banner.png';

export default function Banner() {
	return (
		<div className='banner-container'>
			<img className='hoth-banner' src={hothBanner} alt='HOTH Banner' />

			<div className='banner-text'>
				<h1>HOTH XI</h1>
				<div className='banner-subtext'>
					<p>
						<strong>Location:</strong> Carnesale Commons, Palisades Room
					</p>
					<p>
						<strong>Date:</strong> Sunday, March 3, 2024
					</p>
				</div>
			</div>
		</div>
	);
}
