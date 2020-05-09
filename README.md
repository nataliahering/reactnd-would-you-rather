# Would you Rather Project


## Getting started

To get started developing right away:

* install all project dependencies with `npm install`
* start the development server with `npm start`

## Backend Server

The backend has been simplified and all the data is tracked in the `_DATA.js` file. 

## Main functionalities

### Home

`Home` is the main page of the application. The logged in user can view a list with the questions he has answered and a list with the questions he has not answered yet. The user can click on each question and either vote or see its details (in case he has already replied the question)

### Leaderboard

`Leaderboard` is the page were the data of all the users is displayed. The user can see how many questions all the users have created and how many questions the users have replied.

### Add Question

`Add question` is the page the user can use to create a new question. He has to provide the two options for the question and submit it.


## Known issues

1. The changes of a user (eg. add question) are being tracked only on the application's store and not in the backend. If a user adds a question and logs in from a different browser at the same time he will not be able to see the changes.
2. Real authentication mechanism is missing.
3. Paging: If the leaderboard or the home page get too many data, a paging mechanism must be implemented for performance reasons.
