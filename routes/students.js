const express = require('express');
const router = express.Router();
const db = require('../db/mysql');

// GET /students
router.get('/', (req, res) => {
  const query = 'SELECT * FROM student ORDER BY sid ASC';//Query to list student in order of ID
  db.query(query, (err, results) => {
    if (err) throw err;//catch error
    res.render('students', { students: results });
  });
});

module.exports = router;
