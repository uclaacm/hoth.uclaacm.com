import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Box from '@material-ui/core/Box';
import CarouselSlider from '../CarouselSlider/CarouselSlider';

export default function Gallery() {
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

	return (
		<Box component='section' marginTop={5} paddingBottom={5} bgcolor='background.grey'>
			<CarouselSlider imageNodes={data.carouselImages.nodes} />
		</Box>
	);
}
