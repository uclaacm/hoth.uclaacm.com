import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../styles/PhotoCarousel.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import image0 from '../../images/carousel/image0.jpg';
import image1 from '../../images/carousel/image1.jpg';
import image2 from '../../images/carousel/image2.jpg';
import image3 from '../../images/carousel/image3.jpg';
import image4 from '../../images/carousel/image4.jpg';
import image5 from '../../images/carousel/image5.jpg';
import image6 from '../../images/carousel/image6.jpg';
import image7 from '../../images/carousel/image7.jpg';


export default function PhotoCarousel() {
	const settings = {
		dots: true,
		infinite: true,
		speed: 800,
		slidesToShow: 1,
		slidesToScroll: 1,
		className: 'slides',
	};

	const images = [image0, image1, image2, image3, image4, image5, image6, image7];

	return (
		<Slider {...settings}>
			{images.map((image, index) => (
				<LazyLoadImage
					src={image}
					alt={`Carousel ${index + 1}`}
					className='carousel-image'
					wrapperProps={{
						style: {transitionDelay: '0.4s'},
					}}
					placeholderSrc={image}
					effect='blur'
					key={index}
				/>
			))}
		</Slider>
	);
}
