const express = require('express');
const router = express.Router();
const User = require('../models/user.js');

// display a list of all users
router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.render('users/index.ejs', { users });
    } catch (error) {
        console.log(error);
        res.redirect('/');
    }
})

router.get('/:id', async (req, res) => {
    const userId = req.params.id;
    if (userId === req.session.user._id) {
        res.redirect('/users/' + userId + '/foods');
    }
    try {
        const user = await User.findById(userId);
        const foods = user.pantry;
        const username = user.username;
        const _id = req.session.user._id;
        res.render('users/show.ejs', { user: { username, foods, _id } });
    } catch (error) {
        console.log(error);
        res.redirect('/');
    }
}
)

module.exports = router;