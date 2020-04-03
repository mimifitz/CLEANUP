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

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    let sql = "";

    //Creating users table
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
            "Creation of 'test' user was successful!"
        );
    });

    //Creating services table
    sql =
        "DROP TABLE if exists users; CREATE TABLE users(id INT NOT NULL AUTO_INCREMENT, name TEXT, location TEXT, password TEXT(8), email TEXT, PRIMARY KEY (id));";
    con.query(sql, function(err, result) {
        if (err) throw err;
        console.log(
            "Table creation `users` was successful!"
        );
    });
    //Adding a test services with dummy data MUST EDIT AND ADD SERVICES TABLE AND CREAT MORE DETAILS
    sql =
        "INSERT INTO users (name, location, password, email) VALUES ('rita', 'el raval', 'testing', 'test@test.com');";
    con.query(sql, function(err, result) {
        if (err) throw err;
        console.log(
            "Creation of 'test' user was successful!"
        );
    });

    console.log("Closing...");

    con.end();
});