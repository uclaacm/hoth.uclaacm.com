import React from 'react';
import useTitle from '../components/General/useTitle';
import announcements from '../data/announcements.json';
import '../styles/Announcements.css';

export default function Announcements() {
	useTitle(' | Announcements');

	const formatDate = (timestamp) => {
		const date = new Date(timestamp);
		return date.toLocaleDateString('en-US', {
			weekday: 'long',
			year: 'numeric',
    		month: 'long',
    		day: 'numeric',
		});
	};

	return (
		<div id='announcements'>
			<h1 className = 'announcements-title'>Announcements</h1>
			<div className = 'announcements-container'>
				{announcements.map((announcement) => (
					<div key={announcement.id} className='announcements-label'>
						<h2 className = 'announcements-subject'>{announcement.subject}</h2>
						<p className = 'announcements-date'>
							{formatDate(announcement.timestamp)}
						</p>
						<p className = 'announcements-body'>{announcement.body}</p>
					</div>
				))}
			</div>
		</div>
	);
}
