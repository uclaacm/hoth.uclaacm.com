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
- Jody Lin [(@jodymlin)](https://github.com/jodymlin)
- Christina Tong [(@christinatong01)](https://github.com/christinatong01)
- Alex Xia [(@khxia)](https://github.com/khxia)
- Jakob Reinwald [(@jakobreinwald)](https://github.com/jakobreinwald)
- Maggie Li [(@maggieelli)](https://github.com/maggieelli)
- Thomas McGall [(@tmag1)](https://github.com/tmag1)
- Katelyn Syu [(@katelynsyu)](https://github.com/katelynsyu)
- Anakin Trotter [(@AnakinTrotter)](https://github.com/AnakinTrotter)
- Nathan Zhang [(@nathanzzhang)](https://github.com/nathanzzhang)

Past contributors: 
- Timothy Gu [(@TimothyGu)](https://github.com/TimothyGu/)
- Jamie Liu [(@jamieliu386)](https://github.com/jamieliu386/)
- Timothy Rediehs [(@Timthetic)](https://github.com/Timthetic)
- Galen Wong [(@GalenWong)](https://github.com/GalenWong)
- Miles Wu [(@milesswu)](https://github.com/milesswu)
- Chandra Suresh [(@curesh)](https://github.com/curesh)
- Eric Yang [(@eric8yang)](https://github.com/eric8yang)

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
Maintenance information for this section coming soon!

### Homepage Carousel
Photos for the homepage carousel are stored in the following directory: `src/images/homepage-carousel`. In order to include a photo in this carousel, just add the photo to this directory.

### Announcements
Announcements are implemented the Announcements page and via a Github Actions script that pulls data from the `HOTH Announcements Data` issue on the HOTH website's Github page. Each comment serving as its own separate announcement. Every time a new comment is added on this issue, the Github Actions script re-scrapes the data from the issue and publishes it onto the Announcements Page with the new comment included. 

Therefore, announcements can be added to the announcements page by adding a comment to this issue in the following format: `${Subject}(Subject)${Body}`. 

To enumerate, comments/announcements should have the subject/title of the announcement, followed by `(Subject)`, followed by the body/description of the announcement.

### Prizes
Maintenance information for this section coming soon!

### FAQ
The FAQ section's implementation is in the directory `src/components/HomePage/FAQSection.js`. Within the file, at the beginning of the function component `function FAQSection()`, there is a `const faqs` variable that holds all of the FAQs that are displayed on the page. Each FAQ has the following format: 
```
		{
			question: `What's a hackathon?`,
			answer:
				<>
					A hackathon is an event during which people from different backgrounds
					come together to create a project from start to finish in a limited time frame.
					Check out some examples from last year&apos;s
					HOTH <Link href='https://hoth8.devpost.com/project-gallery'>here</Link>!
				</>
		},
```
FAQs can be added to the FAQ section by adding the new question and answer to this variable in the given format. Make sure to put a comma after the closing bracket!

### Schedule
Maintenance information for this section coming soon!

### Workshop Page
Maintenance information for this section coming soon!

### Start Date and End Date
Maintenance information for this section coming soon!
