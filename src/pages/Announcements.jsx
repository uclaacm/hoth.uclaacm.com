import React from 'react';
import useTitle from '../components/General/useTitle';
import '../styles/Announcements.css';

export default function Announcements() {
	useTitle(' | Announcements');

	return (
		<div id='announcements'>
			<h1 className='announcements-title'>Announcements</h1>
			<div className='announcements-container'>
				<p>
					HOTH XII will take place later this quarter, and our team is working
					hard to organize a fantastic hackathon for you all!
				</p>
				<p>More news and announcements coming soon. Stay tuned!</p>
			</div>
		</div>
	);
}
