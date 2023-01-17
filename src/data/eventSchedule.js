const hothYrMnth = '2022-02-'; // replace with real date later
const utcOffset = '-08:00'; // PST
// time is a string of the form "HH:mm:ss"
function getDateObj(day, time) {
	return new Date(`${hothYrMnth}${day}T${time}${utcOffset}`);
}

const eventSchedule = [
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
				Food! And good company! All of which we've got right here. Enjoy a
				breakfast of champions from Noah's Bagels as we begin the hackathon.`
			},
			{
				name: 'Hacking Begins',
				duration: '',
				location: 'Covel Grand Horizon/Discord',
				description: `Do you feel the smarticle particles suffusing
				your brain? Of course you do! Happy hacking, peeps; we can't wait
				to see what you create!`
			},
			{
				name: 'Meme Competition Opens',
				duration: '',
				location: 'Discord: #memes',
				description: `Whether you're attending the hackathon in-person or online,
				drop your best meme in the #memes channel and get a raffle entry
				for participating! This is an all-day event, so take your time in coming up
				with that singular meme-tastic work of art.`
			},
			{
				name: 'Team Formation',
				duration: '30 min',
				location: 'Covel Grand Horizon/Discord',
				description: `Looking for a team? Find one to hack with during
				our team building session!`
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
				description: `Coding is done best on a full stomach.
				Come one, come all—we feast ;)! For lunch, we'll be serving In-n-Out with
				alternate options if you have dietary restrictions. Do feel free to
				continue working through lunch, though. The only thing better than
				getting free food is having coding epiphanies while eating the free food.`
			},
			{
				name: 'JEDI Allyship Space',
				duration: '45 min',
				location: 'Covel Grand Horizon',
				description: `We'll be having a guided discussion about topics
				related to the Netflix documentary 'The Social Dilemma'
				and the ethics of technology from the morality of data collection
				to the environmental impact of tech to algorithmic bias in AI.
				Get a raffle entry just for attending and a second one for participating.
				Sounds like a bargain, no?`
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
				description: `Do you know what's better than one free meal? Two
				free meals! And you've earned it! It's time to gorge yourself on pizza from
				Papa John's while you recoup for your last sprint to the finish line!
				Just like lunch, there will be alternate food options if you have dietary
				restrictions, and you can also work during this time.`
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
				Devpost for judging. Also remember to submit the 'Team Confirmation'
				google form.`
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
	},
	{
		startTime: getDateObj('26', '23:00:00'),
		events: [
			{
				name: 'Hackathon Ends',
				duration: '',
				location: '',
				description: `So long, farewell, au revoir, auf Wiedersehen. The day is done,
				and with it HOTH X. We hope you had as much fun as we did, and we hope to see
				you again soon!!`
			}
		]
	}
];

export default eventSchedule;
