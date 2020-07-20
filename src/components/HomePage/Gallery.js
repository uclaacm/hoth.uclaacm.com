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
		speed: 800,
		slidesToShow: 1,
		slidesToScroll: 1,
		className: 'slides'
	};

	const data = useStaticQuery(graphql`
		{
			carouselImages: allFile(filter: {relativePath: {glob:"homepage-carousel/*"}}) {
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
	const imageWidth = wideImg ? 3 : 2;

	const images = data.carouselImages.nodes.map(node => {
		return <Img fluid={{ ...node.childImageSharp.fluid, aspectRatio: imageWidth }} key={node.id} />;
	});

	return (
		<div style={{ paddingTop: 40, paddingBottom: 40 }}>
			<Slider {...settings}>
				{images}
			</Slider>
		</div>
	);
}
