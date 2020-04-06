require("dotenv").config();
const mysql = require("mysql");

const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;

const con = mysql.createConnection({
    host: DB_HOST || "127.0.0.1",
    user: DB_USER || "root",
    password: DB_PASS || "root",
    database: DB_NAME || "cleanup",
    multipleStatements: true
});
//DONE & TEST.(SUCCESSFULL.)
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    let sql = "";

    //Creating users table(TABLE 1)
    sql =
        "DROP TABLE if exists users; CREATE TABLE users(id INT NOT NULL AUTO_INCREMENT, name TEXT, location TEXT, password TEXT(8), email TEXT, PRIMARY KEY (id));";
    con.query(sql, function(err, result) {
        if (err) throw err;
        console.log(
            "Table creation `users` was successful!"
        );
    });
    //Adding a test user with dummy data
    sql =
        "INSERT INTO users (name, location, password, email) VALUES ('rita', 'el raval', 'testing', 'test@test.com');";
    con.query(sql, function(err, result) {
        if (err) throw err;
        console.log(
            "Creation of 'test' was successful!"
        );
    });
    //Adding a test user with dummy data 2
    sql =
        "INSERT INTO users (name, location, password, email) VALUES ('Dave', 'san juan', 'kingdave', 'macho@gmail.com');";
    con.query(sql, function(err, result) {
        if (err) throw err;
        console.log("Creation of 'test' was successful!");
    });

    //Adding a test user with dummy data 3
    sql =
        "INSERT INTO users (name, location, password, email) VALUES ('Olya', 'sant andria', 'gagagaga', 'girl@gmail.com');";
    con.query(sql, function(err, result) {
        if (err) throw err;
        console.log("Creation of 'test' was successful!");
    });

    //Adding a test user with dummy data 4
    sql =
        "INSERT INTO users (name, location, password, email) VALUES ('Olya', 'sant andria', 'gagagaga', 'girl@gmail.com');";
    con.query(sql, function(err, result) {
        if (err) throw err;
        console.log("Creation of 'test' was successful!");
    });

    //Creating services table(TABLE 2)
    sql =
        "DROP TABLE if exists services; CREATE TABLE services(id INT NOT NULL AUTO_INCREMENT, type TEXT NOT NULL, name TEXT NOT NULL, description VARCHAR(255) NOT NULL, availability DATETIME NOT NULL, location TEXT NOT NULL, userId INT NOT NULL,PRIMARY KEY (id));";
    con.query(sql, function(err, result) {
        if (err) throw err;
        console.log(
            "Table creation `services` was successful!"
        );
    });
    //Adding a test services with dummy data 
    sql =
        "INSERT INTO services (type, name, description, availability, location, userId) VALUES ('legal services', 'immigration lawyer', 'I will be available to give immigration advices and support to anyone having residence issues in my office.I can come to your destination as well.', '2020-07-25 10:10:00', 'carrer de mimi 26,08023', 4);";

    con.query(sql, function(err, result) {
        if (err) throw err;
        console.log(
            "Creation of 'test' user was successful!"
        );
    });

    console.log("Closing...");

    con.end();
});