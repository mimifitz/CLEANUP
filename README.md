# MVP

In this repository,a full stack app will be built starting from back end,using Node/Express and MySQL and finish with front end using React frame work.

## NAME OF APP: CLEANUP

## CONCEPT/APP INTRO:

CLEANUP is a charitable platform created for philanthropist/charitable persons who are interested donating or offering direct services and items to homeless needy individuals who are on the streets due to circumstances and are poised to improve their lives.CLEANUP platform will allow both free and barter trade services and items to needy homeless as well as the creation of small communities or groups who could team up together to help a needy homeless fellow. The whole concept is geared towards showing kindness and love towards our fellow fallen individuals who needs help to rise again.
Donors will render services and items ranging from medical assistance, mentorship, clothes, accomodation/housing, food,networking etc etc by will and directly to the in-need individual without any middlemen.

# App objectives

- Build a database with dummy data(for testing purpose).
- Build an API server.
- Create back end first,TEST all API routes in postman
- Start and finish on front end possibly.

STEPS ON ENTIRE PROJECT:

## Startup : DEVELOPMENT SETUPS

### Dependencies

\*

- Run `yarn` on root folder(name of the folder of the project:fs6-mvp-cleanup) in terminal to install dependencies related to Express and `yarn migrate`.After creating your tables in _database folder_ ,use `yarm migrate` or `npm run migrate` import data into your database.After this step, test in `mysql` terminal to verify the existence of the table and data in the database by using `SELECT * FROM` [table name]

- After creating data into the database,Api route and testing endpoint on third party "Postman",install dependencies into frontend by

`cd client` in a new terminal and run `yarn` install dependencies related to React(front end).

### DATABASE PREP

- Create file .env in the _route_ folder in project directory.Must have the following:

```
DB_HOST=localhost
DB_USER=root
DB_PASS= YOUR PASSWORD
DB_NAME=cleanup
```

#### _Make corrections to the file,if any data entry is missing out_

(replace `YOUR_PASSWORD` with your actual password and also make changes to it on "mysql"terminal)

Type `mysql -u root -p` to access the MySQL CLI using your password.

In the MySQL CLI, type `create database cleanup;` to create a database in MySQL.

Run the following in the MySQL CLI: `ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'YOUR_PASSWORD';` (replace `YOUR_PASSWORD` with your actual password)

Run `node model/database.js` in your **TERMINAL**, in the **root** folder of your project (not your MySQL CLI! Open a new terminal window for this). This will create a table called 'items' in your database.

### Run Your Development Servers

- Run `yarn start` in project directory to start the Express server on port 5000
- `cd client` and run `yarn start` to start client server in development mode with hot reloading in port 3000.
- Client is configured so all API calls will be proxied to port 5000 for a smoother development experience. Yay!
- You can test your client app in `http://localhost:3000`
- You can test your API in `http://localhost:5000/api`

# USER FLOW DIAGRAM:

USERS
![user flow diagram](/IMAGES/users.png)

SERVICES
![user flow diagram](/IMAGES/services.png)

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

    # *SUMMARY*

# `INSPIRATION FOR THIS PROJECT` (The _WHY_ and _WHO_)

The WHY:
\*Because I'm privileged to have a skill that I can use to aid help to those who need it.And I believe in equality to basic needs and life for all but mostly, I also believe in empathy and giving a second chance.

THE WHO(users of this product):
\*Created for anyone who believes it's our responsibilities as humans to help others when they are in need and we are privileged.

THE WHO (who benefits)

## `TECHNOLOGIES USED` (backend)

*mysql
*sql server
\*node/espress

## `MAJOR STEPS IN BUILDING`

- More research into how start each step
- Creating repository in github
- Userflow diagram ( I use app.flowmapp design tool for this)
- Database schema (I used db designer for creating a diagram table of the databases)
- API routes plan(I used template doc to write and set up the query commands)

## `FUTURE FEATURES`

Developing frontend will lead me to having concrete visual vision of the app.For now,I will say less.

## `THE MOST CHALLENGES IN THIS PROJECT`

- Mastering the confidence to start the whole project.
- Then scaffolding dependencies
- How to express myself in a more technical way to be understood ie when I have issues and need technical support.

## `WHAT I'M MOST PROUD OF?`

The basic fact that I am developing the skill of understand bugs and how to debug in backend
but mostly,understanding the funcionalities of Api routes queries to some extend.

## NOTE

_This is a student project that was created at [CodeOp](http://codeop.tech), a full stack development bootcamp in Barcelona._
