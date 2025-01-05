const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Lecturer = mongoose.model('Lecturer', new mongoose.Schema({
  _id: String,
  name: String,
  did: String,
}));

router.get('/', async (req, res) => {
  try {
    const lecturers = await Lecturer.find().sort({ _id: 1 });
    res.render('lecturers', { lecturers, error: null });
  } catch (err) {
    res.render('lecturers', { lecturers: [], error: 'Failed to load lecturers' });
  }
});

router.get('/delete/:lid', async (req, res) => {
  const lid = req.params.lid;
  const hasModules = await mongoose.connection.db.collection('module').findOne({ lecturer: lid });
  if (hasModules) {
    return res.render('lecturer_error', { error: `Lecturer ${lid} cannot be deleted because they teach modules` });
  }
  await Lecturer.deleteOne({ _id: lid });
  res.redirect('/lecturers');
});

module.exports = router;
