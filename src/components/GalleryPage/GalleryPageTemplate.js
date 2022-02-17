import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../../components/layout';
import SEO from '../../components/seo';
import Gallery from '../../components/GalleryPage/Gallery';
import Winners from '../../components/GalleryPage/Winners';

function GalleryPageTemplate({ pageContext }) {
	const { winnerInfo, devpostInfo } = pageContext;
	return (
		<Layout>
			<SEO title='Gallery' />
			<Gallery />
			<Winners winners={ winnerInfo } devpost={ devpostInfo } />
		</Layout>
	);
}

GalleryPageTemplate.propTypes = {
	pageContext: PropTypes.shape({
		winnerInfo: PropTypes.array.isRequired,
		devpostInfo: PropTypes.string
	}).isRequired
};

export default GalleryPageTemplate;
