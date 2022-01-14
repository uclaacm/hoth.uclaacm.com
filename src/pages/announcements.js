import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Announcements from '../components/AnnouncementsPage/Announcements';

function AnnouncementsPage() {
	return (
		<Layout>
			<SEO title='Announcments' />
			<Announcements />
		</Layout>
	);
}

export default AnnouncementsPage;
