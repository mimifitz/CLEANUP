var express = require("express");
var router = express.Router();
const bodyParser = require("body-parser");
const db = require("../model/helper");

router.use(bodyParser.json());


//API STARTS FROM HERE

//TABLE 2:SERVICES
//1.REQUEST FOR ALL INFO OF TABLE "USERS" IN DATABASE
router.get('/services', (req, res) => {
    // Respond by send the full list of data in "services" table
    db("SELECT * FROM users ORDER BY id ASC;")
        .then(results => {
            res.send(results.data);
        })
        .catch(err => res.status(500).send(err));
});

//2.QUERYING INFO ABOUT SPECIFIC COLUMN/ROW
router.get('/services/:id', (req, res) => {
    // Respond by send the full list of data in "users" table
    db(`SELECT * FROM users WHERE id=${req.params.id};`)
        .then(results => {
            res.send(results.data);
        })
        .catch(err => res.status(500).send(err));
});

//3.CREATE A TABLE INTO THE DATABASE: USERS
router.post('/services', (req, res) => {
    //launch a database query using mysql syntax:
    db(`INSERT INTO services (type, name, description,
        availability, location, userId) VALUES 
(${req.body.type}, ${req.body.name}, ${req.body.description}, ${req.body.availability}, ${req.body.location}, ${req.body.userId});`)
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

//4.UPDATE DATA IN THE DATABASE
router.put('/services/:id', (req, res) => {
    // The request's body is available in req.body
    // URL params are available in req.params
    db(`UPDATE services set name=
            (${req.body.type}, ${req.body.name}, ${req.body.description}, ${req.body.availability}, ${req.body.location}, ${req.body.userId} WHERE id=${req.params.id};`)
        .then(results => {
            if (results.error) {
                res.status("ERROR! TRY AGAIN").send({
                    //OR  //res.status(404).send({
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

//5.DELETE
router.delete('/services/:id', (req, res) => {
    // URL params are available in req.params
    db(`DELETE FROM services WHERE id=${req.params.id};`)
        .then(results => {
            if (results.error) {
                res.status("ERROR! TRY AGAIN").send({
                    //OR res.status(404).send({
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