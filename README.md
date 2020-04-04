# MVP 

In this repository,a full stack app will be built starting from back end,using React, Node/Express, and MySQL.

## NAME OF APP: CLEANUP

## INTRO:
CLEANUP is a  charitable platform created for philanthropist/charitable persons who are interested donating  or offer direct services and items to homeless needy individuals who are on the streets due to circumstances and are poised to improve their lives.CLEANUP platform will allow both free and barter trade services and items to needy homeless as well as the creation of small communities or groups who could team up together to help a needy homeless fellow. The whole concept is geared towards showing kindness and love towards our fellow fallen individuals who needs help to rise again.
Donors will render services and items ranging from medical assistance, mentorship, clothes, accomodation/housing, food,networking etc etc.

# Objectives

- Build a database. First 
- Build an API server.
- Create back end first
- Front end

## Setup

### Dependencies

Run `yarn` on root folder to install dependencies related to Express.

`cd client` and run `yarn` install dependencies related to React.

### Database Prep

Create `.env` file in project directory and add

```
DB_NAME=todos
DB_PASS=YOUR_PASSWORD





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



API ROUTE

USERS:
![Api routes](/IMAGES/users.png)


SERVICES:
![Api routes](/IMAGES/services1.png)
![Api routes](/IMAGES/services2.png)



 
_This is a student project that was created at [CodeOp](http://codeop.tech), a full stack development bootcamp in Barcelona._

