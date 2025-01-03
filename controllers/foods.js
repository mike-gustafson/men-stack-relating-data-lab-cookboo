const express = require('express');
const router = express.Router();
const foodSchema = require('../models/user');
const User = require('../models/user');

router.get('/', async (req, res) => {
    const userId = req.session.user._id;
    try {
        const user = await User.findById(userId);
        const foods = user.pantry;
        res.render('foods/index.ejs', {
            foods
        });
    }
    catch (error) {
        console.log(error);
        res.redirect('/');
    }
});

router.get('/new', (req, res) => {
    res.render('foods/new.ejs');
});

router.post('/', async (req, res) => {
    const userId = req.session.user._id;
    const food = {
        name: req.body.name,
        quantity: req.body.quantity,
    };

    try {
        const user = await User.findById(userId);
        user.pantry.push(food);
        await user.save();
        res.redirect('/users/' + userId + '/foods');
    }
    catch (error) {
        console.log(error);
        res.redirect('/');
    }
});

router.get('/:id', async (req, res) => {
    const userId = req.session.user._id;
    const foodId = req.params.id;
    try {
        const user = await User.findById(userId);
        const food = user.pantry.id(foodId);
        res.render('foods/show.ejs', { food });
    }
    catch (error) {
        console.log(error);
        res.redirect('/');
    }
});

router.get('/:id/edit', async (req, res) => {
    const userId = req.session.user._id;
    const foodId = req.params.id;
    try {
        const user = await User.findById(userId);
        const food = user.pantry.id(foodId);
        res.render('foods/edit.ejs', { food });
    }
    catch (error) {
        console.log(error);
        res.redirect('/');
    }
});

router.put('/:id', async (req, res) => {
    const userId = req.session.user._id;
    const foodId = req.params.id;

    try {
        const user = await User.findById(userId);
        const food = user.pantry.id(foodId);
        food.name = req.body.name;
        food.quantity = req.body.quantity;
        await user.save();
        res.redirect(`/users/${userId}/foods`);
    }
    catch (error) {
        console.log(error);
        res.redirect('/');
    }
});

router.delete('/:id', async (req, res) => {
    const userId = req.session.user._id;
    const foodId = req.params.id;

    try {
        const user = await User.findById(userId);
        user.pantry = user.pantry.filter((food) => food._id.toString() !== foodId);
        await user.save();
        res.redirect(`/users/${userId}/foods`);
    }
    catch (error) {
        console.log(error);
        res.redirect('/');
    }
});

module.exports = router;