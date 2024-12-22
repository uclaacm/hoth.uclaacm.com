import React from 'react';
import '../../styles/Home.css';
import hothBanner from '../../images/hothXI-banner.png';

export default function Banner() {
	return (
		<div className='banner-container'>
			<div className='banner-content'>
				<img className='hoth-banner' src={hothBanner} alt='HOTH Banner' />
			</div>
		</div>
	);
}
