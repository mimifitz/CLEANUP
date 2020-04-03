var express = require('express');
var router = express.Router();
const bodyParser = require("body-parser");
const db = require("../model/helper");

router.use(bodyParser.json());


/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

//API STARTS FROM HERE.ALL CODES BUT BE EDIT TO SUIT MY API ROUTES DETAILS

// router.get(`/${VERSION}/todos`, (req, res) => {
//   //version included
//   // Send back the full list of items
//   db("SELECT * FROM items ORDER BY id ASC;")
//     .then(results => {
//       res.send(results.data);
//     })
//     .catch(err => res.status(500).send(err));
// });

// router.post(`/${VERSION}/todos`, (req, res) => {
//   //CREATE
//   // The request's body is available in req.body
//   // If the query is successfull you should send back the full list of items
//   // Add your code here

//   //to launch a database query using mysql syntax:
//   db(`INSERT INTO items (text, complete) VALUES 
//   ('${req.body.text}', ${req.body.complete});`)
//     .then(results => {
//       if (results.error) {
//         res.status(404).send({
//           error: results.error
//         });
//       } else {
//         res.send({
//           body: results.data
//         });
//       }
//     })
//     .catch(err => res.status(500).send(err));
// });

// //UPDATE
// router.put(`/${VERSION}/todos/:todo_id`, (req, res) => {
//   // The request's body is available in req.body
//   // URL params are available in req.params
//   // If the query is successfull you should send back the full list of items
//   // Add your code here
//   //
//   db(`UPDATE items set text='${req.body.text}', 
//   complete=${req.body.complete} WHERE id=${req.params.todo_id};`)
//     .then(results => {
//       if (results.error) {
//         res.status(404).send({
//           error: results.error
//         });
//       } else {
//         res.send({
//           body: results.data
//         });
//       }
//     })
//     .catch(err => res.status(500).send(err));
// });
// //DELETE
// router.delete(`/${VERSION}/todos/:todo_id`, (req, res) => {
//   // URL params are available in req.params
//   // Add your code here
//   //
//   db(`DELETE FROM items WHERE id=${req.params.todo_id};`)
//     .then(results => {
//       if (results.error) {
//         res.status(404).send({
//           error: results.error
//         });
//       } else {
//         res.send({
//           body: results.data
//         });
//       }
//     })
//     .catch(err => res.status(500).send(err));
// });



module.exports = router;