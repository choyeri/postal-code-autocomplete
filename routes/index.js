var express = require('express');
var router = express.Router();
const db = require('database/postaldb.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('searchbar.html');
});

module.exports = router;
//module.exports = connection;