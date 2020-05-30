# ACM Hack's Hack on the Hill (HOTH) Website

[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](code_of_conduct.md)

This repository contains the code for ACM Hack's Hack on the Hill website! Hack on the Hill (HOTH) is a 12 hour, beginner-friendly hackathon hosted by UCLA ACM Hack. This event is designed to give beginners a taste of what a hackathon looks and feels like. During HOTH, there are workshops and mentors available to provide technical support and help beginners get started on their projects. There is also hardware available for hackers to rent out and hack with.

This website is developed with [Gatsby](https://www.gatsbyjs.org/) and [Material UI](https://material-ui.com/), and is a work-in-progress being developed by ACM Hack's Dev Team: Timothy Gu [(@timothygu)](https://github.com/TimothyGu/), Jamie Liu [(@jamieliu386)](https://github.com/jamieliu386/), Timothy Rediehs [(@Timthetic)](https://github.com/Timthetic), and Miles Wu [(@milesswu)](https://github.com/milesswu).

ACM Hack is a subcomittee of [UCLA @ ACM](http://www.uclaacm.com/), the largest Computer Science student organization at UCLA. Check out [our website](https://hack.uclaacm.com/) to learn more about who we are and what we do!

## Getting Started
You'll need:
- [git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en/)
- [yarn](https://classic.yarnpkg.com/en/)
- if you use VSCode, we recommend you install the [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig) extension

### Running the Project
Type the following lines in your command line:
```
$ git clone https://github.com/uclaacm/hoth.uclaacm.com.git
$ cd hoth.uclaacm.com
$ yarn
$ yarn develop
```
You can then navigate to `http://localhost:8000/` in your browser to see the website!

### Notes
- Be sure to run `yarn` every time there are changes to `package.json`. Usually you'll want to run `yarn` in the following scenarios:
  - after pulling from master
  - after merging master into your branch
  - after switching branches (that may have different dependencies)
- This project uses `ESLint` to ensure code style compliance.
