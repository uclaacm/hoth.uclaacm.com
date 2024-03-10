import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Submissions from '../components/SubmissionsPage/Submissions';


const SubmissionsPage = () => {
	return <Layout>
		<SEO title='Submissions' />
		<Submissions/>
	</Layout>;
};

export default SubmissionsPage;
