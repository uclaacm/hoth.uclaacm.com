import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import Navbar from './components/General/Navbar';
import Home from './pages/Home';
import Announcements from './pages/Announcements';
import Schedule from './pages/Schedule';
import Workshops from './pages/Workshops';
import Prizes from './pages/Prizes';
import Gallery from './pages/Gallery';
import NotFound from './pages/NotFound';
import Footer from './components/General/Footer';
import AnnouncementPopup from './components/General/AnnouncementPopup';
import './styles/App.css';

function App() {
	return (
		<div id='app'>
			<Navbar />
			<ScrollToTop />
			<Routes>
				<Route path='/' element={<Home />} />
				{/* <Route path='/announcements' element={<Announcements />} /> */}
				<Route path='/schedule' element={<Schedule />} />
				{/* <Route path='/workshops' element={<Workshops />} /> */}
				{/* <Route path='/prizes' element={<Prizes />} /> */}
				<Route path='/gallery' element={<Gallery />} />
				<Route path = '*' element = {<NotFound/>} />
			</Routes>
			<Footer />
			{/* <AnnouncementPopup /> */}
		</div>
	);
}

export default App;
