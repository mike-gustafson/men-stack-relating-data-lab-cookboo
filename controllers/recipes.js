const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('This is the recipes page');
});

router.get('/new', (req, res) => {
    res.send('This is the new recipe page');
});

router.post('/', (req, res) => {
    res.send('This is the post route for recipes');
});

router.get('/:recipeId', (req, res) => {
    res.send('This is the show route for recipes');
});

router.get('/:recipeId/edit', (req, res) => {
    res.send('This is the edit route for recipes');
});

router.put('/:recipeId', (req, res) => {
    res.send('This is the put route for recipes');
});

router.delete('/:recipeId', (req, res) => {
    res.send('This is the delete route for recipes');
});

module.exports = router;