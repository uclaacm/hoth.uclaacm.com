import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../../components/layout';
import SEO from '../../components/seo';
import Gallery from '../../components/GalleryPage/Gallery';
import Winners from '../../components/GalleryPage/Winners';

function GalleryPageTemplate({ pageContext }) {
	const { winnerInfo } = pageContext;
	return (
		<Layout>
			<SEO title='Gallery' />
			<Gallery />
			<Winners winners={winnerInfo} />
		</Layout>
	);
}

GalleryPageTemplate.propTypes = {
	pageContext: PropTypes.objectOf(PropTypes.array.isRequired).isRequired
};

export default GalleryPageTemplate;
