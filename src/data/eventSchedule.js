function getPacificDateObj(time) {
	const year = '2026';
	const month = '03';
	const day = '01';
	const iso = `${year}-${month}-${day}T${time}-08:00`; // Add PST offset
	return new Date(iso);
}

export const eventSchedule = [
	{
		startTime: getPacificDateObj('08:00:00'),
		events: [
			{
				name: 'Check In',
				duration: '30 min',
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
				name: 'Hacking Begins / Breakfast Served / Team Formation / Common Experience Room',
				location: 'Palisades Room, Carnesale Commons',
				description:
					"Hacking officially begins! Enjoy breakfast, form a team if you don't already have one, settle into the CE Room for a quick break, and start working on your projects!",
			},
		],
	},
	{
		startTime: getPacificDateObj('10:00:00'),
		events: [
			{
				name: 'Oracle Workshop',
				duration: '30 min',
				location: 'Palisades Room, Carnesale Commons',
				description:
					'Join Oracle for a workshop to learn about their technologies and tools!',
			},
		],
	},
	{
		startTime: getPacificDateObj('12:30:00'),
		events: [
			{
				name: 'Lunch Served',
				location: 'Palisades Room, Carnesale Commons',
				description:
					'Enjoy lunch while chatting with fellow hackers and mentors.',
			},
		],
	},
	{
		startTime: getPacificDateObj('13:00:00'),
		events: [
			{
				name: 'Alumni SWE Fireside Chat',
				location: 'Palisades Room, Carnesale Commons',
				description:
					'Hear from alumni software engineers about their career journeys and advice for aspiring developers.',
			},
		],
	},
	{
		startTime: getPacificDateObj('14:30:00'),
		events: [
			{
				name: 'Learn About Vanta',
				location: 'Palisades Room, Carnesale Commons',
				description:
					'Learn about Vanta and what they do!',
			},
		],
	},
	{
		startTime: getPacificDateObj('17:00:00'),
		events: [
			{
				name: 'Poker',
				location: 'Palisades Room, Carnesale Commons',
				description:
					'Take a break from hacking and enjoy a round of poker with fellow hackers!',
			},
		],
	},
	{
		startTime: getPacificDateObj('18:00:00'),
		events: [
			{
				name: 'Dinner Served',
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
				name: 'Hacking Ends / Judging Begins',
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
