const express = require('express');
const router = express.Router();
const db = require('../db/mysql');

// Get Student Grades
router.get('/', (req, res) => {
    //SQL Query to get Student name,id,module name and grade
    const query = `
    SELECT s.name AS student_name, m.name AS module_name, g.grade
    FROM grade g
    JOIN student s ON g.sid = s.sid
    JOIN module m ON g.mid = m.mid
    ORDER BY s.name ASC, g.grade ASC`;
  db.query(query, (err, results) => {
    if (err) throw err;//throw error
    res.render('grades', { grades: results });
  });
});

module.exports = router;
