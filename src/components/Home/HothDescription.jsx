import React from 'react';
import '../../styles/Home.css';
import ScrollAnimation from 'react-animate-on-scroll';

const hackDescription = `We are a student-run organization whose mission is to
empower the community by providing the means to build amazing things and explore
what is possible through code. We teach quarterly workshops and host events for
students to expand their knowledge and apply their creativity to projects. Our
events are for coders of all skills levels, so whether you've been to 10 hackathons
or you just learned "Hello World," we're happy to have you.`;

const connectedDescription = `Stay connected with us on our social media platforms to 
get the latest updates on our events and workshops!`;

export default function HothDescription() {
	return (
		<div>
			<div className='hack-description-container'>
				{/* <img src={logo} className='home-hack-logo' alt='Hack Logo' /> */}
				<ScrollAnimation animateIn='fadeIn'>
					<div className='hack-description'>
						<h1 className='hack-title'>What is Hack?</h1>
						<p>{hackDescription}</p>
					</div>
				</ScrollAnimation>
			</div>
			<div className='hack-connected-container'>
				{/* <img src={pigeon} className='home-graphic' alt='Hack Logo' /> */}
				<ScrollAnimation animateIn='fadeIn'>
					<h2 className='hack-subtitle'>Stay Connected</h2>
					<p>{connectedDescription}</p>
				</ScrollAnimation>
			</div>
		</div>
	);
}
