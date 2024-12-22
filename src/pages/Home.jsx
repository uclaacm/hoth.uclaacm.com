import React from 'react';
import '../styles/Home.css';
import useTitle from '../components/General/useTitle';
import Banner from '../components/Home/Banner';
import HothDescription from '../components/Home/HothDescription';
import PhotoCarousel from '../components/Home/PhotoCarousel';

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
		<div>
			<Banner />
			<Container1>
				<HothDescription />
			</Container1>

			<Container2>
				<PhotoCarousel />
			</Container2>
		</div>
	);
}
