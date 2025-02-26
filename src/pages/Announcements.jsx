import React, { useState, useEffect } from 'react';
import useTitle from '../components/General/useTitle';
import '../styles/Announcements.css';

export default function Announcements() {
	useTitle(' | Announcements');
	const [announcements, setAnnouncements] = useState([]);

	useEffect(() => {
		fetch('/announcements.json')
			.then(response => {
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				return response.json();
			})
			.then(data => setAnnouncements(data))
			.catch(error => console.error('Error fetching announcements:', error));
	}, []);

	const formatDate = timestamp => {
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
			<h1 className='announcements-title'>Announcements</h1>
			<div className='announcements-container'>
				{announcements.length > 0 ? (
					announcements.map(announcement => (
						<div key={announcement.id} className='announcements-label'>
							<h2 className='announcements-subject'>{announcement.subject}</h2>
							<p className='announcements-date'>
								{formatDate(announcement.timestamp)}
							</p>
							<p className='announcements-body'>{announcement.body}</p>
						</div>
					))
				) : (
					<p>Loading announcements...</p>
				)}
			</div>
		</div>
	);
}
