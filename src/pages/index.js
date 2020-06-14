import React from 'react';

import Layout from '../components/layout';
import FAQSection from '../components/HomePage/FAQSection';
import HothDescription from '../components/HomePage/HothDescription';
import Banner from '../components/HomePage/Banner';

const IndexPage = () =>
	<Layout>
		<Banner />
		<HothDescription />
		<FAQSection />
	</Layout>;

export default IndexPage;
