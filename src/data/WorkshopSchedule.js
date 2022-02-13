const hothYrMnth = '2022-02-'; // replace with real date later
const utcOffset = '-08:00'; // PST
// time is a string of the form "HH:mm:ss"
function getDateObj(day, time) {
	return new Date(`${hothYrMnth}${day}T${time}${utcOffset}`);
}

const workshopSchedule = [
	{
		startTime: getDateObj('26', '08:00:00'),
		events: [
			{
				name: 'Check in',
				duration: '30 min',
				location: 'Covel Grand Horizon',
				description: `Bring your bruin card and daily symptoms monitoring
				survey to check in with one of the Hack officers at the front.
				Remember to bring some snacks, water, your laptop, and your laptop charger!`
			}
		]
	},
	{
		startTime: getDateObj('26', '08:30:00'),
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
		startTime: getDateObj('26', '09:00:00'),
		events: [
			{
				name: 'Breakfast',
				duration: '30 min',
				location: 'Covel Grand Horizon Terrace',
				description: `What's the best way to start off a hackathon?
				Food! And good company! All of which we've got right here.`
			}
		]
	},
	{
		startTime: getDateObj('26', '09:30:00'),
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
				description: `Do you feel the smarticle particles suffusing
				your brain? Of course you do! Happy hacking, peeps; we can't wait
				to see what you create!`
			}
		]
	},
	{
		startTime: getDateObj('26', '11:30:00'),
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
				duration: '30 min',
				location: 'Covel Grand Horizon',
				description: `We'll be having a guided discussion about topics
				related to the social dilemma of technology from the ethics
				of data collection to the environmental impact of tech
				to algorithmic bias in AI. Get an extra raffle entry just for
				attending and a second one for participating. Sounds like a bargain, no?`
			}
		]
	},
	{
		startTime: getDateObj('26', '12:00:00'),
		events: [
			{
				name: 'Meme Competition',
				duration: '30 min',
				location: 'Discord: #memes',
				description: `Drop your best meme in the #memes channel and get an
				extra entry in the raffle for participating!`
			}
		]
	},
	{
		startTime: getDateObj('26', '18:00:00'),
		events: [
			{
				name: 'Dinner',
				duration: '60 min',
				location: 'Covel Grand Horizon Terrace',
				description: `You've had quite the day so far, and you're
                not done yet! It's time to eat and recoup for your last
                sprint to the finish line!`
			}
		]
	},
	{
		startTime: getDateObj('26', '21:00:00'),
		events: [
			{
				name: 'Hacking Ends',
				duration: '',
				location: '',
				description: `Your amazing project should be done and submitted to
				dev post for judging!`
			}
		]
	},
	{
		startTime: getDateObj('26', '21:15:00'),
		events: [
			{
				name: 'Judging',
				duration: '75 min',
				location: '',
				description: `Our judges will look through your devpost submissions.
				Take this time to relax and refresh before the closing ceremony.`
			}
		]
	},
	{
		startTime: getDateObj('26', '22:30:00'),
		events: [
			{
				name: 'Closing Ceremony',
				duration: '20 min',
				location: 'Covel Grand Horizon/Zoom',
				description: `Find out the winners at our closing ceremony. We hope you
				had a fun time!`
			}
		]
	}
];

export default workshopSchedule;
