import React from 'react';
import useTitle from '../components/General/useTitle';
import announcements from '../data/announcements.json';
import '../styles/Announcements.css';

export default function Announcements() {
	useTitle(' | Announcements');

	const formatDate = (timestamp) => {
		const date = new Date(timestamp);
		return date.toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
			hour: '2-digit',
			minute: '2-digit'
		});
	};

	return (
		<div id='announcements'>
			<h1>Announcements</h1>
			<div>
				{announcements.map((announcement) => (
					<div key={announcement.id}>
						<h2>{announcement.subject}</h2>
						<p >{announcement.body}</p>
						<p>
							Posted on {formatDate(announcement.timestamp)}
						</p>
					</div>
				))}
			</div>
		</div>
	);
}
