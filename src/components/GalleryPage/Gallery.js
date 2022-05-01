import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import CarouselSlider from '../CarouselSlider/CarouselSlider';
import PropTypes from 'prop-types';

export default function Gallery({ hothName }) {
	const data = useStaticQuery(graphql`
		{
			carouselImages: allFile(filter: {relativePath: {glob:"gallery-carousel/${hothName}/*"}}) {
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

	return (
		<CarouselSlider imageNodes={data.carouselImages.nodes} />
	);
}

Gallery.propTypes = {
	hothName: PropTypes.string.isRequired
};
