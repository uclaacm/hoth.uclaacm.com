function getPacificDateObj(time) {
	const year = '2026';
	const month = '03';
	const day = '01';
	const iso = `${year}-${month}-${day}T${time}-08:00`; // Add PST offset
	return new Date(iso);
}

export const eventSchedule = [
	{
		startTime: getPacificDateObj('08:10:00'),
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
		startTime: getPacificDateObj('08:30:00'),
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
		startTime: getPacificDateObj('09:00:00'),
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
		startTime: getPacificDateObj('09:30:00'),
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
		startTime: getPacificDateObj('12:30:00'),
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
		startTime: getPacificDateObj('18:00:00'),
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
		startTime: getPacificDateObj('21:00:00'),
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
		startTime: getPacificDateObj('22:00:00'),
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
