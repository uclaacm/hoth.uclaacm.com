import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import useTheme from '@material-ui/core/styles/useTheme';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Slider from '../CarouselSlider/CarouselSlider';

export default function Gallery() {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		className: 'slides'
	};

	const data = useStaticQuery(graphql`
		{
			carouselImages: allFile(filter: {relativePath: {glob:"gallery-carousel/*"}}) {
				nodes {
					id
					relativePath
					childImageSharp {
						fluid {
							...GatsbyImageSharpFluid
						}
					}
				}
			}
		}
	`);

	const theme = useTheme();
	const wideImg = useMediaQuery(theme.breakpoints.up('md'));
	const imageWidth = wideImg ? 2.5 : 2;

	const images = data.carouselImages.nodes.map(node => {
		return <Img fluid={{ ...node.childImageSharp.fluid, aspectRatio: imageWidth }} key={node.id} />;
	});

	return (
		<Slider {...settings}>
			{images}
		</Slider>
	);
}
