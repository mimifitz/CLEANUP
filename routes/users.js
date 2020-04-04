var express = require('express');
var router = express.Router();
const bodyParser = require("body-parser");
const db = require("../model/helper");

router.use(bodyParser.json());


/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send("Woezo to API");
});

//API STARTS FROM HERE.ALL CODES BUT BE EDIT TO SUIT MY API ROUTES DETAILS

//TABLE 1:USERS
//REQUEST FOR ALL INFO OF TABLE "USERS" IN DATABASE
router.get('/cleanup', (req, res) => {
    // Respond by send the full list of data in "users" table
    db("SELECT * FROM users ORDER BY id ASC;")
        .then(results => {
            res.send(results.data);
        })
        .catch(err => res.status(500).send(err));
});

//2.QUERYING INFO ABOUT SPECIFIC COLUMN/EOW
router.get('/users/:id', (req, res) => {
    // Respond by send the full list of data in "users" table
    db(`SELECT * FROM users WHERE id=${req.params.users_id};`)
        .then(results => {
            res.send(results.data);
        })
        .catch(err => res.status(500).send(err));
});

//CREATE A TABLE INTO THE DATABASE: USERS
router.post(`/users`, (req, res) => {
    //to launch a database query using mysql syntax:
    db `INSERT INTO users (name, location, password, email) VALUES 
  (${req.body.name}, ${req.body.location}, ${req.body.password}, ${req.body.email};`
        .then(results => {
            if (results.error) {
                res.status("ERROR! TRY AGAIN").send({
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

//UPDATE 
router.put(`/users/:users_id`, (req, res) => {
    // The request's body is available in req.body
    // URL params are available in req.params
    db(`UPDATE users set name=
            ${ req.body.name},
            location = ${req.body.location}
          password='${req.body.password}', email='${req.body.email}' WHERE id=${req.params.users_id};`)
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
router.delete(`/users:users_id`, (req, res) => {
    // URL params are available in req.params
    db(`DELETE FROM users WHERE id=${req.params.users_id};`)
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