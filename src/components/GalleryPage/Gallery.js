import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import Container from '@material-ui/core/Container';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './gallery.css';

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
			carouselImages: allFile(filter: {relativePath: {glob:"carousel/*"}}) {
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

	const image= []

	for (let i =0; i<=data.carouselImages.nodes;i++) {
		let node = data.carouselImages.nodes[i]
		image.push(<Img fluid={{ ...node.childImageSharp.fluid, aspectRatio: 2 }} key={node.id} />);
	}

	return (
		<Container maxWidth='md'>
			<Slider {...settings}>
				{image}
			</Slider>
		</Container>
	);
}
