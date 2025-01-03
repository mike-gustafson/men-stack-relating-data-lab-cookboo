const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('This is the ingredients page');
});

router.get('/new', (req, res) => {
    res.send('This is the new ingredient page');
});

router.post('/', (req, res) => {
    res.send('This is the post route for ingredients');
});

router.get('/:ingredientId', (req, res) => {
    res.send('This is the show route for ingredients');
});

router.get('/:ingredientId/edit', (req, res) => {
    res.send('This is the edit route for ingredients');
});

router.put('/:ingredientId', (req, res) => {
    res.send('This is the put route for ingredients');
});

router.delete('/:ingredientId', (req, res) => {
    res.send('This is the delete route for ingredients');
});

module.exports = router;