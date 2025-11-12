const express = require('express');
const router = express.Router();
const Note = require('../models/note');

router.get('/', async (req, res) => {
  try {
    const userId = req.headers.userid;
    const notes = await Note.find({ user: userId });
    res.json(notes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const userId = req.headers.userid;
    const note = new Note({ ...req.body, user: userId });
    await note.save();
    res.status(201).json(note);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const userId = req.headers.userid;
    const note = await Note.findOneAndUpdate(
      { _id: req.params.id, user: userId },
      req.body,
      { new: true }
    );
    res.json(note);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const userId = req.headers.userid;
    await Note.findOneAndDelete({ _id: req.params.id, user: userId });
    res.json({ message: 'Note deleted.' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
