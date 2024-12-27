import React from 'react';
import '../styles/Announcements.css';

export default function Announcements() {
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
