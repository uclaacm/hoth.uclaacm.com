import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from '@geist-ui/icons';
import '../../styles/Navbar.css';
import HackLogo from '../../images/hothXI-logo.svg';

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const [isMobile, setIsMobile] = useState(false);
	const IsApplyActive = true;
	const ApplyButtonClassName = 'apply-btn ' + (IsApplyActive?'apply-active':'apply-inactive');

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	const closeMenu = () => {
		setIsOpen(false);
	};

	// Hook to listen for screen width changes
	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth <= 950) {
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
				<img src={HackLogo} alt='ACM Hack Logo' className='nav-hack-logo' />
				<h1>Hack on the Hill</h1>
			</Link>

			{/* Show hamburger only when isMobile is true (screen width <= 950px) */}
			{isMobile && (
				<div className='hamburger' onClick={toggleMenu}>
					<Menu size={32} />
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
				{/* RE-ACTIVATE SCHEDULE TAB WHEN SOLIDIFIED */}
				{/* <li>
					<Link to='/schedule' onClick={closeMenu}>
						SCHEDULE
					</Link>
				</li> */}
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
				<li>
					<a href="https://www.google.com" className={ApplyButtonClassName}>APPLY</a>
				</li>
			</ul>
		</nav>
	);
}
