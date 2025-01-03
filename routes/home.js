const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('home', {
    title: 'Home',
    links: [
      { href: '/students', name: 'Students' }
    ]
  });
});

module.exports = router;
