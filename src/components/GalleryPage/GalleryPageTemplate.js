import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../../components/layout';
import SEO from '../../components/seo';
import Gallery from '../../components/GalleryPage/Gallery';
import Winners from '../../components/GalleryPage/Winners';

function GalleryPageTemplate({ pageContext }) {
	const { winnerInfo, devpostLink, hothNames, galleryLinks, hothName } = pageContext;
	return (
		<Layout>
			<SEO title='Gallery' />
			<Gallery hothName={hothName} />
			<Winners winners={winnerInfo} devpost={devpostLink} galleryLinks={galleryLinks}
				hothNames={hothNames} hothName={hothName} />
		</Layout>
	);
}

GalleryPageTemplate.propTypes = {
	pageContext: PropTypes.shape({
		winnerInfo: PropTypes.array.isRequired,
		devpostLink: PropTypes.string.isRequired,
		hothNames: PropTypes.array.isRequired,
		galleryLinks: PropTypes.array.isRequired,
		hothName: PropTypes.string.isRequired
	}).isRequired
};

export default GalleryPageTemplate;
