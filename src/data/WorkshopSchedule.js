const hothYrMnth = '2022-02-'; // replace with real date later
const utcOffset = '-08:00'; // PST
// time is a string of the form "HH:mm:ss"
function getDateObj(day, time) {
	return new Date(`${hothYrMnth}${day}T${time}${utcOffset}`);
}

const workshopSchedule = [
	{
		startTime: getDateObj('26', '09:00:00'),
		events: [
			{
				name: 'Opening Ceremony',
				duration: '30 min',
				location: 'Location TBA',
				description: `Come watch the opening ceremony to hear a rundown of the rules
				before you begin hacking.`
			}
		]
	},
	{
		startTime: getDateObj('26', '09:30:00'),
		events: [
			{
				name: 'Team Formation',
				duration: '60 min',
				location: 'Location TBA',
				description: `Looking for a team? Find one to hack with during
				our team building session`
			},
			{
				name: 'Hacking Begins',
				duration: '',
				location: '',
				description: `Happy hacking! We hope you build something amazing!`
			}
		]
	},

	{
		startTime: getDateObj('26', '21:30:00'),
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
		startTime: getDateObj('26', '23:00:00'),
		events: [
			{
				name: 'Closing Ceremony',
				duration: '30 min',
				location: 'Location TBA',
				description: `Find out the winners at our closing ceremony. We hope you
				had a fun time!`
			}
		]
	}
];

export default workshopSchedule;
