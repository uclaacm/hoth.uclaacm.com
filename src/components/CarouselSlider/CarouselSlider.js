import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './gallery.css';

import useTheme from '@material-ui/core/styles/useTheme';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Img from 'gatsby-image';

export default function CarouselSlider({ imageNodes }) {
	const settings = {
		dots: true,
		infinite: true,
		speed: 800,
		slidesToShow: 1,
		slidesToScroll: 1,
		className: 'slides'
	};

	const theme = useTheme();
	const wideImg = useMediaQuery(theme.breakpoints.up('md'));
	const imageWidth = wideImg ? 2.5 : 2;

	const images = imageNodes.map(node => {
		return <Img fluid={{ ...node.childImageSharp.fluid, aspectRatio: imageWidth }} key={node.id} />;
	});

	return (
		<Slider {...settings}>
			{images}
		</Slider>
	);
}

CarouselSlider.propTypes = {
	imageNodes: PropTypes.array.isRequired
};
