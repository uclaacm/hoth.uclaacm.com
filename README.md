<img align=left width=100 src=src/images/hack-logo.svg alt="Hack logo">

# Hack on the Hill (HOTH) Website

[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](code-of-conduct.md)
[![Netlify Status](https://api.netlify.com/api/v1/badges/4825a1ca-c270-4bfb-980e-8c616ef8e123/deploy-status)](https://app.netlify.com/sites/acm-hoth/deploys)

This repository contains the code for ACM Hack’s Hack on the Hill website! Hack
on the Hill (HOTH) is a 12-hour, beginner-friendly hackathon hosted by ACM Hack
@ UCLA. This event is designed to give beginners a taste of what a hackathon
looks and feels like. During HOTH, there are workshops and mentors available to
provide technical support and help beginners get started on their projects.
There is also hardware available for hackers to check out and hack with.

This website is developed with [Gatsby](https://www.gatsbyjs.org/) and
[Material UI](https://material-ui.com/), and is a work-in-progress being
developed by ACM Hack’s Dev Team: 
- Jakob Reinwald [(@jakobreinwald)](https://github.com/jakobreinwald)
- Katelyn Yu [(@katelynsyu)](https://github.com/katelynsyu)
- Maggie Li [(@maggieelli)](https://github.com/maggieelli)
- Aazel Tan [(@aazeltan)](https://github.com/aazeltan)
- Hannah Kendall [(@hannahkendall04)](https://github.com/hannahkendall04)
- James Wu [(@jamesmwu)](https://github.com/jamesmwu)
- Jenna Wang [(@ariyin)](https://github.com/ariyin)
- Kayla Hamakawa [(@kaylahama)](https://github.com/kaylahama)
- Kaylin Chung [(@kaylin-chung)](https://github.com/kaylin-chung)
- Lillian Gonick [(@lilliangonick)](https://github.com/lilliangonick)
- Max Lee [(@maxywaxyy)](https://github.com/maxywaxyy)
- Nathan Zhang [(@nathanzzhang)](https://github.com/nathanzzhang)
- Samuel Perrott [(@sperrott22)](https://github.com/sperrott22)
- Shiyu Ye [(@Monicaaawa)](https://github.com/Monicaaawa)
- Sneha Agarwal [(@snehaagar2023)](https://github.com/snehaagar2023)

Past contributors: 
- Alex Xia [(@khxia)](https://github.com/khxia)
- Anakin Trotter [(@AnakinTrotter)](https://github.com/AnakinTrotter)
- Andy Lewis [(@datowq)](https://github.com/datowq)
- Brooke Jiang [(@jiangxuann)](https://github.com/jiangxuann)
- Chandra Suresh [(@curesh)](https://github.com/curesh)
- Christina Tong [(@christinatong01)](https://github.com/christinatong01)
- Eric Yang [(@eric8yang)](https://github.com/eric8yang)
- Galen Wong [(@GalenWong)](https://github.com/GalenWong)
- Jamie Liu [(@jamieliu386)](https://github.com/jamieliu386/)
- Jody Lin [(@jodymlin)](https://github.com/jodymlin)
- Jonathan Si [(@jsi19)](https://github.com/jsi19)
- Miles Wu [(@milesswu)](https://github.com/milesswu)
- Satyen Subramaniam [(@SubramaniamSatyen)](https://github.com/SubramaniamSatyen)
- Thomas McGall [(@tmag1)](https://github.com/tmag1)
- Timothy Gu [(@TimothyGu)](https://github.com/TimothyGu/)
- Timothy Rediehs [(@Timthetic)](https://github.com/Timthetic)

ACM Hack is a subcomittee of [ACM @ UCLA](http://www.uclaacm.com/), the largest
Computer Science student organization in Southern California. Check out [our
website](https://hack.uclaacm.com/) to learn more about who we are and what we
do!

## Getting Started
You’ll need:
- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en/) – we are currently using v16. In the event
  that this changes, we will need to modify `package.json`, `.nvmrc`, and 
  `.github/workflows/lint.yml` to reflect the change.
- [Yarn 1.x](https://classic.yarnpkg.com/en/) (Note that we don’t yet work with
  Yarn 2.)
- if you use VSCode, we recommend you install the
  [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
  extension

### Running the Project
Type the following lines in your command line:
```sh
$ git clone https://github.com/uclaacm/hoth.uclaacm.com.git
$ cd hoth.uclaacm.com
$ yarn
$ yarn develop
```
You can then navigate to `http://localhost:8000/` in your browser to see the
website!

### Notes
- Be sure to run `yarn` every time there are changes to `package.json`. Usually
  you’ll want to run `yarn` in the following scenarios:
  - after pulling from main
  - after merging main into your branch
  - after switching branches (that may have different dependencies)
- This project uses ESLint to ensure code style compliance. ESLint is
  automatically run when you try to make a Git commit, though this can be
  overridden in exigent circumstances with `--no-verify`. To run ESLint
  manually, do `yarn lint`.

### Troubleshooting
If something breaks in a weird way, try the following in order:
- run `yarn`
- delete the `public`, `.cache`, and `node_modules/.cache` directories
- delete the `node_modules` directory entirely and reinstall dependencies
  by running `yarn`

# Maintenance

### Gallery
The Gallery Page is implemented in `src/components/GalleryPage`. Images can be added to the gallery carousel by adding images to `src/images/gallery-carousel`. The page opens up to the winners of the most recent HOTH, with the option of seeing the winners of the other HOTHS as well. The actual implementation of each HOTH's gallery is in `src/data/winners`, with each HOTH having a yaml file with its gallery. In order to add a new HOTH, just create a new yaml file with the name `hoth-$(hoth number).yml`, and use the following format (this is HOTH 1's, as an example): 
```
- name: "HOTH 1"
  devpost: https://hoth.devpost.com/project-gallery
  
  winners:
    - title: Nector
      category: Best Hack
      description: "Breaking the ice, one word at a time."
      link: "https://devpost.com/software/nector"
      image: nector
    - title: Granny Simulator
      category: Best Design
      description: "A fun look into the daily life of a seemingly normal granny (feat. missing dentures & hungry children)."
      link: "https://devpost.com/software/supergranny"
      image: grannysim
```
The images referenced by the `image` prop of each winner can be inserted into `src/images/gallery-winners` in its respective HOTH number folder. Finally, make sure to change the `to` prop of the Gallery Page in `const links` in `src/components/MenuBar/ButtonBar.js` to the most recent HOTH (`/gallery/hoth-$(#)`).

### Homepage Carousel
Photos for the homepage carousel are stored in the following directory: `src/images/homepage-carousel`. In order to include a photo in this carousel, just add the photo to this directory.

### Announcements
Announcements are implemented the Announcements page and via a Github Actions script that pulls data from the `HOTH Announcements Data` issue on the HOTH website's Github page. Each comment serving as its own separate announcement. Every time a new comment is added on this issue, the Github Actions script re-scrapes the data from the issue and publishes it onto the Announcements Page with the new comment included. 

Therefore, announcements can be added to the announcements page by adding a comment to this issue in the following format: `${Subject}(Subject)${Body}`. 

To enumerate, comments/announcements should have the subject/title of the announcement, followed by `(Subject)`, followed by the body/description of the announcement.

### Prizes
The Prize Page is implemented in the files `src/components/PrizePage/Prizes.js` and `src/components/PrizePage/PrizeHeader.js`. In the `Prizes.js` file, we can see a constant that defines how prizes are implemented: 
```
const allPrizes = [
	{
		img: 'best-overall',
		track: 'Best Overall',
		prize: '$240 Amazon Gift Card',
		caption: '1 Echo Studio'
	},
  ```
  Prizes can be added to the Prize Page by adding the new prize with the following format. As for the `img` section of `allPrizes`, this defines the name of both the prize icon and prize image, which are held in the `src/images/prize-icons` and `src/images/prize-images` folders, respectively. When adding the prize, make sure to add the icon and image to these folders, each image with the same filename you used for the `img` section of `allPrizes`.

### FAQ
The FAQ section's implementation is in the directory `src/components/HomePage/FAQSection.js`. Within the file, at the beginning of the function component `function FAQSection()`, there is a `const faqs` variable that holds all of the FAQs that are displayed on the page. Each FAQ has the following format: 
```
{
	question: `What's a hackathon?`,
	answer:
		<>
			A hackathon is an event during which people from different backgrounds
			come together to create a project from start to finish in a limited time frame.
			Check out some examples from last year!
			HOTH <Link href='https://hoth8.devpost.coproject-gallery'>here</Link>!
		</>
},
```
FAQs can be added to the FAQ section by adding the new question and answer to this variable in the given format. Make sure to put a comma after the closing bracket!

### Schedule
The implementation of the Schedule Page is within `src/components/SchedulePage`. All of the information for the actual schedule is displayed in `src/data/eventSchedule.js`, in the constant `eventSchedule`. In this constant, events are defined as follows:
```
	{
		startTime: getDateObj('26', '08:00:00'),
		events: [
			{
				name: 'Check in',
				duration: '30 min',
				location: 'Covel Grand Horizon',
				description: `Bring your bruin card and daily symptoms monitoring
				survey to check in with one of the Hack officers at the front.
				Remember to bring some snacks, water, your laptop, and your laptop charger!`
			}
		]
	},
  ```
  Portions of the schedule are denoted via their start time (a date object with the day number of the month and time specified), with each json element having its own start time. Add events to the schedule using this format, making sure to order them by time. Notice that the `events` prop of each json element is an array, meaning that multiple events can be part of the same start time. Just add a comma to that element's last event and another set of brackets corresponding with the next event. Make sure to add each event's `name`, `duration`, `location`, and `description`.

### Workshop Page
The workshop page is implemented in `src/components/WorkshopPage`, and the workshops are defined in the `workshops` constant of `src/components/WorkshopPage/WorkshopPage.js`. Workshops are split up by type, such as Web Development, Mobile Development, and Miscellaneous. 
```
	{
		type: 'Mobile Development',
		elements: [
			{
				title: 'Intro to React Native',
				author: 'James Wu',
				description: `Ever wanted to make your own mobile app? Let's explore React Native—a cross
				platform development tool that's behind Instagram, Facebook, Discord, and many other
				iconic names. In this workshop, we'll learn how to create our own app from scratch,
				going over views, components, functionality, and more so that you can be a native of React! `,
				youtube: 'https://youtu.be/TYvmyMJc3PQ',
				readme: 'https://github.com/uclaacm/hoth9-workshops/tree/main/intro-to-react-native',
				slides: 'https://docs.google.com/presentation/d/1hPfBtJzcgahXPLuJlQ6y0HcmpqrflBbZPpmL5e1vTQE/edit?usp=sharing'
			}
		]
	},
  ```
  Each workshop type has an `elements` array with all of its workshops. In order to add workshops to the page, just add the workshops to an existing type's elements array under the given format or add a new workshop type and add the workshop to that type's new elements array.
# Testing PR Template
