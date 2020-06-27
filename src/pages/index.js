import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Banner from '../components/HomePage/Banner';
import UpcomingEvents from '../components/HomePage/UpcomingEvents';
import HothDescription from '../components/HomePage/HothDescription';
import FAQSection from '../components/HomePage/FAQSection';

function IndexPage() {
	return (
		<Layout>
			<SEO title='Home' />
			<Banner />
			<UpcomingEvents />
			<HothDescription />
			<FAQSection />
		</Layout>
	);
}

export default IndexPage;
