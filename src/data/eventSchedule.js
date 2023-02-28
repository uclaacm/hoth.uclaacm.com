const hothYrMnth = '2023-03-'; // replace with real date later
const utcOffset = '-08:00'; // PST
// time is a string of the form "HH:mm:ss"
function getDateObj(day, time) {
	return new Date(`${hothYrMnth}${day}T${time}${utcOffset}`);
}

const eventSchedule = [
	{
		startTime: getDateObj('05', '08:00:00'),
		events: [
			{
				name: 'Check In',
				duration: '30 min',
				location: 'Carnesale Commons Palisades Room',
				description: `Bring your Bruincard to check in with one of the Hack officers at the front.
				Remember to also bring your water bottle, your laptop, and your laptop charger!`
			}
		]
	},
	{
		startTime: getDateObj('05', '08:30:00'),
		events: [
			{
				name: 'Opening Ceremony',
				duration: '30 min',
				location: 'Carnesale Commons Palisades Room',
				description: `Come to the opening ceremony to hear from our amazing 
                speakers and get a rundown of the rules before you begin hacking.`
			}
		]
	},
	{
		startTime: getDateObj('05', '09:00:00'),
		events: [
			{
				name: 'Breakfast',
				duration: '60 min',
				location: 'Carnesale Commons Palisades Room',
				description: `What's the best way to start off a hackathon?
				Food! And good company! All of which we've got right here. Enjoy a
				breakfast of champions from Noah's Bagels as we begin the hackathon.`
			},
			{
				name: 'Hacking Begins',
				duration: '',
				location: '',
				description: `Do you feel the smarticle particles suffusing
				your brain? Of course you do! Happy hacking, peeps; we can't wait
				to see what you create!`
			},
			{
				name: 'Meme Competition Opens',
				duration: '',
				location: 'Discord: #memes',
				description: `Drop your best meme in the #memes channel on Discord and 
                get a raffle entry for participating! This is an all-day event, so take 
                your time in coming up with that singular meme-tastic work of art.`
			},
			{
				name: 'Team Formation',
				duration: '30 min',
				location: 'Carnesale Commons Palisades Room',
				description: `Looking for a team? Find one to hack with during
				our team building session!`
			}
		]
	},
	{
		startTime: getDateObj('05', '09:30:00'),
		events: [
			{
				name: 'Common Experience Workshop',
				duration: '30 min',
				location: 'Carnesale Commons Hermosa Room',
				description: `Learn more about the Common Experience theme of intersectional 
                environmentalism and brainstorm project ideas! You'll receive raffle entries for
                attending as well :)`
			}
		]
	},
	{
		startTime: getDateObj('05', '12:30:00'),
		events: [
			{
				name: 'Lunch',
				duration: '60 min',
				location: 'Carnesale Commons Palisades Room',
				description: `Coding is done best on a full stomach.
				Come one, come all—we feast! For lunch, we'll be serving In-n-Out with
				alternate options if you have dietary restrictions. Do feel free to
				continue working through lunch, though. The only thing better than
				getting free food is having coding epiphanies while eating the free food.`
			}
		]
	},
	{
		startTime: getDateObj('05', '13:00:00'),
		events: [
			{
				name: 'Interdisciplinary Research Panel',
				duration: '60 min',
				location: 'Carnesale Commons Palisades Room',
				description: `We have an amazing panel of UCLA professors/researches whose
                expertise centers around the intersection of computer science and another field
                such as biomedicine, chemistry, and humanities! Join us in learning about them,
                their work, and how you can get involved. You'll even receive raffle entries for
                participating!`
			}
		]
	},
	{
		startTime: getDateObj('05', '18:00:00'),
		events: [
			{
				name: 'Dinner',
				duration: '60 min',
				location: 'Carnesale Commons Palisades Room',
				description: `Do you know what's better than one free meal? Two
				free meals! And you've earned it! It's time to gorge yourself on pizza from
				Papa John's while you recoup for your last sprint to the finish line!
				Just like lunch, there will be alternate food options if you have dietary
				restrictions, and you can also work during this time.`
			}
		]
	},
	{
		startTime: getDateObj('05', '19:00:00'),
		events: [
			{
				name: 'Meme Compeition Ends',
				duration: '',
				location: 'Discord: #memes',
				description: `Submit your last memes to the #memes channel on Discord! 
                The winner will earn extra raffle entries ;)`
			}
		]
	},
	{
		startTime: getDateObj('05', '21:00:00'),
		events: [
			{
				name: 'Hacking Ends',
				duration: '',
				location: '',
				description: `Your amazing project should be done and submitted to
				Devpost for judging. Also remember to submit the 'HOTH X Team Submission'
				Google form.`
			}
		]
	},
	{
		startTime: getDateObj('05', '21:15:00'),
		events: [
			{
				name: 'Judging',
				duration: '75 min',
				location: '',
				description: `Our judges will look through your Devpost submissions.
				Take this time to relax and refresh before the closing ceremony.`
			}
		]
	},
	{
		startTime: getDateObj('05', '22:30:00'),
		events: [
			{
				name: 'Closing Ceremony',
				duration: '20 min',
				location: 'Covel Grand Horizon/Zoom',
				description: `Find out the winners of our raffle and prize tracks at our closing 
                ceremony!`
			}
		]
	},
	{
		startTime: getDateObj('05', '23:00:00'),
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
