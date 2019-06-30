const express = require('express');
const router = express.Router();

// @route   GET api/contacts
// @desc    Get all users own contacts
// @access  Private (as you have to be logged in)
router.get('/', (req, res) => {
    res.send('Get all contacts');
});

// @route   POST api/contacts
// @desc    Add NEW contacts
// @access  Private (as you have to be logged in)
router.post('/', (req, res) => {
    res.send('Add contact');
});

// @route   PUT api/contacts/:id
// @desc    Update contact
// @access  Private (as you have to be logged in)
router.put('/:id', (req, res) => {
    res.send('Update contact');
});

// @route   DELETE api/contacts/:id
// @desc    Delete contact
// @access  Private (as you have to be logged in)
router.delete('/:id', (req, res) => {
    res.send('Delete contact');
});

module.exports = router;
