import React from 'react';
import '../../styles/Home.css';
import hothBanner from '../../images/hothXI-banner.png';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function Banner() {
	return (
		<div className='banner-container'>
			<LazyLoadImage 
				className='hoth-banner' 
				src={hothBanner} 
				alt='HOTH Banner' 
				placeholderSrc={hothBanner} 
				effect='blur'
			/>

			<div className='banner-text'>
				<h1>
					HOTH <span className='gradient-text'>XII</span>
				</h1>

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
