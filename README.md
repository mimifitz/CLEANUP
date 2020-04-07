# MVP 

In this repository,a full stack app will be built starting from back end,using React, Node/Express, and MySQL.

## NAME OF APP: CLEANUP

## CONCEPT/APP INTRO:
CLEANUP is a  charitable platform created for philanthropist/charitable persons who are interested donating  or offer direct services and items to homeless needy individuals who are on the streets due to circumstances and are poised to improve their lives.CLEANUP platform will allow both free and barter trade services and items to needy homeless as well as the creation of small communities or groups who could team up together to help a needy homeless fellow. The whole concept is geared towards showing kindness and love towards our fellow fallen individuals who needs help to rise again.
Donors will render services and items ranging from medical assistance, mentorship, clothes, accomodation/housing, food,networking etc etc.

# Objectives

- Build a database. 
- Build an API server.
- Create back end first,TEST all routes in postman
- Start and finish on front end possibly.

STEPS ON ENTIRE PROJECT:





## Startup : DEVELOPMENT SETUPS

### Dependencies
* 
* Run `yarn` on root folder(name of the folder of the project:fs6-mvp-cleanup) in terminal to install dependencies related to Express and `yarn migrate`.After creating your tables in *database folder* ,use `yarm migrate` or `npm run migrate` import data into your database.After this step, test in `mysql` terminal to verify the existence of the table and data in the database by using `SELECT * FROM` [table name]

* After creating data into the database,Api route and testing endpoint on third party "Postman",install dependencies into frontend by

`cd client` in a new terminal and run `yarn` install dependencies related to React.

### DATABASE PREP

* Create file .env in the *route* folder in project directory.Must have the following:

```
DB_HOST=localhost
DB_USER=root
DB_PASS=root
DB_NAME=cleanup

*


#### *Make corrections to the file,if any data entry is missing out*
(replace `YOUR_PASSWORD` with your actual password and also make changes to it on "mysql"terminal)

Type `mysql -u root -p` to access the MySQL CLI using your password.

In the MySQL CLI, type `create database todos;` to create a database in MySQL.

Run the following in the MySQL CLI: `ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'YOUR_PASSWORD';` (replace `YOUR_PASSWORD` with your actual password)

Run `node model/database.js` in your **TERMINAL**, in the **root** folder of your project (not your MySQL CLI! Open a new terminal window for this). This will create a table called 'items' in your database.

### Run Your Development Servers

- Run `yarn start` in project directory to start the Express server on port 5000
- `cd client` and run `yarn start` to start client server in development mode with hot reloading in port 3000.
- Client is configured so all API calls will be proxied to port 5000 for a smoother development experience. Yay!
- You can test your client app in `http://localhost:3000`
- You can test your API in `http://localhost:5000/api`






# USER FLOW DIAGRAM:

 ![user flow diagram](/IMAGES/userflow.png)





# DESCRIPTION:
USER 2 (PHILANTHROPIST/CHARITABLE PERSON)
1.Signs up with interest tobe part of this community but keenly:they have services or offer to offer for FREE.
Requirement: Email,Name,Password.

2.Email verification:A pop-up message redirecting the user into personal email inbox for verification after signup.

3.Verification link brings user into profile dashboard to COMPLETE THEIR PROFILE details
Requirements:Location & profile photo

4.User ends up on the completed dashboard and proceeds to offer services/items by clicking a BUTTON (Share) that takes them to a form to fill in all details about services or items to be offered.
Fields:(a)Pick up point/location of services, (b)details/description of items/services ,(c)images.

4.User upload by clicling on a button (UPLOAD)

5.Process ends and takes user back to profile dashboard where.



DATABASE Schema Diagram

![Database Schema Diagram](/IMAGES/schema.png)


Table 1:

USERS (for both categories:"homeless individual" and "Philanthropist")

Table 2:
Services or items available on offer.



API ROUTE DESIGNS

USERS:
![Api routes](/IMAGES/APIroutesdesigns/users.png)


SERVICES:
![Api routes](/IMAGES/APIroutesdesigns/services.jpg)
![Api routes](/IMAGES/APIroutesdesigns/services2.jpg)



 ## NOTE
_This is a student project that was created at [CodeOp](http://codeop.tech), a full stack development bootcamp in Barcelona._





MUST BE ERASE
## Setup

### Dependencies

Run `yarn` on root folder to install dependencies related to Express.

`cd client` and run `yarn` install dependencies related to React.

### Database Prep

Create `.env` file in project directory and add

```
DB_NAME=todos
DB_PASS=YOUR_PASSWORD
```

(replace `YOUR_PASSWORD` with your actual password)

Alternatively, you can rename the provided `.env.example` file to `.env`.

Type `mysql -u root -p` to access the MySQL CLI using your password.

In the MySQL CLI, type `create database todos;` to create a database in MySQL.

Run the following in the MySQL CLI: `ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'YOUR_PASSWORD';` (replace `YOUR_PASSWORD` with your actual password)

Run `node model/database.js` in your **TERMINAL**, in the **root** folder of your project (not your MySQL CLI! Open a new terminal window for this). This will create a table called 'items' in your database.

### Run Your Development Servers

- Run `yarn start` in project directory to start the Express server on port 5000
- `cd client` and run `yarn start` to start client server in development mode with hot reloading in port 3000.
- Client is configured so all API calls will be proxied to port 5000 for a smoother development experience. Yay!
- You can test your client app in `http://localhost:3000`
- You can test your API in `http://localhost:5000/api`

## Basic Requirements

### 1. Read through all the current code and explain it to your partner.

- [ ] Explain what each line of code is doing.
  - Look at the docs and ask your instructor if you aren't sure!

### 2. Finish the routes

Suggested Process:

- Try and write the correct query in `mysql`.
- Use that query to finish the endpoint in `routes/api.js`.
- Test your endpoint using Postman.

To Do:

- [ ] Use Postman to confirm that you have completed these correctly
- [ ] GET `/api/todos` should retrieve all resources.
  - This route is almost complete!
- [ ] POST `/api/todos` should create a new resource.
  - To test that your query is correct, check to see if your new resource exists using `mysql`.
  - To test your route, use Postman to see if GET `api/todos` returns your new resources.
- [ ] PUT `/api/todos/:id` should replace a resource.
  - To test that your query is correct, check to see if your updated resource exists using `mysql`.
  - To test your route, use Postman to see if GET `api/todos` includes your updated resources.
- [ ] DELETE `/api/todos/:id` should delete a resource.
  - To test that your query is correct, check to see if your resource was deleted using `mysql`.
  - To test your route, use Postman to see if GET `api/todos` does not include your new resources.

### 3. Finish the front end

- [ ] Spend time reviewing the existing code in `client/src/App.js`.
- [ ] Finish populating `this.state.tasks` from the API call in `componentDidMount`.
  - Read about the `componentDidMount` method [in the React Docs](https://reactjs.org/docs/state-and-lifecycle.html)
- [ ] Then, add a list of tasks to the DOM. Each task should have the following:
  - The text of the task.
  - A strike through (using CSS) if the task is complete.
  - Two buttons:
    - One button to mark the task complete (this should call the updateTask method)
    - One button to delete the task (this should call the deleteTask method)
- [ ] Finish the updateTask method so it calls the server.
- [ ] Finish the deleteTask method so it calls the server.
- [ ] Add styling.

## Resources

- [MySQL Cheat Sheet](http://www.mysqltutorial.org/mysql-cheat-sheet.aspx)
- [MySQL](https://dev.mysql.com/doc/refman/8.0/en/database-use.html)
- [Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [React Documentation](https://reactjs.org/docs/hello-world.html)



