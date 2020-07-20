import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Gallery from '../components/GalleryPage/Gallery';
import Winners from '../components/GalleryPage/Winners';

function GalleryPage() {
	return (
		<Layout>
			<SEO title='Gallery' />
			<Gallery />
			<Winners />
		</Layout>
	);
}

export default GalleryPage;
