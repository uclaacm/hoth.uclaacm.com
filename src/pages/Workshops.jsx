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
					youtube='https://youtu.be/Kcdpn4cViHs'
					author='Lavender Hwang'
					description='This workshop covers the basics of Web Development - HTML, CSS, and JavaScript! Together, they make up the structure (HTML), the style (CSS), and the functionality (JS) of a web application. Keep reading or watch the workshop to learn how to utilize these tools to make a super cool web application of your own!'
					readme='https://github.com/uclaacm/hothXII-workshops/tree/main/intro-to-html-css-js'
					slides='https://docs.google.com/presentation/d/183WJ3dzvoR-5tiJm2AtaWxPMg75GvIJQdzoCc45M-w0/edit?usp=sharing'
				/>
				<Workshop
					title='Intro to Web APIs'
					youtube='https://youtu.be/A3_8kMrh0uM'
					author='Nishant Ray'
					description='Hello! Welcome to HOTH XII&#39;s Intro to Web APIs workshop. This is a guide to introduce you to the foundations of Web APIs that will allow you to integrate them into any fullstack project. We will be covering the client-server model, HTTP requests & responses, and how we can leverage external servers to retrieve data and services for an app. Keep reading to learn more!'
					readme='https://github.com/uclaacm/hothXII-workshops/tree/main/intro-to-web-apis'
					slides='https://docs.google.com/presentation/d/1bDBnwyP-kzyJdPuVZlIdN_otH9Ro_SDyg-4VQoDjVu4/edit?usp=sharing'
				/>
				<Workshop
					title='Intro to Svelte'
					author='Henry Wei'
					youtube='https://youtu.be/HrWgND1YHrM'
					description='Learn the fundamentals of Svelte, a modern frontend framework that makes building web apps simple and efficient! We&#39;ll dive into reactivity, props, and component-based development. By the end of the workshop, you&#39;ll know how to create Svelte projects such as Cookie Clicker from scratch!'
					readme='https://github.com/uclaacm/hothXII-workshops/tree/main/intro-to-svelte'
					slides='https://docs.google.com/presentation/d/1oMb0hlhLrTFJRBAnaFEQY3i8TOuDXrQ99NerYBPg3H0/edit?usp=sharing'
				/>
				<Workshop
					title='Intro to React.js'
					author='Melissa Shi'
					youtube='https://youtu.be/r9L4CPtl_Yk'
					description='Hello! Welcome to the Intro to React.js workshop for HOTH XII! Here we will be introducing frontend web development using React. In this workshop we will utilize HTML, CSS, and JavaScript, so I would recommend watching the workshop on those if you are not already familiar with them!'
					readme='https://github.com/uclaacm/hothXII-workshops/tree/main/intro-to-react'
					slides='https://docs.google.com/presentation/d/1BRUslf_JKVFrTkl88qn-Bdq8hCDwvc236Tp9CBsAyU4/edit?usp=sharing'
				/>
			</Container>
			<Container title='Mobile Development'>
				<Workshop
					title='Intro to React Native'
					author='Sebastian Johannessen'
					youtube='https://youtu.be/wG-XPzpQplU'
					description='Hello and welcome to our Intro to React Native workshop! We&#39;ll be covering the basics of React Native in a way that I hope is simple to understand and impactful enough to teach some key features of app development. Happy hacking!'
					readme='https://github.com/uclaacm/hothXII-workshops/tree/main/intro-to-react-native'
					slides='https://docs.google.com/presentation/d/1z5EBrZiODzlhawKBo-fBLwQ7CifeVoOpd5UNEYsVVrI/edit?usp=sharing'
				/>
			</Container>
			<Container title='Miscellaneous'>
				<Workshop
					title='Hackathon 101'
					author='Arnav Roy'
					youtube='https://youtu.be/ccIJDIq8ADo'
					description='This workshop video explains the basics of hackathons, which are events where people work together to create technology projects. You&#39;ll learn what to expect and how to make the most out of your experience. By the end of the video, you&#39;ll have a better understanding of what hackathons are all about and how to get started with attending one. Happy hacking, handy hackers!'
					readme='https://github.com/uclaacm/hothXII-workshops/tree/main/hackathon-101'
					slides='https://docs.google.com/presentation/d/1LuUaUCJ-7rWbos84b1BCEqKAdfAz-F-4-mbpXBHjEhQ/edit?usp=sharing'
				/>
				<Workshop
					title='Intro to Git'
					author='Jeff Huang'
					youtube='https://youtu.be/8sKHlaQIYes'
					description='Hello everyone! Welcome to the Intro to Git workshop README! In this workshop, we will be covering the version control system: Git. Together, we will walk through installing git, creating our first repository, and merging two branches!'
					readme='https://github.com/uclaacm/hothXII-workshops/tree/main/intro-to-git'
					slides='https://docs.google.com/presentation/d/11ShSF4tyv7Uof_YNRTYid7Up79wKKJd_1BGQlboxWqQ/edit?usp=sharing'
				/>
				<Workshop
					title='Intro to Databases'
					author='Lorelei Tang'
					youtube='https://youtu.be/fx1ouBp8a0E'
					description='Hi! Welcome to HOTHXII&#39;s Database workshop, in this workshop we&#39;ll be covering the basics of what a database is and walkthrough how to set up, retrieve information, and add information to our database! Before starting this workshop I recommend checking out the React.js or React Native workshops if you&#39;re not familar with them.'
					readme='https://github.com/uclaacm/hothXII-workshops/tree/main/intro-to-databases'
					slides='https://docs.google.com/presentation/d/1hh1fzjtKBNIxyYSO9rNeQnRPbZ530W70OlzPZK03s6M/edit?usp=sharing'
				/>
				<Workshop
					title='Intro to Scripting'
					author='Daniel Zhou'
					youtube='https://youtu.be/M0u97Jw_BTE'
					description='Hi! Welcome to HOTH XII&#39;s Intro to Scripting workshop! In this session, we&#39;ll explore the fundamentals of scripting—what it is, how it differs from traditional programming, and when it&#39;s useful. We&#39;ll then walk through setting up Python, using Jupyter Notebook, creating virtual environments, and building a simple web scraper that handles multiple pages. By the end, you&#39;ll have the core skills to automate tasks and gather data from websites with Python scripts. Let&#39;s dive in!'
					readme='https://github.com/uclaacm/hothXII-workshops/tree/main/intro-to-scripting'
					slides='https://docs.google.com/presentation/d/16ztS-cGEtdrq4hn13Hdd8TaGNLmeNMtGRHpLCNy1d3k/edit?usp=sharing'
				/>
				<Workshop
					title='Intro to AI'
					author='Kian Shandi'
					youtube='https://youtu.be/5HR9MA0H2Wc'
					description='This workshop will explore the basics of Artificial Intelligence (AI), diving into generative AI and explaining how models like ChatGPT work under the hood. You&#39;ll even learn how to integrate AI into your projects with a hands-on demo using the OpenAI&#39;s API! By the end, you&#39;ll have the foundational knowledge and tools to kickstart your own AI-powered projects. Enjoy!'
					readme='https://github.com/uclaacm/hothXII-workshops/tree/main/intro-to-ai'
					slides='https://docs.google.com/presentation/d/1cOiSs0vNcFFRZTClhkJq_YWT6JlMEuBMFGbDskELiQs/edit?usp=sharing'
				/>
				<Workshop
					title='Intro to Game Development'
					author='Jaewook Cho'
					youtube='https://youtu.be/2bFPX1tDPAY'
					description='This workshop covers the basics of Game Development using PyGame—Python&#39;s powerful library for 2D games! Together, they provide the structure (game loop), the visuals (drawing and movement), and the interactivity (player controls) of a game. Make sure to watch the workshop video to learn how to use these tools to create a super fun game of your own, like "Dodge the Blocks!"'
					readme='https://github.com/uclaacm/hothXII-workshops/tree/main/intro-to-game-dev'
					slides='https://docs.google.com/presentation/d/1E4W7XFK-gYM028gCrU0Hm9YMqJATKl8cv2doVt500Zw/edit?usp=sharing'
				/>
			</Container>
		</div>
	);
}
