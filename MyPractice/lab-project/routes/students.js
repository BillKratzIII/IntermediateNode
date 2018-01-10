var express = require('express');
var router = express.Router();
var moment = require('moment');

let students = [
  {nameFirst: "Bill", nameLast: "Kratz", email: "william@kratz.com", hireDate: moment("01/01/2016", "MM/DD/YYYY")},
  {nameFirst: "John", nameLast: "Smith", email: "john@smith.com", hireDate: moment("02/02/2000", "MM/DD/YYYY")}  
];

/* GET students listing. */
router.get('/', function(req, res, next) {
     res.render('students', { 
      title: 'Students' ,
      students: students
         
     });
 });

module.exports = router;