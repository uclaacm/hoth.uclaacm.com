import React from 'react';
import '../../styles/Home.css';
import hothBanner from '../../images/hothXIII-banner.png';
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

		</div>
	);
}
