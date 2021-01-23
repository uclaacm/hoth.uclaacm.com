import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Workshop from '../components/WorkshopPage/Workshop';

function WorkshopPage() {
	return (
		<Layout>
			<SEO title='Workshops' />
			<Workshop />
		</Layout>
	);
}

export default WorkshopPage;
