import React from 'react';

import Layout from '../components/layout';
import FAQSection from '../components/HomePage/FAQSection';
import HothDescription from '../components/HomePage/HothDescription';

const IndexPage = () =>
	<Layout>
		<HothDescription />
		<FAQSection />
	</Layout>;

export default IndexPage;
