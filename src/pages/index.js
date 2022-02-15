import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Banner from '../components/HomePage/Banner';
import UpcomingEvents from '../components/HomePage/UpcomingEvents';
import HothDescription from '../components/HomePage/HothDescription';
import Gallery from '../components/HomePage/Gallery';
import FAQSection from '../components/HomePage/FAQSection';
import HomeAnnouncementBanner from '../components/HomePage/HomeAnnouncementBanner';

function IndexPage() {
	return (
		<Layout>
			<SEO title='Home' />
			<HomeAnnouncementBanner />
			<Banner />
			<UpcomingEvents />
			<HothDescription />
			<Gallery />
			<FAQSection />
		</Layout>
	);
}

export default IndexPage;
