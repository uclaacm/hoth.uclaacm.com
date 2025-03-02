import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../styles/Gallery.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const imageFiles = import.meta.glob('../../images/gallery-carousel/hoth-*/image*.jpg');

export default function PhotoCarousel({year}) {
	const [images, setImages] = useState([]);
	
	const settings = {
		dots: true,
		infinite: true,
		speed: 800,
		slidesToShow: 1,
		slidesToScroll: 1,
		className: '.slides',
	};

	useEffect(() => {
		const loadImages = async () => {
			setImages([]);
			
			const yearPattern = `/hoth-${year}/`;
			const yearImages = Object.keys(imageFiles)
				.filter(path => path.includes(yearPattern))
				.sort();

			const loadedImages = await Promise.all(
				yearImages.map(async (path) => {
					const module = await imageFiles[path]();
					return module.default;
				})
			);

			setImages(loadedImages.filter(Boolean));
		};

		loadImages();
	}, [year]);

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
