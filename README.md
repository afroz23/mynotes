# Notes Taking App

This web application will help you to store all your notes in a Markdown fashion in a specific tag.

## Deployment
[Live Link](https://mynotes-afroz23s-projects.vercel.app/)

## Features
- User can Create, Delete, Edit and Update Note.
- Authentication Added via JWT(JSON web token).
- User can write `MARKDOWN` or simple text while creating new note.
- Search by Notes Title.

## Objectives

- One Safe place for all your notes.


## Technologies Details

### Backend Technologies

- Node, Express

### Frontend Technologies

- ReactJs, Material UI, Redux, React Markdown

### Database

- MongoDB

## Setup
- Client side
  - Use Node.js version 14
  - Navigate to the frontend directory
  - Run `npm install && npm start`
- Server side
  - create a mongoDB cluster and copy mongoURI
  - Use Node.js version 14
  - Navigate to the root directory
  - Run `npm install`
  - create .env file and add below envs
     - JWT_SECRET=your jwt secret
     - NODE_ENV=production or development
     - PORT=5000 or any port
     - MONGO_URI=YOUR mongoURI
  - run `npm start` server will start on mention env port number.

## Home page
![home](./Screenshots/homePage.png)

## SignUp Page
![home](./Screenshots/registerPage.png)
## LogIn Page
![home](./Screenshots/logIn.png)

## Dashboard(After LogIn)
![home](./Screenshots/afterLogin.png)

## Create New Note Page
![home](./Screenshots/createNote.png)

## Edit Note Page
![home](./Screenshots/editNote.png)

## Home page after creating multiple Notes
![home](./Screenshots/final.png)