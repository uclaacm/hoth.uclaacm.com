import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Schedule from '../components/SchedulePage/Schedule';


const SchedulePage = () => {
	return <Layout>
		<SEO title='Schedule' />
		<Schedule/>
	</Layout>;
};

export default SchedulePage;
