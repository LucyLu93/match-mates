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

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/LucyLu93/match-mates.git
   ```

2. Create a database in your MySQL (or your preferred database) and name it "databse_padel".

3. Create an `.env` file in your project's root directory, and add the following configuration to it:

   ```sh
   DB_HOST=localhost
   DB_USER=your_user
   DB_PASS=your_password
   DB_NAME=database_padel
   ```

4. Open a terminal and run the following commands to set up your project:

   ```sh
   npm install
   npm run migrate
   cd client
   npm install
   ```

### Starting

To start the server:

```sh
npm start
```

To start the client:

```sh
cd client
npm run dev
```

Visit your browser at [http://localhost:5000](http://localhost:5000).

Enjoy!

## Contact

If you have any further questions, feel free to reach out to me at [@LucyLu93](https://github.com/LucyLu93).




## API Routes

1. https://rapidapi.com/apininjas/api/calories-burned-by-api-ninjas/
2. https://openweathermap.org/

## Future features

1. Improving the matches component
2. Making the profile cards clickable links to focus on one player at a time and to see more details including a calendar of when they are free
3. Adding the fitness API
4. Improvement of styling


### _This is a student project that was created at [CodeOp](http://codeop.tech), a full stack development bootcamp in Barcelona._
