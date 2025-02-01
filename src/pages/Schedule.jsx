import React from 'react';
import useTitle from '../components/General/useTitle';
import eventSchedule from '../data/eventSchedule';
import '../styles/Schedule.css';
import { FaRegClock } from 'react-icons/fa';
import '../styles/Announcements.css';

const formatTime = date => {
	const options = {
		month: 'long',
		day: 'numeric',
		hour: 'numeric',
		minute: '2-digit',
		hour12: true,
		timeZoneName: 'short',
	};
	return date.toLocaleString('en-US', options);
};

export default function Schedule() {
	useTitle(' | Schedule');
	return eventSchedule.length > 0 ? (
		<div className='schedule-page'>
			<h1 className='schedule-title'>Schedule</h1>
			{eventSchedule.map(block => (
				<div key={block.startTime} className='event-container'>
					<div className='time-container'>
						<FaRegClock className='clock' />
						<span>{formatTime(block.startTime)}</span>
					</div>
					{block.events.map((event, eventIndex) => (
						<div key={eventIndex} className='event-row'>
							<div>
								<p className='event-name'>{event.name}</p>
								<div>
									<p className='event-duration'>{event.duration}</p>
									<p className='event-location'>{event.location}</p>
								</div>
							</div>
							<p>{event.description}</p>
						</div>
					))}
				</div>
			))}
		</div>
	) : (
		<div id='announcements'>
			<h1 className='announcements-title'>Schedule</h1>
			<div className='announcements-container'>
				<p>
					HOTH XII will take place later this quarter, and our team is working
					hard to organize a fantastic hackathon for you all!{' '}
				</p>
				<p>The schedule for HOTH XII will be coming out soon. Stay tuned!</p>
			</div>
		</div>
	);
}
