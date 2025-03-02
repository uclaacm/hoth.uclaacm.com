import React from 'react';
import '../../styles/Gallery.css';
import Winner from './Winner';

export default function Winners({ year }) {
    const hothXI = [
        {
            year: 'XI',
            appName: 'Stride',
            description: 'stride is an app that makes sustainable commutes fun. Log and track your walks and rides to see their environmental impact, earn achievements and connect with your friends to stay motivated!',
            category: 'Best Overall',
            image: 'stride',
            link: 'https://devpost.com/software/stride-bslo5u'
        },
        {
            year: 'XI',
            appName: 'Cafe Hopper',
            description: 'Cafes are pretty cool. Check out nearby cafes.',
            category: 'Best Web',
            image: 'cafehopper',
            link: 'https://devpost.com/software/cafe-hopper'
        },
        {
            year: 'XI',
            appName: 'BruinBites & Books',
            description: 'Say goodbye to lonely meals with this platform that streamlines dining meetups, sparking lively discussions and culinary adventures.',
            category: 'Best Mobile',
            image: 'bruinbitesandbooks',
            link: 'https://devpost.com/software/bruinbites-books'
        },
        {
            year: 'XI',
            appName: 'Timber',
            description: 'A game about deforestation',
            category: 'Best Game',
            image: 'timber',
            link: 'https://devpost.com/software/timber-wtsfdz'
        },
        {
            year: 'XI',
            appName: 'Westwood Community Garden',
            description: 'Our mission is to grow together, sustainably.',
            category: 'Best in Intersectional Environmentalism',
            image: 'westwoodcommunitygarden',
            link: 'https://devpost.com/software/westwood-community-garden'
        },
        {
            year: 'XI',
            appName: 'Near Miss',
            description: 'Near Miss lies at the intersecting fields of statistics and finance to democratize knowledge and expose casino scams.',
            category: 'Best Beginner',
            image: 'nearmiss',
            link: 'https://devpost.com/software/team-near-miss'
        },
    ];
    
    const hothX = [
        {
            year: 'X',
            appName: 'QuakeAlert',
            description: 'QuakeAlert is an earthquake detection web application that can inform people within the affected radius of an earthquake so they can reach safety.',
            category: 'Best Overall',
            image: 'quakealert',
            link: 'https://devpost.com/software/quakealert'
        },
        {
            year: 'X',
            appName: 'Sportify',
            description: 'Enjoy sports and save the planet!',
            category: 'Best Web',
            image: 'sportify',
            link: 'https://devpost.com/software/sportify-aju8pv'
        },
        {
            year: 'X',
            appName: 'Allies',
            description: 'Find UCLA students who are going to the same places you are. Plan ahead, or in real-time. Save the environment and your wallets by splitting hefty rideshare fees with ease (that LAX → UCLA Uber x__x).',
            category: 'Best Mobile',
            image: 'allies',
            link: 'https://devpost.com/software/allies'
        },
        {
            year: 'X',
            appName: 'Road Rager',
            description: 'Road Rager is an educational game that teaches about aggressive driving. Players drive a car, and an ML-generated model trained on real-world data will determine if the player is driving recklessly.',
            category: 'Best Game',
            image: 'roadrager',
            link: 'https://devpost.com/software/road-rager'
        },
        {
            year: 'X',
            appName: 'BruinThrift',
            description: 'Bruin Thrift connects UCLA students seeking to sell/give away their clothing, furniture, or other belongings.',
            category: 'Best in Intersectional Environmentalism',
            image: 'bruinthrift',
            link: 'https://devpost.com/software/bruinthrift'
        },
        {
            year: 'X',
            appName: 'HandiWalk',
            description: 'Accessible Travels for all Bruins.',
            category: 'Best Beginner',
            image: 'handiwalk',
            link: 'https://devpost.com/software/handiwalk'
        }
    ]

	const hoth9 = [
		{
			year: '9',
			appName: 'Filter The Fake',
			description: 'Counterfeit medicine detection web app',
			category: 'Best Overall',
			image: 'filterthefake',
			link: 'https://devpost.com/software/filter-the-fake',
		},
		{
			year: '9',
			appName: 'Planned Bruin',
			description:
				'PlannedBruin is a class schedule optimizer for UCLA students. By inputting a major, the website will offer a potential 4-year degree map by quarter, helping to avoid stress regarding pre-requisites.',
			category: 'Best in Education',
			image: 'plannedbruin',
			link: 'https://devpost.com/software/plannedbruin',
		},
		{
			year: '9',
			appName: 'Green Ride',
			description:
				'Google Maps, but with a CO2 emissions calculator that takes the route, car, and number of passengers to show how much CO2 each person is emitting to inspire more environmentally conscious traveling.',
			category: 'Best in Sustainability',
			image: 'greenride',
			link: 'https://devpost.com/software/greenride',
		},
		{
			year: '9',
			appName: 'Habituate',
			description:
				"Aristotle said: 'We are what we repeatedly do. Excellence, then, is not an act, but a habit.' Habituate is a social app that allows you to track your habits and form the perfect morning routine.",
			category: 'Best in Health and Wellness',
			image: 'habituate',
			link: 'https://devpost.com/software/habituate',
		},
		{
			year: '9',
			appName: 'Morse Bridge',
			description:
				'A mobile application using React Native to raise equity by facilitating communication among deafblind communities.',
			category: 'Best in Equity',
			image: 'morsebridge',
			link: 'https://devpost.com/software/morse-bridge',
		},
		{
			year: '9',
			appName: 'Loom',
			description:
				'Ever wanted a platform to write out your creative thoughts? Love collaborating with friends? Fret no more. With Loom, you spin your yarns a chapter at a time, liking them and inspiring others as well.',
			category: 'Best in You Do You',
			image: 'loom',
			link: 'https://devpost.com/software/loom',
		},
	];

	const hoth8 = [
		{
			year: '8',
			appName: 'Nudge',
			description:
				'Nudge is the social self-care habit tracker you never knew you needed. Show friends you care by sending them personalized nudges to keep up with healthy habits. Grow nudges into deeper conversations.',
			category: 'Best Overall',
			image: 'nudge',
			link: 'https://devpost.com/software/nudge-wprc72',
		},
		{
			year: '8',
			appName: 'Dusk to Dawn',
			description:
				'Being alone and socially-deprived during quarantine makes each day quite monotonous. Dusk to Dawn aims to help by allowing users to wake up and fall asleep to voice messages sent by friends.',
			category: 'Best Design',
			image: 'dusktodawn',
			link: 'https://devpost.com/software/dusk-to-dawn',
		},
		{
			year: '8',
			appName: 'Clothes With Care',
			description:
				'Our app provides the platform for a neighborhood clothes exchange program, enabling users to skip the hassle, financial obstacles, and environmental impact of buying new clothes.',
			category: 'Best Mobile',
			image: 'clotheswithcare',
			link: 'https://devpost.com/software/clothes-with-care',
		},
		{
			year: '8',
			appName: 'EyeMotion',
			description:
				"EyeMotion is a meditation app that analyzes eye movement to provide personalized feedback about the quality of one's meditation, such as by detecting restlessness, anxiety, or negative emotion.",
			category: 'Best Web',
			image: 'eyemotion',
			link: 'https://devpost.com/software/eyemotion',
		},
		{
			year: '8',
			appName: 'EmoSign',
			description:
				'To translate sign to language. To translate text to emotion. To connect us with people who need assistance in communication',
			category: 'Best Web',
			image: 'emosign',
			link: 'https://devpost.com/software/emosign',
		},
		{
			year: '8',
			appName: 'Mammal Mayhem',
			description:
				'Mammal Mayhem is a cutesy game designed to provide casual relief to its players.',
			category: 'Best Game',
			image: 'mammalmayhem',
			link: 'https://devpost.com/software/mammal-mayhem',
		},
		{
			year: '8',
			appName: 'Reassure',
			description:
				'Ever had a trouble and not been able to share it? Ever just needed to vent a bit? Then you just might love Reassure! With Reassure, you can anonymously disclose your troubles and receive support.',
			category: 'You Do You',
			image: 'reassure',
			link: 'https://devpost.com/software/reassure',
		},
	];

	const hoth7 = [
		{
			year: '7',
			appName: 'SYFGames',
			description:
				'An multi-platform game that you can play with friends to compete and see who can recognize music the quickest and most accurate!',
			category: 'Best Hack',
			image: 'syfgames',
			link: 'https://devpost.com/software/spuckfotify',
		},
		{
			year: '7',
			appName: 'Wave',
			description:
				'Wave allows for people to use hand gestures to control their computers.',
			category: 'Best Machine Learning Project',
			image: 'wave',
			link: 'https://devpost.com/software/wave-m1pz20',
		},
		{
			year: '7',
			appName: 'Bruin Dining+',
			description: 'A more beautiful and insightful way to dine on the Hill',
			category: 'Best Design/Best React Native',
			image: 'bruindiningplus',
			link: 'https://devpost.com/software/bruin-dining-table-16',
		},
		{
			year: '7',
			appName: 'Alexa Bruinwalk Command (ABC)',
			description: "Are you too lazy to open bruinwalk.com? We've got you!",
			category: 'Best Web Project',
			image: 'anon',
			link: 'https://devpost.com/software/alexa-bruinwalk-command-abc',
		},
		{
			year: '7',
			appName: 'Distance',
			description: 'A convenient to remember what you need to do!',
			category: 'Best Mobile Hack',
			image: 'anon',
			link: 'https://devpost.com/software/distance',
		},
		{
			year: '7',
			appName: 'Meteor Metronome',
			description:
				'Asteroids - with rhythm. Combining the latest innovations in rhythm-based gaming with the classic asteroids arcade game.',
			category: 'Best Game',
			image: 'meteormetronome',
			link: 'https://devpost.com/software/meteor-metronome',
		},
		{
			year: '7',
			appName: 'Delightful Diners',
			description:
				'Navigating the dining hall menus on the UCLA Housing app is painstakingly slow. Delightful Diners provides a comprehensive nutritional overview of the menus with just a few voice commands.',
			category: 'Best DevX API',
			image: 'anon',
			link: 'https://devpost.com/software/delightful-diners',
		},
		{
			year: '7',
			appName: 'Cat Rampage',
			description: "It's a Cat-astrophe!",
			category: 'You do You',
			image: 'anon',
			link: 'https://devpost.com/software/cat-rampage',
		},
	];

	const hoth6 = [
		{
			year: '6',
			appName: 'REACTions',
			description:
				"Don't just press like or dislike buttons on videos. React to them.",
			category: 'Best Hack',
			image: 'anon',
			link: 'https://devpost.com/software/reactions-dthb4c',
		},
		{
			year: '6',
			appName: 'Home Sweet Home',
			description:
				'A mobile app that allows roommates in an apartment to handle expenses and chores',
			category: 'Best React Project',
			image: 'homesweethome',
			link: 'https://devpost.com/software/table-39-home-sweet-home',
		},
		{
			year: '6',
			appName: 'myCloset',
			description: 'Bruin to Bruin Clothes Renting',
			category: 'Best Mobile Hack',
			image: 'mycloset',
			link: 'https://devpost.com/software/mycloset-ltfok9',
		},
		{
			year: '6',
			appName: 'Graduate Admissions Success Predictor (GASP)',
			description:
				'Machine Learning algorithm to determine the probability of getting into graduate school',
			category: 'Best Machine Learning Project',
			image: 'graduateadmissions',
			link: 'https://devpost.com/software/graduate-school-predictions',
		},
		{
			year: '6',
			appName: 'hapi',
			description: 'Share the happiest//most enjoyable thing in ur day',
			category: 'Best Design',
			image: 'hapi',
			link: 'https://devpost.com/software/hapi-2ejm71',
		},
		{
			year: '6',
			appName: 'Phase Shift',
			description:
				'2D Platformer where two players control the same character and must cooperate to solve puzzles and fight enemies',
			category: 'Best Game',
			image: 'anon',
			link: 'https://devpost.com/software/table-47-redshift',
		},
		{
			year: '6',
			appName: 'SuperPong',
			description: 'Pong, but better!',
			category: 'You do You',
			image: 'superpong',
			link: 'https://devpost.com/software/superpong',
		},
	];

	const hoth5 = [
		{
			year: '5',
			appName: 'BelpDining',
			description: 'Yelp for UCLA Bruins!!!',
			category: 'Best Overall Hack',
			image: 'belpdining',
			link: 'https://devpost.com/software/belpdining',
		},
		{
			year: '5',
			appName: 'Stressful Sorting Simulator',
			description:
				'A VR experience featuring bombs, balls, and exponentially increasing levels of stress.',
			category: 'Best Hardware Hack',
			image: 'anon',
			link: 'https://devpost.com/software/stressful-sorting-simulator-table-4',
		},
		{
			year: '5',
			appName: 'LectureKiller',
			description: 'speech recognization, lecture recording, study platform',
			category: 'Best Web Hack',
			image: 'lecturekiller',
			link: 'https://devpost.com/software/26-lecturekiller',
		},
		{
			year: '5',
			appName: 'ParkMe',
			description: 'Helps you find parking.',
			category: 'Best Mobile Hack',
			image: 'anon',
			link: 'https://devpost.com/software/1-parkme',
		},
		{
			year: '5',
			appName: 'Gatling Bun',
			description: 'Side-scrolling shoot-em-up/boss rush',
			category: 'Best Design',
			image: 'gatlingbun',
			link: 'https://devpost.com/software/gatling-bun-table-3',
		},
		{
			year: '5',
			appName: 'Gravity Fall',
			description:
				'Two players play with gravity and collaborate to deliver a key to a treasure chest.',
			category: 'Best Game',
			image: 'gravityfall',
			link: 'https://devpost.com/software/gravity-fall',
		},
	];

	const hoth4 = [
		{
			year: '4',
			appName: 'SEASide',
			description: 'SEASide brings the trouble of SEASNET to sea level!',
			category: '1st Place Overall',
			image: 'anon',
			link: 'https://devpost.com/software/seaside-mbnflv',
		},
		{
			year: '4',
			appName: 'Gotta Go!',
			description:
				"Step into the daily struggle of guys everywhere. Introducing the world's first Bathroom Simulator",
			category: '2nd Place Overall',
			image: 'gottago',
			link: 'https://devpost.com/software/gotta-go',
		},
		{
			year: '4',
			appName: 'Memo4Me',
			description:
				'Memo 4 Me is a web-based communication application between attendees of various events',
			category: '3rd Place Overall',
			image: 'memo4me',
			link: 'https://devpost.com/software/memo4me',
		},
	];

	const hoth3 = [
		{
			year: '3',
			appName: 'Bruin Class Planner',
			description:
				'A smart class selector for future class plan based on optimal professor and class ratings',
			category: '1st Place Overall',
			image: 'anon',
			link: 'https://devpost.com/software/bruin-class-planner',
		},
		{
			year: '3',
			appName: 'Food Nutrition',
			description: 'Detects food using AI and tells you the nutritional values',
			category: '2nd Place Overall',
			image: 'anon',
			link: 'https://devpost.com/software/food-nutrition',
		},
		{
			year: '3',
			appName: 'ClassTime',
			description:
				'A website designed to help you plan how long it takes to get between classes or places',
			category: '3rd Place Overall',
			image: 'anon',
			link: 'https://devpost.com/software/classtime',
		},
		{
			year: '3',
			appName: 'Classy',
			description: 'classy is Tinder for your classes.',
			category: 'Best Mobile Hack',
			image: 'anon',
			link: 'https://devpost.com/software/classy-table-13',
		},
		{
			year: '3',
			appName: 'Breaking The Law',
			description:
				'A Scientist gets caught trapped back in time and has to platform to get his papers back',
			category: 'Best Design',
			image: 'anon',
			link: 'https://devpost.com/software/breaking-the-law',
		},
	];

	const hoth2 = [
		{
			year: '2',
			appName: 'Eve',
			description:
				'The only App you need for UCLA events, either posted on Facebook or from the web',
			category: 'First Place',
			image: 'eve',
			link: 'https://devpost.com/software/eve-bmcaiq',
		},
		{
			year: '2',
			appName: 'What the Happening',
			description:
				'Missed the latest basketball game? Forgot where Hack on the Hill is? What the Happening is here to help!',
			category: 'Second Place',
			image: 'whatthehappening',
			link: 'https://devpost.com/software/what-the-happening',
		},
		{
			year: '2',
			appName: 'Delp',
			description:
				'A Chrome Extension enabling people to rate each dish on the UCLA dining menu website',
			category: 'Third Place',
			image: 'delp',
			link: 'https://devpost.com/software/delp',
		},
		{
			year: '2',
			appName: 'Raise',
			description: 'Why poll when you can raise',
			category: 'Best Mobile Hack',
			image: 'raise',
			link: 'https://devpost.com/software/raise-bxi4zy',
		},
		{
			year: '2',
			appName: 'Mood for Thought',
			description:
				'user sends mood/personalized note around the world; another user "grabs" note and sends back personalized song rec',
			category: 'Best Design Hack',
			image: 'anon',
			link: 'https://devpost.com/software/mood-for-thought',
		},
		{
			year: '2',
			appName: 'Cook Up a Recipe',
			description: 'Easy Link to Recipes',
			category: 'Best Web Hack',
			image: 'cookuparecipe',
			link: 'https://devpost.com/software/cook-up-a-recipe',
		},
	];

	const hoth1 = [
		{
			year: '1',
			appName: 'Nector',
			description: 'Breaking the ice, one word at a time.',
			category: 'Best Hack',
			image: 'nector',
			link: 'https://devpost.com/software/nector',
		},
		{
			year: '1',
			appName: 'Granny Simulator',
			description:
				'A fun look into the daily life of a seemingly normal granny (feat. missing dentures & hungry children).',
			category: 'Best Design',
			image: 'grannysim',
			link: 'https://devpost.com/software/supergranny',
		},
	];

    const winners = {
        'XI': hothXI,
        'X': hothX,
        '9': hoth9,
        '8': hoth8,
        '7': hoth7,
        '6': hoth6,
        '5': hoth5,
        '4': hoth4,
        '3': hoth3,
        '2': hoth2,
        '1': hoth1
    }

	const allPosts = (year.length == 1)?(year !== '1' ? `https://hoth${year}.devpost.com/project-gallery` : 'https://hoth.devpost.com/project-gallery'):`https://hoth-${year}.devpost.com/project-gallery`;

	return (
		<div className='outer-winners-container'>
			<div className='winners-container'>
				{winners[year].map((winner, index) => (
					<Winner key={index} {...winner} />
				))}
			</div>
			<button className='all-posts-button'>
				<a href={allPosts} target='_blank' rel='noreferrer'>
					See All Projects
				</a>
			</button>
		</div>
	);
}
