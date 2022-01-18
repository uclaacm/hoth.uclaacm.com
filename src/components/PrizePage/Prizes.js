import React from 'react';
import { basename } from 'path';
import { graphql, useStaticQuery } from 'gatsby';
import ComingSoon from '../ComingSoon/ComingSoon';

export default function Prizes() {
	const data = useStaticQuery(graphql`
	{
		prizeIcons: allFile(filter: {relativePath: {glob:"prize-icons/*"}}) {
			nodes {
				relativePath
				childImageSharp {
					fluid {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
		prizeImages: allFile(filter: {relativePath: {glob:"prize-images/*"}}) {
			nodes {
				relativePath
				childImageSharp {
					fixed(height: 128) {
						...GatsbyImageSharpFixed
					}
				}
			}
		}
	}
	`);
	const iconImageMap = new Map();
	for (const { relativePath, childImageSharp } of data.prizeIcons.nodes) {
		const id = basename(relativePath).split('.')[0];
		iconImageMap.set(id, childImageSharp.fluid);
	}

	const prizeImageMap = new Map();
	for (const { relativePath, childImageSharp } of data.prizeImages.nodes) {
		const id = basename(relativePath).split('.')[0];
		prizeImageMap.set(id, childImageSharp.fixed);
	}
	return (
		<ComingSoon alignment='center'/>
	);
}
