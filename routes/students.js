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

//Add a Student
router.get('/add', (req, res) => {
    res.render('addStudent', { error: null });
});

router.post('/add', (req, res) => {
    const { sid, name, age } = req.body;
    if (sid.length !== 4 || name.length < 2 || age < 18) {
      return res.render('addStudent', { error: 'Invalid input' });
    }
    const query = 'INSERT INTO student (sid, name, age) VALUES (?, ?, ?)';
    db.query(query, [sid, name, age], (err) => {
      if (err) return res.render('addStudent', { error: 'Student ID already exists' });
      res.redirect('/students');
    });
  });
module.exports = router;
