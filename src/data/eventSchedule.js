const getDateObj = (day, time) => new Date(`2025-03-${day}T${time}`);

export const eventSchedule = [
	{
		startTime: getDateObj('02', '08:10:00'),
		events: [
			{
				name: 'Check In',
				duration: '1 hour',
				location: 'Covel Commons Grand Horizon Ballroom',
				description:
					'Come check in with the organizers and get settled before the opening ceremony!',
			},
		],
	},
	{
		startTime: getDateObj('02', '08:30:00'),
		events: [
			{
				name: 'Opening Ceremony & Breakfast',
				duration: '30 min',
				location: 'Covel Commons Grand Horizon Ballroom',
				description:
					'Welcome remarks, team formation overview, and a light breakfast to kick off HOTH XII!',
			},
		],
	},
	{
		startTime: getDateObj('02', '09:00:00'),
		events: [
			{
				name: 'Hacking Begins',
				description: 'Teams settle in and start working on their projects.',
			},
		],
	},
	{
		startTime: getDateObj('02', '12:30:00'),
		events: [
			{
				name: 'Lunch Break',
				duration: '1 hr',
				location: 'Covel Commons Grand Horizon Ballroom',
				description:
					'Enjoy lunch while chatting with fellow hackers and mentors.',
			},
		],
	},
	{
		startTime: getDateObj('02', '18:00:00'),
		events: [
			{
				name: 'Dinner',
				duration: '1 hour',
				location: 'Covel Commons Grand Horizon Ballroom',
				description:
					'Refuel and mingle with other teams before the final hacking push.',
			},
		],
	},
	{
		startTime: getDateObj('02', '21:00:00'),
		events: [
			{
				name: 'Judging Begins',
				duration: '45 min',
				description:
					'Projects are due and will be reviewed by our judges. Good luck!',
			},
		],
	},
	{
		startTime: getDateObj('02', '21:45:00'),
		events: [
			{
				name: 'Closing Ceremony',
				duration: '30 min',
				location: 'Covel Commons Grand Horizon Ballroom',
				description:
					'Award announcements and closing remarks to wrap up HOTH XII!',
			},
		],
	},
];

export default eventSchedule;
