import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../styles/PhotoCarousel.css';

import hoth3_image1 from '../../images/gallery-carousel/hoth-3/image1.jpg';
import hoth3_image2 from '../../images/gallery-carousel/hoth-3/image2.jpg';
import hoth3_image3 from '../../images/gallery-carousel/hoth-3/image3.jpg';
import hoth3_image4 from '../../images/gallery-carousel/hoth-3/image4.jpg';
import hoth3_image5 from '../../images/gallery-carousel/hoth-3/image5.jpg';
import hoth3_image6 from '../../images/gallery-carousel/hoth-3/image6.jpg';
import hoth3_image7 from '../../images/gallery-carousel/hoth-3/image7.jpg';
import hoth3_image8 from '../../images/gallery-carousel/hoth-3/image8.jpg';
import hoth3_image9 from '../../images/gallery-carousel/hoth-3/image9.jpg';

import hoth7_image1 from '../../images/gallery-carousel/hoth-7/image1.jpg';
import hoth7_image2 from '../../images/gallery-carousel/hoth-7/image2.jpg';
import hoth7_image3 from '../../images/gallery-carousel/hoth-7/image3.jpg';
import hoth7_image4 from '../../images/gallery-carousel/hoth-7/image4.jpg';
import hoth7_image5 from '../../images/gallery-carousel/hoth-7/image5.jpg';
import hoth7_image6 from '../../images/gallery-carousel/hoth-7/image6.jpg';
import hoth7_image7 from '../../images/gallery-carousel/hoth-7/image7.jpg';
import hoth7_image8 from '../../images/gallery-carousel/hoth-7/image8.jpg';
import hoth7_image9 from '../../images/gallery-carousel/hoth-7/image9.jpg';

import hoth9_image1 from '../../images/gallery-carousel/hoth-9/image1.jpg';
import hoth9_image2 from '../../images/gallery-carousel/hoth-9/image2.jpg';
import hoth9_image3 from '../../images/gallery-carousel/hoth-9/image3.jpg';

import hothX_image1 from '../../images/gallery-carousel/hoth-X/image1.jpg';
import hothX_image2 from '../../images/gallery-carousel/hoth-X/image2.jpg';
import hothX_image3 from '../../images/gallery-carousel/hoth-X/image3.jpg';
import hothX_image4 from '../../images/gallery-carousel/hoth-X/image4.jpg';
import hothX_image5 from '../../images/gallery-carousel/hoth-X/image5.jpg';

export default function PhotoCarousel({year}) {
	const settings = {
		dots: true,
		infinite: true,
		speed: 800,
		slidesToShow: 1,
		slidesToScroll: 1,
		className: '.slides',
	};

	let images = [];

	if (year === '3') {
		images = [hoth3_image1, hoth3_image2, hoth3_image3, hoth3_image4, hoth3_image5, hoth3_image6, hoth3_image7, hoth3_image8, hoth3_image9];
	} else if (year === '7') {
		images = [hoth7_image1, hoth7_image2, hoth7_image3, hoth7_image4, hoth7_image5, hoth7_image6, hoth7_image7, hoth7_image8, hoth7_image9];
	} else if (year === '9') {
		images = [hoth9_image1, hoth9_image2, hoth9_image3];
	} else if (year === 'X') {
		images = [hothX_image1, hothX_image2, hothX_image3, hothX_image4, hothX_image5];
	}

	return (
		<Slider {...settings}>
			{images.map((image, index) => (
				<img
					src={image}
					alt={`Carousel ${index + 1}`}
					className='carousel-image'
					key={index}
				/>
			))}
		</Slider>
	);
}
