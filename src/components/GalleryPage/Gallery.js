import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';
import CarouselSlider from '../CarouselSlider/CarouselSlider';

Gallery.propTypes = {
	hothName: PropTypes.string.isRequired
};

export default function Gallery({ hothName }) {
	const data = useStaticQuery(graphql`
		{
			carouselImages: allFile(filter: {relativePath: {glob:"gallery-carousel/*/*"}}) {
				nodes {
					id
					relativePath
					childImageSharp {
						fluid {
							...GatsbyImageSharpFluid_withWebp
						}
					}
				}
			}
		}
	`);

	const hothNameFolder = hothName.replace(' ', '-').toLowerCase();
	const currentHothImages = data.carouselImages.nodes.filter(
		node => node.relativePath.startsWith(`gallery-carousel/${hothNameFolder}/`)
	);

	return (
		<CarouselSlider imageNodes={currentHothImages} />
	);
}
