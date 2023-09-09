# Lucy's MVP (PT20) 'Match Mates'

#### My idea is a sports/fitness app that allows you to connect with people in your area to meet up for games.

#### I will be using 2 API's, one to calculate the calories burned during each match and another to access the weather in that location for that day. These stats will appear on the profile page as well as their picture, name, age and location. 



## MySQL, UserFlow && SiteMap
###### I will include two tables in mySQL database, one with the users basic info and some stats and the other for recording their matches with whether they accept or decline.(This information will be seen in the 'matches' section of their profile along with pending invites - I did not display this as it needs improvement/ possibly another approach or idea)
<img src ='https://i.imgur.com/QUd5sHw.png'>


###### Below is a UserFlow diagram of the app starting with registration and ending with access to all three parts of the website.


<img src='https://i.imgur.com/nlOOClw.png'>


<img src='https://i.imgur.com/Bgm6zsX.png'>

## Setup

### Dependencies

Run `npm install` in the project folder to install dependencies related to Express (the server).

`cd client` and run `npm install` install dependencies related to React (the client).

Run `npm start` in another terminal to start the server (backend).

Run `npm run dev` in the client (frontend).

## API Routes

1. https://rapidapi.com/apininjas/api/calories-burned-by-api-ninjas/
2. https://openweathermap.org/

## Future features

1. Improving the matches component
2. Making the profile cards clickable links to focus on one player at a time and to see more details including a calendar of when they are free
3. Adding the fitness API
4. Improvement of styling


### _This is a student project that was created at [CodeOp](http://codeop.tech), a full stack development bootcamp in Barcelona._
