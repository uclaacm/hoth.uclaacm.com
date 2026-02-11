const getDateObj = (day, time) => new Date(`2025-03-${day}T${time}`);

export const eventSchedule = [
	{
		startTime: getDateObj('01', '08:10:00'),
		events: [
			{
				name: 'Check In',
				duration: '1 hour',
				location: 'Palisades Room, Carnesale Commons',
				description:
					'Come check in with the organizers and get settled before the opening ceremony!',
			},
		],
	},
	{
		startTime: getDateObj('01', '08:30:00'),
		events: [
			{
				name: 'Opening Ceremony',
				duration: '30 min',
				location: 'Palisades Room, Carnesale Commons',
				description:
					'Welcome remarks, guest speakers, and a brief overview to kick off HOTH XIII!',
			},
		],
	},
	{
		startTime: getDateObj('01', '09:00:00'),
		events: [
			{
				name: 'Breakfast & Team Formation-- Hacking Begins!',
				duration: '1 hour',
				location: 'Palisades Room, Carnesale Commons',
				description:
					"Enjoy a hearty breakfast and form a team if you don't already have one! Teams settle in and start working on their projects.",
			},
		],
	},
	{
		startTime: getDateObj('01', '09:30:00'),
		events: [
			{
				name: 'Intern Q&A Session',
				duration: '1 hour',
				location: 'Palisades Room, Carnesale Commons',
				description:
					'Interested in being a part of the team that puts together HOTH and many other events? Ask current Hack interns about their experience!',
			},
		],
	},
	{
		startTime: getDateObj('01', '12:30:00'),
		events: [
			{
				name: 'Lunch Break',
				duration: '1 hour',
				location: 'Palisades Room, Carnesale Commons',
				description:
					'Enjoy lunch while chatting with fellow hackers and mentors.',
			},
		],
	},
	{
		startTime: getDateObj('01', '18:00:00'),
		events: [
			{
				name: 'Dinner',
				duration: '1 hour',
				location: 'Palisades Room, Carnesale Commons',
				description:
					'Refuel and mingle with other teams before the final hacking push.',
			},
		],
	},
	{
		startTime: getDateObj('01', '21:00:00'),
		events: [
			{
				name: 'Judging Begins',
				duration: '45 min',
				location: 'Palisades Room, Carnesale Commons',
				description:
					'Projects are due and will be reviewed by our judges. Good luck!',
			},
		],
	},
	{
		startTime: getDateObj('01', '22:00:00'),
		events: [
			{
				name: 'Closing Ceremony',
				duration: '30 min',
				location: 'Palisades Room, Carnesale Commons',
				description:
					'Award announcements and closing remarks to wrap up HOTH XIII!',
			},
		],
	},
];

export default eventSchedule;
