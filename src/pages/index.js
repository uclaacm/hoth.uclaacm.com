import React from 'react';

import Layout from '../components/layout';
import FAQSection from '../components/HomePage/FAQSection';
import HothDescription from '../components/HomePage/HothDescription';
import SEO from '../components/seo';

function IndexPage() {
	return (
		<Layout>
			<SEO title='Home' />
			<HothDescription />
			<FAQSection />
		</Layout>
	);
}

export default IndexPage;
