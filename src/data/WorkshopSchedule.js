const hothYrMnth = '2021-02-'; // replace with real date later
const utcOffset = '-08:00'; // PST
// time is a string of the form "HH:mm:ss"
function getDateObj(day, time) {
	return new Date(`${hothYrMnth}${day}T${time}${utcOffset}`);
}

const workshopSchedule = [
	{
		startTime: getDateObj('05', '19:00:00'),
		events: [
			{
				name: 'Pre-Social',
				duration: '90 min',
				location: 'Discord',
				description: `Chill and hangout with us to chat and make friends before the hackathon begins :)`
			}
		]
	},
	{
		startTime: getDateObj('05', '20:00:00'),
		events: [
			{
				name: 'Opening Ceremony',
				duration: '30 min',
				location: 'Zoom',
				description: `Come watch the opening ceremony to hear a rundown of the rules
				before you begin hacking.`
			}
		]
	},
	{
		startTime: getDateObj('05', '20:30:00'),
		events: [
			{
				name: 'Team Formation',
				duration: '60 min',
				location: 'Zoom',
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
		startTime: getDateObj('06', '10:00:00'),
		events: [
			{
				name: 'Meme Competition (Round 1 Judging)',
				duration: '',
				location: 'Discord: #memes',
				description: `Drop your best meme in #memes channel. Best meme
				gets 5 extra entries in our raffle!`
			}
		]
	},
	{
		startTime: getDateObj('06', '14:00:00'),
		events: [
			{
				name: 'Codenames Competition',
				duration: '',
				location: 'Discord',
				description: `Take a break from hacking and join us for a round
				of Codenames! Winning team gets 5 extra raffle entries.`
			}
		]
	},
	{
		startTime: getDateObj('06', '18:00:00'),
		events: [
			{
				name: 'Question of the Hour (Round 2 Judging)',
				duration: '',
				location: 'Discord: #questions-of-the-hour',
				description: `Give the best response to the posted question in the
				#questions-of-the-hour channel. Best answer gets 3 extra entries in
				our raffle. `
			}
		]
	},
	{
		startTime: getDateObj('06', '19:00:00'),
		events: [
			{
				name: 'Among Us Competition',
				duration: '',
				location: 'Discord',
				description: `Your project looking a little sus? Take a break and play
				a round of Among Us! Winners get 3 extra entries in our raffle. `
			}
		]
	},
	{
		startTime: getDateObj('06', '22:00:00'),
		events: [
			{
				name: 'Meme Competition (Round 2 Judging)',
				duration: '',
				location: 'Discord: #memes',
				description: `Drop your best meme in #memes channel. Best meme gets 5
				extra entries in our raffle!`
			}
		]
	},
	{
		startTime: getDateObj('07', '04:00:00'),
		events: [
			{
				name: 'Question of the Hour (Round 3 Judging)',
				duration: '',
				location: 'Discord: #questions-of-the-hour',
				description: `Give the best response to the posted question in the
				#questions-of-the-hour channel. Best answer gets 3 extra entries in
				our raffle. `
			}
		]
	},
	{
		startTime: getDateObj('07', '10:00:00'),
		events: [
			{
				name: 'Meme Competition (Round 3 Judging)',
				duration: '',
				location: 'Discord: #memes',
				description: `Drop your best meme in #memes channel. Best meme gets 5
				extra entries in our raffle!`
			}
		]
	},
	{
		startTime: getDateObj('07', '14:00:00'),
		events: [
			{
				name: 'Question of the Hour (Round 4 Judging)',
				duration: '',
				location: 'Discord: #questions-of-the-hour',
				description: `Give the best response to the posted question in the
				#questions-of-the-hour channel. Best answer gets 3 extra entries in
				our raffle. `
			},
			{
				name: 'Skribbl.io Competition',
				duration: '',
				location: 'Discord',
				description: `Take a break from hacking and join us for a round of
				Skribbl.io! Rewards will be 5 raffle entries for 1st place, 3 entries for 2nd. `
			}
		]
	},
	{
		startTime: getDateObj('07', '19:30:00'),
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
		startTime: getDateObj('07', '21:00:00'),
		events: [
			{
				name: 'Closing Ceremony',
				duration: '60 min',
				location: 'Zoom',
				description: `Find out the winners at our closing ceremony. We hope you
				had a fun time!`
			}
		]
	}
];

export default workshopSchedule;
