import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import WorkshopPage from '../components/WorkshopPage/WorkshopPage';

function Workshops() {
	return (
		<Layout>
			<SEO title='Workshops' />
			<WorkshopPage />
		</Layout>
	);
}

export default Workshops;
