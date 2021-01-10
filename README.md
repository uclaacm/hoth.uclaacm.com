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
developed by ACM Hack’s Dev Team: Timothy Gu
[(@TimothyGu)](https://github.com/TimothyGu/), Jamie Liu
[(@jamieliu386)](https://github.com/jamieliu386/), Timothy Rediehs
[(@Timthetic)](https://github.com/Timthetic), Jakob Reinwald
[(@jakobreinwald)](https://github.com/jakobreinwald),
Chandra Suresh,
Christina Tong [(@christinatong01)](https://github.com/christinatong01),
Miles Wu [(@milesswu)](https://github.com/milesswu), and Eric Yang
[(@eric8yang)](https://github.com/eric8yang).

ACM Hack is a subcomittee of [ACM @ UCLA](http://www.uclaacm.com/), the largest
Computer Science student organization in Southern California. Check out [our
website](https://hack.uclaacm.com/) to learn more about who we are and what we
do!

## Getting Started
You’ll need:
- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en/) – we are currently using v14. In the event
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
