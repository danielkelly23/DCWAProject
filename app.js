

const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('./db/mysql'); // MySQL connection
const mongo = require('./db/mongo'); // MongoDB connection


const app = express();
const PORT = 3004;


app.use(express.static('public'));

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');



// Routes
app.use('/', require('./routes/home'));
app.use('/students', require('./routes/students'));
app.use('/grades', require('./routes/grades'));
app.use('/lecturers', require('./routes/lecturers'));


// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  
});
