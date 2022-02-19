import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../../components/layout';
import SEO from '../../components/seo';
import Gallery from '../../components/GalleryPage/Gallery';
import Winners from '../../components/GalleryPage/Winners';

function GalleryPageTemplate({ pageContext }) {
	const { winnerInfo, devpostLink, hothNum, hothCount } = pageContext;
	return (
		<Layout>
			<SEO title='Gallery' />
			<Gallery />
			<Winners winners={ winnerInfo } devpost={ devpostLink } hothNum={ hothNum } hothCount={ hothCount }/>
		</Layout>
	);
}

GalleryPageTemplate.propTypes = {
	pageContext: PropTypes.shape({
		winnerInfo: PropTypes.array.isRequired,
		devpostLink: PropTypes.string.isRequired,
		hothNum: PropTypes.number.isRequired,
		hothCount: PropTypes.number.isRequired
	}).isRequired
};

export default GalleryPageTemplate;
