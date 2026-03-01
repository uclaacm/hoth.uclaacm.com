import React from 'react';
import '../styles/Workshops.css';
import useTitle from '../components/General/useTitle';
import Workshop from '../components/Workshops/Workshop';

export default function Workshops() {
	useTitle(' | Workshops');

	const Container = ({ title, children }) => (
		<div className='workshop-section-container'>
			<h2 className='workshop-section-title'>{title}</h2>
			<div className='workshops-container'>{children}</div>
		</div>
	);

	{/*YouTube links MUST be in https://youtu.be/(ID) format nothing can trail the ID field*/}
	return (
		<div id='workshops'>
			<h1 className='page-title'>Workshops</h1>
			<Container title='Web Development'>
				<Workshop
					title='Intro to HTML, CSS, and JS'
					youtube='https://youtu.be/dCGkeX2b2CM'
					author='Soumya Kalle'
					description='This workshop covers the basics of Web Development - HTML, CSS, and JavaScript! Together, they make up the structure (HTML), the style (CSS), and the functionality (JS) of a web application. Keep reading or watch the workshop to learn how to utilize these tools to make a super cool web application of your own!'
					readme='https://github.com/uclaacm/hothXIII-workshops/tree/main/intro-to-html-css-js'
					slides='https://docs.google.com/presentation/d/11eWqxtoThupIx8Iu_ExZH1K58fXAIvqaZc_oRIP6d9U/edit?usp=drive_link'
				/>
				<Workshop
					title='Intro to Web APIs'
					youtube='https://youtu.be/scILA0zYS0k'
					author='Kartik Bhatia'
					description='Hello! Welcome to HOTH XIII&#39;s Intro to Web APIs workshop. This is a guide to introduce you to the foundations of Web APIs that will allow you to integrate them into any fullstack project. We will be covering the client-server model, HTTP requests & responses, and how we can leverage external servers to retrieve data and services for an app. Keep reading to learn more!'
					readme='https://github.com/uclaacm/hothXIII-workshops/tree/main/intro-to-web-apis'
					slides='https://docs.google.com/presentation/d/1D1vW7hIkPgjpDXYAeH738l2UZWgwadQk9jFhYQGPH_g/edit?usp=drive_link'
				/>
				<Workshop
					title='Intro to React'
					author='Kritish Alli'
					youtube='https://youtu.be/2lENgGPf2i0'
					description='Hello! Welcome to the Intro to React workshop for HOTH XIII! Here we will be introducing frontend web development using React. In this workshop we will utilize HTML, CSS, and JavaScript, so I would recommend watching the workshop on those if you are not already familiar with them!'
					readme='https://github.com/uclaacm/hothXIII-workshops/tree/main/intro-to-react'
					slides='https://docs.google.com/presentation/d/1NLaZyaPtMk3RE-yQaOyS7xDmTxHlo0hCkusFIUvFCEM/edit?usp=drive_link'
				/>
			</Container>
			<Container title='Mobile Development'>
				<Workshop
					title='Intro to React Native'
					author='Benjamin Garcia'
					youtube='https://youtu.be/sDNlM5DE0To'
					description='Hello and welcome to our Intro to React Native workshop! We&#39;ll be covering the basics of React Native in a way that I hope is simple to understand and impactful enough to teach some key features of app development. Happy hacking!'
					readme='https://github.com/uclaacm/hothXIII-workshops/tree/main/intro-to-react-native'
					slides='https://docs.google.com/presentation/d/1kX_hIZEGvXbYhyDmzKDXkBpvs94-ZVZhxYUR_b60fFU/edit?usp=drive_link'
				/>
			</Container>
			<Container title='Miscellaneous'>
				<Workshop
					title='Hackathon 101'
					author='Michelle Lee'
					youtube='https://youtu.be/FExxaP9mq38'
					description='This workshop video explains the basics of hackathons, which are events where people work together to create technology projects. You&#39;ll learn what to expect and how to make the most out of your experience. By the end of the video, you&#39;ll have a better understanding of what hackathons are all about and how to get started with attending one. Happy hacking, handy hackers!'
					readme='https://github.com/uclaacm/hothXIII-workshops/tree/main/hackathon-101'
					slides='https://docs.google.com/presentation/d/1K83P0WIyvHPsDRM6Cau9ACoy1TuJnyJFn14ao9vllJs/edit?usp=sharing'
				/>
				<Workshop
					title='Intro to Git'
					author='Max Zhang'
					youtube='https://youtu.be/auG67h1VbhI'
					description='Hello everyone! Welcome to the Intro to Git workshop! In this workshop, we will be covering the version control system: Git.'
					readme='https://github.com/uclaacm/hothXIII-workshops/tree/main/intro-to-git'
					slides='https://docs.google.com/presentation/d/1vuRYYHk_0BUuzgeGxCQeu8WWxOL5aE4RAGZAq8ktHpg/edit?usp=drive_link'
				/>
				<Workshop
					title='Intro to Databases'
					author='Kaelyn Yang'
					youtube='https://youtu.be/k4h19EL4hR8'
					description='Hi! Welcome to HOTH XIII&#39;s Database workshop, in this workshop we&#39;ll be covering the basics of what a database is and walkthrough how to set up, retrieve information, and add information to our database! Before starting this workshop I recommend checking out the React.js or React Native workshops if you&#39;re not familar with them.'
					readme='https://github.com/uclaacm/hothXIII-workshops/tree/main/intro-to-databases'
					slides='https://docs.google.com/presentation/d/1H2r-xmcuVzgbgcm5AJ80XMWF14bbiljHozk_ZpuBycw/edit?usp=drive_link'
				/>
				<Workshop
					title='Intro to Scripting'
					author='Jaivin Phabiani'
					youtube='https://youtu.be/kAcxYceQ4UA'
					description='Hi! Welcome to HOTH XIII&#39;s Intro to Scripting workshop! In this session, we&#39;ll cover what scripting is, why Python is the go-to language for it, and how to use scripts to scrape data from the web. Whether you&#39;ve never written a Python script before or just want to get more comfortable with it, this workshop will give you tools you can use tonight. Let&#39;s get into it!'
					readme='https://github.com/uclaacm/hothXIII-workshops/tree/main/intro-to-scripting'
					slides='https://docs.google.com/presentation/d/1WHTzUVPTG6G0RGvZXPPTqRTU5MIq7PPcr2xHmmIjtv0/edit?usp=drive_link'
				/>
				<Workshop
					title='Intro to AI'
					author='Mark Mairs'
					youtube='https://youtu.be/wktPNmRz8KY'
					description='Hi! Welcome to HOTH XIII&#39;s Intro to AI workshop! In this session, we&#39;ll explore the fundamentals of what Artificial Intelligence (AI) is, how it differs from traditional algorithms and human thinking, and how to integrate AI into your own projects using Google Gemini&#39;s API.'
					readme='https://github.com/uclaacm/hothXIII-workshops/tree/main/intro-to-ai'
					slides='https://docs.google.com/presentation/d/1-NhOcMH48Ei7SCf6_vpumUbxGLTfxohckF6xGwhjOw4/edit?usp=drive_link'
				/>
				<Workshop
					title='Intro to Deployment'
					author='Daniel Mastick'
					youtube='https://youtu.be/P2CxxTc3giI'
					description='This workshop is a quick guide + reference for deploying a web app from local development (localhost) to a live production URL using Vercel.'
					readme='https://github.com/uclaacm/hothXIII-workshops/tree/main/intro-to-deployment'
					slides='https://docs.google.com/presentation/d/1n4jQYSuurB-sxwuZuUhDUG8b5y1cIRZLnd7KnKkob8s/edit?usp=drive_link'
				/>
			</Container>
		</div>
	);
}
