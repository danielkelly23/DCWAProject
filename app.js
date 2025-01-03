const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('./db/mysql'); // MySQL connection
//const mongo = require('./db/mongo'); // MongoDB connection

const app = express();
const PORT = 3004;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');

// Routes
app.use('/', require('./routes/home'));
app.use('/students', require('./routes/students'));

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  
});
