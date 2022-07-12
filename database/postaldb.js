const mysql = require('mysql');
const connection = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : '@fwichi6!',
  database : 'autocom_db'
});

connection.connect();