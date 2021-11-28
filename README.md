
# Assignment_Search_Functionality

## [Check out the deployed version here!](https://giovani-zanetti-search-functionality.netlify.app/)

## What this project is about

This project is part of a take-home assignment given by a company to check whether my skills are enough for a front-end software developer position.

## Table of contents:

- **[Installation](#installation)**
- **[Tests](#tests)**
- **[Technologies used](#technologies-used)**
- **[Goals for this project](#goals-for-this-project)**
- **[Requirements](#requirements)**
- **[Features built so far ](#features-built-so-far)**
- **[Vue CLI docs](#create-react-app)**

## Installation

You can easily close this repo on your machine by using one of the following commands:

`git@github.com:giovanizanetti/Assignment_Search_functionality.git`

or

`https://github.com/giovanizanetti/Assignment_Search_functionality.git`

Once you have cloned the repo, you can run:
`yarn install` or `npm install` to download all the dependencies needed for the project to work on your machine.

## Tests

To run some tests just run `yarn test:unit` or `npm test:unit`

## Technologies used

#### Click links to see the documentation for those technologies 👇👇👇

- **[Vue.js](https://vuejs.org/v2/guide/)**
- **[BootstrapVue](https://bootstrap-vue.org/)**
- **[Axios](https://www.npmjs.com/package/axios)**
- **[Netlify](https://www.netlify.com/)**

## Goals for this project:

- Get an offer to work for this company.
- Make a working application.
- Practice software development. Practice and learn more about Vue.js
- Showcase some of what I can do.

## Requirements

1.  Fetch data from API
    `API documentation: http://api.stackexchange.com/docs/unanswered-questions`
2.   The application should allow the user to search on a tag and then display the results underneath in a nicely formatted list.
3.   Use preferably the Vue.js javascript framework
4.  Implement autocomplete functionality

## Features built so far

### 1. Search for Stack Overflow unanswered questions
- The user can search for a tag by typing and pressing`search` or `enter` key.
- Each question result contains:
    - Name,
    - Date of creation
    - User's avatar
    - User's name

### 2. Autocomplete
- The autocomplete functionality works when the user types
- The user will receive a list of 10 suggestions, sometimes even if they did not finish typing.
- A new API call is made every time the user stops typing for 500 milliseconds or more. I use `lodash.debounce` helper for this.
- A search with the suggestion tag is performed when clicked.

### 3. Go to question
- Questions results are clickable and leads to the Stack Overflow, to the page of the question.
- The user can return to the results and still see their results. I use the browser local storage for that

### 4.Load more
- The user can load more extra 5 results by pressing`...load more` handler
- Refreshing the page does not clear the results.

### 5. Clear
- The user can clear the search results by pressing the `clear` handler.

## Vue CLI

This project was scaffolded using the Vue CLI.

**[The standard Vue CLI documentation can be found here](https://cli.vuejs.org/)**

## [Check out the deployed version here!](https://giovani-zanetti-search-functionality.netlify.app/)

If you have any feedback, **[please drop me a line here!](https://www.linkedin.com/in/giovani-zanetti/)** or email me at zanetti.giovani@gmail.com
