var express = require('express');
var router = express.Router();
const bodyParser = require("body-parser");
const db = require("../model/helper");

router.use(bodyParser.json());

//API STARTS FROM HERE.ALL CODES BUT BE EDIT TO SUIT MY API ROUTES DETAILS

//TABLE 1:USERS
//REQUEST FOR ALL INFO OF TABLE "USERS" IN DATABASE
router.get('/users', (req, res) => {
    // Respond by send the full list of data in "users" table
    db("SELECT * FROM users ORDER BY id ASC;")
        .then(results => {
            res.send(results.data);
        })
        .catch(err => res.status(500).send(err));
});

//2.QUERYING INFO ABOUT SPECIFIC COLUMN/ROW
router.get('/users/:id', (req, res) => {
    // Respond by send the full list of data in "users" table
    db(`SELECT * FROM users WHERE id=${req.params.id};`)
        .then(results => {
            res.send(results.data);
        })
        .catch(err => res.status(500).send(err));
});

//ADD DATA INTO A DATABASE TABLE: USERS
router.post(`/users`, (req, res) => {
    //launch a database query using mysql syntax:
    db(`INSERT INTO users (name, location, password, email) VALUES 
    (${req.body.name}, ${req.body.location}, ${req.body.password}, ${req.body.email};`)
        // db(`INSERT INTO users (name, location, password, email) VALUES ('lily', 'cartagena', 'lviajera', 'lily@hotmail.com');`
        // )
        .then((results) => {
            if (results.error) {
                res.status("ERROR! TRY AGAIN").send({
                    error: results.error,
                });
            } else {
                res.send({
                    body: results.data,
                });
            }
        })
        .catch((err) => res.status("NAH,TRY AGAIN").send(err));
});

//UPDATE 
router.put(`/users/:id`, (req, res) => {
    // The request's body is available in req.body
    // URL params are available in req.params
    db(`UPDATE users set name=
            ${ req.body.name},
            location = ${req.body.location},
          password=${req.body.password}, email=${req.body.email} WHERE id=${req.params.id};`)
        .then(results => {
            if (results.error) {
                res.status("ERROR! TRY AGAIN").send({ //OR  //res.status(404).send({
                    error: results.error
                });
            } else {
                res.send({
                    body: results.data
                });
            }
        })
        .catch(err => res.status("NAH,TRY AGAIN").send(err));
});

//DELETE
router.delete(`/users/:id`, (req, res) => {
    // URL params are available in req.params
    db(`DELETE FROM users WHERE id=${req.params.id};`)
        .then(results => {
            if (results.error) {
                res.status("ERROR! TRY AGAIN").send({ //OR res.status(404).send({
                    error: results.error
                });
            } else {
                res.send({
                    body: results.data
                });
            }
        })
        .catch(err => res.status("NAH,TRY AGAIN").send(err));
});



module.exports = router;