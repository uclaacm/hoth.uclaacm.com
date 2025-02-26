import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/AnnouncementPopup.css';
import { TfiAnnouncement } from 'react-icons/tfi';

const AnnouncementPopup = () => {
	const [show, setShow] = useState(true);
	const [latestAnnouncement, setLatestAnnouncement] = useState(null);
	const navigate = useNavigate();

	const formatDate = timestamp => {
		const date = new Date(timestamp);
		return date.toLocaleDateString('en-US', {
			weekday: 'long',
			year: 'numeric',
			month: 'long',
			day: 'numeric',
		});
	};

	useEffect(() => {
		fetch('announcements.json')
			.then(response => response.json())
			.then(data => {
				if (data.length > 0) {
					setLatestAnnouncement(data[0]);
				}
			})
			.catch(error => console.error('Error fetching announcements', error));
	}, []);

	const handleDelete = () => {
		setShow(false);
	};

	if (!show || !latestAnnouncement) return null;

	return (
		<div className='popup'>
			<button
				className='speaker-icon'
				onClick={() => navigate('./announcements')}
			>
				<TfiAnnouncement />
			</button>
			<div className='popup-content'>
				<button className='close' onClick={handleDelete}>
					&times;
				</button>
				<h1 className='popup-label'> {latestAnnouncement.subject} </h1>
				<p className='popup-date'>
					{' '}
					{formatDate(latestAnnouncement.timestamp)}{' '}
				</p>
				<p className='popup-body'> {latestAnnouncement.body} </p>
			</div>
		</div>
	);
};

export default AnnouncementPopup;
