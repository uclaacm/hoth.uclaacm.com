import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import CarouselSlider from '../CarouselSlider/CarouselSlider';

export default function Gallery() {
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

	return (
		<CarouselSlider imageNodes={data.carouselImages.nodes} />
	);
}
