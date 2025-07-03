# VREY Engineering Candidate Challenge

Write a full-stack MVC app with a relational database for displaying daily power consumptions for a house.

### Initial data model

- The database should contain at least one house.
- A house has many units (5-10)
- Each unit has 2 meters (one of each type)
- A meter has a location id and a type (market_location | metering_location)
    - location id for a market_location is a number with 10 digits
    - location id for a metering_location is a string of 33 characters

### API

Please run the following project as a source for the consumption data: https://github.com/VREY-Energie/mock-measurement-api-recruiting. It provides an API that returns values for a meter in 15 minutes intervals.

(If you’re having trouble getting it to work, please let us know and we will provide it online.)

### Requirements for your app

- It imports power consumptions for all meters for a given timeframe into the database via the command line
- It displays for one house:
    - a table with daily totals in kWh of
        - all market location meters
        - all metering location meters
        - the difference of those two daily values as “solar consumption”
    - the total solar consumption
    - the average daily solar consumption

Please display the page and table in a simple design using Bootstrap (https://getbootstrap.com/).

You may choose any technology and language. As we are using Ruby On Rails, please try to choose something that is similar in structure and used an ORM.

### Additional instructions

- Please spend less than one day on the task.
- It's ok if some things are not perfect or incomplete. This is mostly meant as a base for a discussion. Feel free to mention how you'd improve the app if given more time.
- We want to see how you work. Try to find a pragmatic but solid solution for the task given. We value quality in terms of seeing some tests, readable code or comments, a good readme, clear commit messages…
- It is not required (nice-to-have of course) that you deploy your app. Complete source code with instructions is sufficient.

Please don’t hesitate letting us know if there’s any questions.

Good luck!