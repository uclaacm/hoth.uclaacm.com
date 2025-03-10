import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from '@geist-ui/icons';
import DarkModeToggle from '../General/DarkModeToggle';
import '../../styles/Navbar.css';
import HackLogo from '../../images/hothXII-logo.png';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const [isMobile, setIsMobile] = useState(false);
	const isApplyActive = false;
	const applyButtonClassName =
		'apply-btn ' + (isApplyActive ? 'apply-active' : 'apply-inactive');

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	const closeMenu = () => {
		setIsOpen(false);
	};

	// Hook to listen for screen width changes
	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth <= 1000) {
				setIsMobile(true);
			} else {
				setIsMobile(false);
				setIsOpen(false);
			}
		};

		handleResize();

		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<nav className='navbar'>
			<Link to='/' onClick={closeMenu} className='nav-hack'>
				<LazyLoadImage
					src={HackLogo}
					alt='ACM Hack Logo'
					className='nav-hack-logo'
				/>
				<h1>Hack on the Hill</h1>
			</Link>

			{/* Show theme toggler and hamburger on navbar only when isMobile is true (screen width <= 1000px) */}
			{isMobile && (
				<div className='mobile-nav-container'>
					<DarkModeToggle />
					<div className='hamburger' onClick={toggleMenu}>
						<Menu size={32} />
					</div>
				</div>
			)}

			{/* Toggle 'active' class based on isOpen state */}
			<ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
				<li>
					<Link to='/' onClick={closeMenu}>
						HOME
					</Link>
				</li>
				<li>
					<Link to='/announcements' onClick={closeMenu}>
						ANNOUNCEMENTS
					</Link>
				</li>

				<li>
					<Link to='/schedule' onClick={closeMenu}>
						SCHEDULE
					</Link>
				</li>
				<li>
					<Link to='/workshops' onClick={closeMenu}>
						WORKSHOPS
					</Link>
				</li>
				<li>
					<Link to='/prizes' onClick={closeMenu}>
						PRIZES
					</Link>
				</li>
				<li>
					<Link to='/gallery' onClick={closeMenu}>
						GALLERY
					</Link>
				</li>
				{!isMobile && (
					<li>
						<DarkModeToggle />
					</li>
				)}
				<li>
					<a
						href='https://docs.google.com/forms/d/e/1FAIpQLSe-D77hcvmW6T4KzabYsP0Jsee3NbySxmXgygN_yjQl42Iesg/viewform'
						className={applyButtonClassName}
						target='_blank'
						rel='noreferrer'
					>
						SUBMIT
					</a>
				</li>
			</ul>
		</nav>
	);
}
