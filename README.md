# Quad-Pack
GA Final Project





- [Overview](#overview)
- [MVP](#mvp)
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

**Quad-Pack** 
Quad Pack is a app that allows you to orgainize your things when you are a professional Athlete on the road, customizing to your likings depending on location and trip. 

<br>

## MVP


<br>

### Goals

- They can sign up using thier name, email, password, Organization (Team). 
- When they sign in they will see thier events posted. 
- They will be able to click on the event and add what items they want, or edit already existing items
- They can also add a event if they like to the list 
- I will also create a about me page so they can relay any comments about the apps or comments for upgrades. 

<br>

### Libraries and Dependencies



|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | a free open-source front-end JavaScript library for builidnbg user interfaces or UI components |
|   React Router   | Router enbables the navigation amongst screen components in React, allows chaning the browser URL, and keeps the UI in sync with the URL. |
|     Ruby on Rails      | A open source framework for Web development in Ruby, and object-oriented programming language similar to python  |
|  JWT  | for token base authentication_ |
| bcrypt           | used for Password encryption.|

<br>

### Client (Front End)

#### Wireframes
![alt text](https://res.cloudinary.com/otisg/image/upload/v1633397462/QuadPack_pvn7xu.png)   
- Desktop Landing

![alt text](https://res.cloudinary.com/otisg/image/upload/v1633441851/aj-figma-2_s3t7ug.png)      
- Mobile Resource Index
<br>
### Component Tree

![alt text](https://res.cloudinary.com/otisg/image/upload/v1633403079/p4-architecture_ems05z.png)    

<br>


### Component Architecture

> Use this section to define your React components and the data architecture of your app. This should be a reflection of how you expect your directory/file tree to look like. 

``` structure

client
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public   
│   └── index.html
└── src
    ├── assets
        ├── component-tree.png
        ├── erd.png
        ├── homepro-wireframe.png
    ├── screens
        ├── Home.jsx
        ├── Home.css
        ├── SignUp.jsx
        ├── SingUP.css
        ├── SignIn.jsx
        ├── SignIN.css
        ├── EventsDetails.jsx
        ├── EventsDetails.css
        ├── EditEvent.jsx
        ├── EditEvent.css
        ├── EventLugage.jsx
        ├── EventLuggage.css
    ├── services
        ├── auth.jsx
        ├── config.jsx
        ├──Events.jsx
        ├──Luggage.jsx
    ├── components
        ├── Layout.jsx
        ├── Layout.css
        ├── NavBar.jsx
        ├── NavBar.css
        ├── Footer.jsx
        ├── Footer.css
    ├── App.jsx
    ├── App.css
    ├── index.js
    ├── index.css
    ├── MainContainer.jsx
    ├── MainContainer.css

```
<br>

### Time Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Readme & wireframe Setup   |    H     |     5hrs      |     TBD     |    TBD    |
| Build Server & Endpoints |    H     |     4hrs      |     TBD     |     TBD     |
| Build Tables & Associations | H     |     4hrs      |     TBD     |     TBD     |
| Implement Authorization     | H     |     5 hrs     |     TBD     |     TBD     |
| Create Back End full CRUD     |    H      |    5 hrs     |     TBD     |     TBD     |
| Create React App & Data Setup | 1 hrs     |     TBD     |     TBD     |
| Define React State & Props  | 3 hrs     |     TBD     |     TBD     |
| Use Data from Ruby & Render To Components | 5 hrs   |     TBD     |     TBD     |
| Create Front End CRUD Actions            |  5 hrs    |     TBD     |     TBD     |
| Style with CSS                           | 3 hrs     |     TBD     |     TBD     |
| Debug & Code Cleanup                     | 3 hrs     |     TBD     |     TBD     |
| Deploy Front & Back Ends                 | 2 hrs     |     TBD     |     TBD     |

| TOTAL               |          |     45 hrs      |     TBD     |     TBD     |

<br>

### Server (Back End)

<br>
### ERD Model

![alt text](https://res.cloudinary.com/otisg/image/upload/v1633447440/erd-2_dpctxh.png)   



***
<br>
## Post-MVP
-set Reminders for date coming up and special items you want to bring.
-Send text messages to user about important items to bring on certain events



***
<br>
## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.
<br>
## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution
