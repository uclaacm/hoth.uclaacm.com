import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../styles/Gallery.css';

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
					try {
						const module = await imageFiles[path]();
						return module.default;
					} catch (err) {
						console.error(`Failed to load image ${path}:`, err);
						return undefined;
					}
				})
			);

			setImages(loadedImages.filter(img => img !== undefined));
		};

		loadImages();
	}, [year]);

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
