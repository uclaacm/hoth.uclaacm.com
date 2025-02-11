import React from 'react';
import '../styles/Home.css';
import useTitle from '../components/General/useTitle';
import Banner from '../components/Home/Banner';
import HothDescription from '../components/Home/HothDescription';
import PhotoCarousel from '../components/Home/PhotoCarousel';
import FAQSection from '../components/Home/FAQSection';
import AnnouncementPopup from '../components/General/AnnouncementPopup';

export default function Home() {
	useTitle('');

	const Container1 = ({ children }) => (
		<section className='white-container'>
			<div className='container-md'>{children}</div>
		</section>
	);

	const Container2 = ({ children }) => (
		<section className='transparent-container'>
			<div className='container-md'>{children}</div>
		</section>
	);

	return (
		<div id='home'>
			<Banner />
			<Container2>
				<HothDescription />
			</Container2>

			<Container1>
				<PhotoCarousel />
			</Container1>

			<Container2>
				<FAQSection />
			</Container2>
			
			<AnnouncementPopup />
		</div>
	);
}
