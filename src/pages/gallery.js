import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Winners from '../components/GalleryPage/Winners';

function GalleryPage() {
	return (
		<Layout>
			<SEO title='Home' />
			<Winners />
		</Layout>
	);
}

export default GalleryPage;
