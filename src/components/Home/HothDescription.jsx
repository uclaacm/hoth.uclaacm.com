import React from 'react';
import '../../styles/Home.css';
import img1 from '../../images/hoth-title/IMG_1914.jpg';
import img2 from '../../images/hoth-title/IMG_2030.jpg';
import img3 from '../../images/hoth-title/hack_motif_applied.jpg';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function HothDescription() {
	return (
		<div>
			<div className='hoth-title-container' data-aos='light-fade-up'>
				<div>
					<div className='title-left'>
						<h1 className='hoth-what'>What&apos;s</h1>
					</div>
					<div className='title-center'>
						<h1 className='hoth-title'>HACK ON THE HILL?</h1>
						<h1 className='hoth-desc'>Explore. Build. Empower.</h1>
					</div>
				</div>
			</div>

			<div className='img-left-container' data-aos='light-fade-up'>
				<div className='img-left'>
					<LazyLoadImage
						src={img1}
						alt='Participants at Hack on the Hill'
						className='hoth-img'
						wrapperProps={{
							style: { transitionDelay: '0.4s' },
						}}
						placeholderSrc={img1}
						effect='blur'
					/>
				</div>
				<p className='img-left-p'>
					Hack on the Hill (HOTH XII) is a{' '}
					<strong>12-hour beginner-friendly</strong> hackathon designed to be
					your first hackathon experience. HOTH XII will be in-person on the
					Hill in the Covel Commons Grand Horizon Ballroom. We hope to see you
					there!
				</p>
			</div>

			<div className='img-right-container' data-aos='light-fade-up'>
				<div className='img-right'>
					<LazyLoadImage
						src={img2}
						alt='Participants at Hack on the Hill'
						className='hoth-img'
						wrapperProps={{
							style: { transitionDelay: '0.4s' },
						}}
						placeholderSrc={img2}
						effect='blur'
					/>
				</div>
				<p className='img-right-p'>
					During HOTH, you&apos;ll get to learn from <strong>workshops</strong>, receive technical help from <strong>mentors</strong>, and meet new people while participating in <strong>fun</strong>
					social activities. There will be <strong>prizes</strong> for the best hacks!
				</p>
			</div>

			<div className='img-left-container' data-aos='light-fade-up'>
				<div className='img-left'>
					<LazyLoadImage
						src={img3}
						alt='Hack banner'
						className='hoth-img'
						wrapperProps={{
							style: { transitionDelay: '0.4s' },
						}}
						placeholderSrc={img3}
						effect='blur'
					/>
				</div>
				<p className='img-left-p'>
					Hack on the Hill is an event hosted by ACM Hack. A student-run organization, Hack&apos;s mission is to help the community to apply
					their creativity and build amazing things with code. Check out our{' '}
					<a
						className='hack-website-link'
						href='https://hack.uclaacm.com/'
						target='_blank'
						rel='noreferrer'
					>
						website
					</a>
					&nbsp;to find out more about our quarterly workshops and other
					events!
				</p>
			</div>
		</div>
	);
}