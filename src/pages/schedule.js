import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Schedule from '../components/SchedulePage/Schedule';


const SchedulePage = () => {
	return <Layout>
		<SEO title='Workshop schedule' />
		<Schedule/>
	</Layout>;
};

export default SchedulePage;
