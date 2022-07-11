var express = require('express');
var router = express.Router();

const mysql = require('mysql');
const connection = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : '@fwichi6!',
  database : 'autocom_db'
});

connection.connect();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('searchbar.html');
});

module.exports = router;
//module.exports = connection;