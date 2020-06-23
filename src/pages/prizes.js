
import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import PrizeHeader from '../components/PrizePage/PrizeHeader.js';
import Prizes from '../components/PrizePage/Prizes.js';

function PrizesPage() {
	return (
		<Layout>
			<SEO title='Prizes' />
			<PrizeHeader />
			<Prizes />
		</Layout>
	);
}

export default PrizesPage;
