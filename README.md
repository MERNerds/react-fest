# React Fest

## Description

This application is target for festival goers. We wanted to create a fun, fictional music festival application that would be more user friendly and accessible than most of the other music festival sites out there.

Upon reaching the homepage, the user will see the logo for React Fest and a list of all the bands featured for the festival. As they scroll down they will be able to see some potential action shots of other festival goers having an excellent time at previous festivals. There will be a link at the top for the user to see the line up for each day of the festival as well. 

When the user clicks to the ticket page, they will be given the options of available tickets for the festival. They are instructed to login or signup in order to purchase tickets.

Once the user has created an account, they will be given a new menu in the top right corner for Schedule, Cart, or Logout. Now they will be able to buy tickets and add them to their cart. They will be alerted that they have items in their cart with a badge icon in the upper right hand corner. 

This app is a test version but it supports the entire ecommerce process. (to test the Stripe, a user can enter 4242 4242 4242 4242 as the card and it will process as a test card). Upon a successful transaction, the user is redirected to the homepage to continue their experience.

They will now have access to their own personal festival schedule. They will be able to see all the set times for each band on each given day. The genres of the bands are color coded as well so that a user can easily distinguish which genre they prefer. The user can drag artists off to the side pannel to remove them from their schedule. They may also add an artist back in from the list and the artist will go to their proper set time slot. 

** Disclaimer: This is a fictional festival. We do not own the rights to any of these bands names and they have not agreed to play at any festival called React Fest at any point in time. 

## Table of Contents
  1. [Installation](##installation)
  2. [User Story](#user-story)
  3. [Acceptance Criteria](#acceptance-criteria)
  4. [Deployed Application](#deployed-application)
  5. [Demo](#demo)
  6. [Technology](#technology)
  7. [Contributors](#contributors)
  8. [License](#license)

## Installation
  1. Fork this repository
  2. Clone repository to your local directory
  3. Make sure you have installed Node.js 
  4. Run npm install to install the necessary dependencies
  ```
  npm install
  ```
  5. Run npm run develop to get a development version of the app to inspect and test out
  ```
  npm run develop
  ```

## User Story
```
AS a user who wants to go to a music festival
I want a functional application I can use anywhere to buy my events tickets
SO THAT I may plan my schedule for in advance. 
```

## Acceptance Criteria
```
Given I visit the website
When browsing as a guest
Then I have an option to sign up as a user
When I sign up 
Then I have my username and password saved
When I add tickets to my cart
Then I can checkout with my credit card
When I visit my schedule
Then I can add or update the events I have planned
```

## Deployed Application
[React Fest](https://react-fest.herokuapp.com/)

## Demo 

Just a quick gif of the site in action. 
<br>
![React Fest](https://media.giphy.com/media/OMoWTYEIeFvLC3rTgi/giphy.gif)

## Technology Used
**1. [React](https://reactjs.org/)**

**2. [Redux](https://redux.js.org/)**

**3. [Node.js](https://nodejs.org/en/)**

**4. [MongoDB](https://www.mongodb.com)**

**5. [Mongoose ODM](https://mongoosejs.com/)**

**6. [Apollo Client](https://www.apollographql.com/docs/react/)**

**7. [JWT](https://jwt.io/)**

**8. [GraphQL](https://graphql.org/)**

**9. [Stripe API](https://stripe.com/docs/api)**

**10. [Material UI](https://mui.com/)**

**11. [Dev Extreme](https://js.devexpress.com/)**


## Contributors

If you have any questions about this project, please don't hesitate to reach out to any one of the following people: 

[Rick Martin](https://github.com/rmartin1985)

[Adam West](https://github.com/Adamwest023)

[Jacob Johnson](https://github.com/jljohnson1454)

[Kaylee Stevens](https://github.com/kayldubs)

[Alexis Valesquez]()

[Kyle Ferguson](https://github.com/kferguson52)

## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)