import React from 'react';
import '../styles/Workshops.css';
import useTitle from '../components/General/useTitle';
import Workshop from '../components/Workshops/Workshop';

export default function Workshops() {
	useTitle(' | Workshops');

	const Container = ({ title, children }) => (
		<div className='section-container'>
			<h2 className='section-title'>{title}</h2>
			<div className='workshops-container'>{children}</div>
		</div>
	);
	
	return (
		<div id='workshops'>
			<h1 className='page-title'>Workshops</h1>
			<Container title='Web Development'>
				<Workshop
				    title='Intro to HTML, CSS, and JS'
					youtube='https://youtu.be/fSvbqxaAWqE'
					author='Hannah Kendall'
					description='This workshop covers the basics of Web Development - HTML, CSS, and JavaScript! Together, they make up the structure (HTML), the style (CSS), and the functionality (JS) of a web application. Keep reading or watch the workshop to learn how to utilize these tools to make a super cool web application of your own!'
					readme='https://github.com/uclaacm/hothXI-workshops/tree/main/intro-to-html-css-js'
					slides='https://docs.google.com/presentation/d/1Z6rnFfiFMpTCIxXbZz9fndr4hMB4XVyQbtid2ET0BSk/edit?usp=drive_link'
				/>
				<Workshop
					title='Intro to Web APIs'
					youtube='https://youtu.be/ZIamyNtujBY'
					author='Kaylin Chung'
					description='Hello! Welcome to HOTH XI&#39;s Intro to Web APIs workshop. This is a guide to introduce you to the foundations of Web APIs that will allow you to integrate them into any fullstack project. We will be covering the client-server model, HTTP requests & responses, and how we can leverage external servers to retrieve data and services for an app. Keep reading to learn more!'
					readme='https://github.com/uclaacm/hothXI-workshops/tree/main/intro-to-webapis'
					slides='https://docs.google.com/presentation/d/1CpiERteBZsqKqRjnYgGruBO2aZnonjRWibSqnthcRws/edit?usp=drive_link'
				/>
				<Workshop
					title='Intro to Servers'
					author='Samuel Perrott'
					youtube='https://youtu.be/1w60BwDG6hs'
					description='In this workshop, you will learn server-side programming in the context of full stack applications! Topics covered include HTTP, CRUD, and REST APIs. The second half of the workshop will include a hands-on demo building your own REST API using Flask and connecting it with a React frontend. By the end of the workshop you will become a server savant savvy with tools such as Postman. Viewers are recommended to have a strong foundation in JavaScript and Python.'
					readme='https://github.com/uclaacm/hothXI-workshops/tree/main/intro-to-servers'
					slides='https://docs.google.com/presentation/d/1ZvL1TrNetVCnJHxDT0ffca0QwEP678LnVAGC846DtZ4/edit?usp=drive_link'
				/>
				<Workshop
				    title='Intro to React.js'
					author='Kayla Hamakawa'
					youtube='https://youtu.be/JZrRLf5Gmqg'
					description='Hello! Welcome to the Intro to React JS workshop for HOTH XI! Here we will be introducing frontend web development using React. In this workshop we will utilize HTML, CSS, and JavaScript, so I would recommend watching the workshop on those if you are not already familiar with them!'
					readme='https://github.com/uclaacm/hothXI-workshops/tree/main/intro-to-react'
					slides='https://docs.google.com/presentation/d/1VsaDQLJS2ShCG8dLjvUt0BP7f9Zrq0oIPf73wCQtbNM/edit?usp=drive_link'
				/>
			</Container>
			<Container title='Mobile Development'>
				<Workshop
				    title='Intro to React Native'
					author='Max Lee'
					youtube='https://youtu.be/ulqijuEyi5Y'
					description='Hello and welcome to our Intro to React Native workshop! We&#39;ll be covering the basics of React Native in a way that I hope is simple to understand and impactful enough to teach some key features of app development. Happy hacking!'
					readme='https://github.com/uclaacm/hothXI-workshops/tree/main/intro-to-react-native'
					slides='https://docs.google.com/presentation/d/1_7WB4HkKUErKpaTbwc2Z7R__20CiRZ8BXlc5oo7FcLw/edit?usp=drive_link'
				/>
			</Container>
			<Container title='Miscellaneous'>
				<Workshop
					title='Hackathon 101'
					author='Aazel Tan'
					youtube='https://youtu.be/Plz5kfY8JLs?list=PLPO7_kXilXFYCo6UngcitrjAHnRXyBmwi'
					description='This workshop video explains the basics of hackathons, which are events where people work together to create technology projects. You&#39;ll learn what to expect and how to make the most out of your experience. By the end of the video, you&#39;ll have a better understanding of what hackathons are all about and how to get started with attending one. Happy hacking, handy hackers!'
					slides='https://docs.google.com/presentation/d/1omzpuEm3yUB92c0uwrMp79aXWa74Ft99jgSNZoUOb7I/edit?usp=drive_link'
				/>
				<Workshop
					title='Intro to Git'
					author='Lillian Gonick'
					youtube='https://youtu.be/Gw2AGGJKnbg'
					description='Hello everyone! Welcome to the Intro to Git workshop README! In this workshop, we will be covering the version control system: Git. Together, we will walk through installing git, creating our first repository, and merging two branches!'
					readme='https://github.com/uclaacm/hothXI-workshops/tree/main/intro-to-git'
					slides='https://docs.google.com/presentation/d/1fU0VoWGm95IsHadN5STolL6PO74Et_sfQFq7WQ5_d24/edit?usp=drive_link'
				/>
				<Workshop
					title='Intro to Databases'
					author='Sneha Agarwal'
					youtube='https://youtu.be/09dT8CcrgTw'
					description='Hi! Welcome to HOTHXI&#39;s Database workshop, in this workshop we&#39;ll be covering the basics of what a database is and walkthrough how to set up, retrieve information, and add information to our database! Before starting this workshop I recommend checking out the React JS or React Native workshops if you&#39;re not familar with them.'
					readme='https://github.com/uclaacm/hothXI-workshops/tree/main/intro-to-databases'
					slides='https://docs.google.com/presentation/d/1rkeQNLEeXlpSXsoHmFdx77FY4HgK-rTUSqRSs7JOe5E/edit?usp=drive_link'
				/>
				<Workshop
					title='Intro to Deep Learning'
					author='Leon Lenk, Maxine Wu, & Jordan Lin (ACM AI)'
					youtube='https://youtu.be/RggC7sb1_cE'
					description='Shoutout to the folks over at ACM AI for putting this together! They created this workshop so serve as an introduction to deep learning, including a notebook linked on the readme to show you actual deep learning code and take you through a hands-on of how you can build this code yourself! In the process of building this model, they go over Big Data, avoiding bias and unintended patterns, understanding our data, making the network, and training.'
					readme='https://bit.ly/acm_ai_24w_intro_dl'
				/>
				<Workshop 
					title='Intro to Game Development'
					author='Austin Law (ACM Game Studio)'
					youtube='https://youtu.be/WkqycKI6vdc'
					description='Shoutout to Austin Law from ACM Game Studio for putting this workshop together for us! In this section, he talks about game development, some tips to success, and lastly, a short introduction to using the Unity game engine.'
					slides='https://docs.google.com/presentation/d/1s545_VhUktrxMzpx6k6hi_kOUbsRiJP0evhJ1x9ai38/edit?usp=sharing'
				/>
			</Container>			
		</div>
	);
}
