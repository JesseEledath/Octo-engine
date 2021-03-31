# Octo-trainer

- [Overview](#overview)
- [Minimum-Viable-Product](#Minimum-Viable-Product)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Architecture](#component-architecture)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

_**Octo-trainer** is a fitness application that will allow users to track what they eat and create/share workouts and what the combined information means to them and thier health._


<br>

## Minimum-Viable-Product

> The Octo-Trainer MVP will provide frontend users an account creation. Users will be able to write, update, and delete foods in the food-tracker, as well as workouts that are created. User account information, user created workouts,and personal food-tracker will be stored on a Ruby on Rails backend.

<br>

### Goals

- _Ruby on Rails backend for storing user info,assocaited food-tracker and workouts_
- _Using logic to give daily calorie info_
- _User can create, customize, and delete foods and workouts._

<br>

### Libraries and Dependencies


|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _Declarative and component based programming._ |
|   React Router   | _A collection of navigational components for your application._ |
|   Materials-UI   | _React components for faster and easier web development._ |
|      Rails       | _Ruby on Rails is open source software._ |
|      Ruby        | _Open source programming language with a focus on simplicity and productivity._ |
|      Axios       | _Promise based HTTP client for the browser and Node.js._ |
<br>

### Client (Front End)

#### Wireframes

![Dummy Link](url)

- Desktop Landing

![Dummy Link](url)

- Desktop Hero

![Dummy Link](url)

- Resource Index

![Dummy Link](url)

- Resource Show

![Dummy Link](url)

- Tablet Resource Index

![Dummy Link](url)

- Mobile Resource Index

#### Component Tree

> Use this section to display the structure of how your React components are being rendered. This should show the parent to child relation between you components. In other words, show which components are rendering the other components. Include a link to your component tree

[Component Tree Sample](https://gist.git.generalassemb.ly/davidtwhitlatch/414107e2560ae0bb65e233570f2fe056#file-component-tree-png)

#### Component Architecture

> Use this section to define your React components and the data architecture of your app. This should be a reflection of how you expect your directory/file tree to look like. 

``` structure

src
|__ App.jsx
|__ screens/
      |__ Landing.jsx
      |__ Login.jsx
      |__ Register.jsx
      |__ WorkoutIndex.jsx
      |__ FoodTracker.jsx
      |__ WorkoutDetails.jsx

|__ components/
      |__Layout/
        |__Nav.jsx
        |__footer.jsx
|__ services/
      |__ api-config.js
      |__ auth.js
      |__ users.js
      |__ categories.js
```

#### Time Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Add Contact Form    |    L     |     3 hrs      |     2 hrs     |    3 hrs    |
| Create CRUD Actions |    H     |     3 hrs      |     1 hrs     |     TBD     |
| TOTAL               |          |     6 hrs      |     3 hrs     |     TBD     |


<br>

### Server (Back End)

#### ERD Model

[ERD Sample](https://drive.google.com/file/d/1kLyQTZqfcA4jjKWQexfEkG2UspyclK8Q/view)
<br>

***

## Post-MVP

> Use this section to document ideas you've had that would be fun (or necessary) for your Post-MVP. This will be helpful when you return to your project after graduation!

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
