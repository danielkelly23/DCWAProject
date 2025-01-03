const mysql = require('mysql2');

//Method to allow our app to access our mySQL Database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'proj2024mysql',
});

//Console log if Database is connected
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL');
});

//used a query to make sure i have access to data
/*
connection.query('SELECT * FROM student', (err, results) => {
    if (err) throw err;
    console.log('Students:', results);
  });
*/

module.exports = connection;
 