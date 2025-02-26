import React, { useState, useEffect } from 'react';
import useTitle from '../components/General/useTitle';
import '../styles/Announcements.css';

export default function Announcements() {
	useTitle(' | Announcements');
	const [announcements, setAnnouncements] = useState([]);

	useEffect(() => {
		fetch('announcements.json')
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
			{announcements.length > 0 ? (
				<div>
					<h1 className='announcements-title'>Announcements</h1>
				</div>
			) : (
				<div style={{ display: 'flex' }}>
					<h1 className='announcements-title'>Announcements</h1>
				</div>
			)}
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
					<div>
						<p>
							HOTH XII will take place later this quarter, and our team is
							working hard to organize a fantastic hackathon for you all!
						</p>
						<p>Announcements will be posted soon! Stay tuned!</p>
					</div>
				)}
			</div>
		</div>
	);
}
