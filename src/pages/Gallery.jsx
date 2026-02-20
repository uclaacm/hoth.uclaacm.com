import { React, useState } from 'react';
import useTitle from '../components/General/useTitle';
import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import Winners from '../components/Gallery/Winners';
import PhotoCarousel from '../components/Gallery/PhotoCarousel';
import '../styles/Gallery.css';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/zoom.css';

export default function Gallery() {
	useTitle(' | Gallery');

	const [year, setYear] = useState('XII');

	const Container = ({ children }) => (
		<section className='section-container'>
			<div className='container-md'>{children}</div>
		</section>
	);

	return (
		<div id='gallery'>
			<PhotoCarousel year={year} />
			<div className='section-header'>
				<h2 className='section-title'>HOTH {year} Winners! 🎉</h2>
				<Menu
					menuButton={
						<MenuButton className='past-winners'>Past Winners</MenuButton>
					}
					onItemClick={e => setYear(e.value)}
					overflow='auto'
					boundingBoxPadding='60 10 0 0'
					position='auto'
					menuClassName='past-winners-menu'
				>
					<MenuItem className='menu-item' value='XII'>
						HOTH XII
					</MenuItem>
					<MenuItem className='menu-item' value='XI'>
						HOTH XI
					</MenuItem>
					<MenuItem className='menu-item' value='X'>
						HOTH X
					</MenuItem>
					<MenuItem className='menu-item' value='9'>
						HOTH 9
					</MenuItem>
					<MenuItem className='menu-item' value='8'>
						HOTH 8
					</MenuItem>
					<MenuItem className='menu-item' value='7'>
						HOTH 7
					</MenuItem>
					<MenuItem className='menu-item' value='6'>
						HOTH 6
					</MenuItem>
					<MenuItem className='menu-item' value='5'>
						HOTH 5
					</MenuItem>
					<MenuItem className='menu-item' value='4'>
						HOTH 4
					</MenuItem>
					<MenuItem className='menu-item' value='3'>
						HOTH 3
					</MenuItem>
					<MenuItem className='menu-item' value='2'>
						HOTH 2
					</MenuItem>
					<MenuItem className='menu-item' value='1'>
						HOTH 1
					</MenuItem>
				</Menu>
			</div>
			<Container>
				<Winners year={year} />
			</Container>
		</div>
	);
}
