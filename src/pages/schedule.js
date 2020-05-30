import React from 'react';

import Layout from '../components/layout';
import Event from '../components/SchedulePage/Event';

const SchedulePage = () => {
	const testEvents = [
		{
			eventName: 'ACM Hack Does a Back Flip',
			eventLocation: 'Bolter Hall',
			// eslint-disable-next-line no-multi-str
			eventDescription: 'Tim Gu is very athletic and will demonstrate multiple back flipping techniques.\
			Come by to learn about back flips and their history.'
		}
	];
	return <Layout>
		<Event {...testEvents[0]}/>
	</Layout>;
};

export default SchedulePage;
