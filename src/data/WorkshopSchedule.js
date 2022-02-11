const hothYrMnth = '2022-02-'; // replace with real date later
const utcOffset = '-08:00'; // PST
// time is a string of the form "HH:mm:ss"
function getDateObj(day, time) {
	return new Date(`${hothYrMnth}${day}T${time}${utcOffset}`);
}

const workshopSchedule = [
	{
		startTime: getDateObj('26', '16:00:00'),
		events: [
			{
				name: 'Check in',
				duration: '60 min',
				location: 'Covel Grand Horizon',
				description: `Bring your bruin card, daily symptoms monitoring, and
                your negative Covid test result and check in with one of the hack 
                officers at the front.`
			}
		]
	},
	{
		startTime: getDateObj('26', '17:00:00'),
		events: [
			{
				name: 'Opening Ceremony',
				duration: '30 min',
				location: 'Covel Grand Horizon/Zoom',
				description: `Come to the opening ceremony to hear a rundown of the rules
				before you begin hacking.`
			}
		]
	},
	{
		startTime: getDateObj('26', '17:30:00'),
		events: [
			{
				name: 'Team Formation',
				duration: '30 min',
				location: 'Covel Grand Horizon/Discord',
				description: `Looking for a team? Find one to hack with during
				our team building session!`
			},
			{
				name: 'Hacking Begins',
				duration: '',
				location: 'Covel Grand Horizon/Discord',
				description: `Happy hacking! We hope you build something amazing!`
			}
		]
	},
	{
		startTime: getDateObj('26', '20:00:00'),
		events: [
			{
				name: 'Lunch',
				duration: '60 min',
				location: 'Covel Grand Horizon Terrace',
				description: `Coding is done best on a full stomach ;). 
				Come one, come all—we feast!`
			},
			{
				name: 'JEDI Allyship Space',
				duration: '60 min',
				location: 'Covel Grand Horizon',
				description: `Let's talk about being allies in CS`
			},
			{
				name: 'Games/Social',
				duration: '60 min',
				location: 'Discord',
				description: `Have fun, play games, and take a break from hacking
                by playing games with your fellow online hackers!`
			}
		]
	},
	{
		startTime: getDateObj('26', '02:00:00'),
		events: [
			{
				name: 'Dinner',
				duration: '60 min',
				location: 'Covel Grand Horizon Terrace',
				description: `You've had quite the day so far, and you're
                not done yet! It's time to eat and recoup for you last
                sprint to the finish line!`
			}
		]
	},
	{
		startTime: getDateObj('26', '05:30:00'),
		events: [
			{
				name: 'Hacking Ends',
				duration: '',
				location: '',
				description: `Your amazing project should be done and posted to
				dev post for judging!`
			},
			{
				name: 'Judging',
				duration: '90 min',
				location: '',
				description: `Our judges will look through your devpost submissions.
				Take this time to relax and refresh before the closing ceremony. `
			}
		]
	},
	{
		startTime: getDateObj('26', '07:15:00'),
		events: [
			{
				name: 'Closing Ceremony',
				duration: '30 min',
				location: 'Covel Grand Horizon/Zoom',
				description: `Find out the winners at our closing ceremony. We hope you
				had a fun time!`
			}
		]
	}
];

export default workshopSchedule;
