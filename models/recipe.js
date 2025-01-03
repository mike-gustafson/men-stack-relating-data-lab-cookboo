const mongoose = require('mongoose');

const ingredientSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    });

const recipeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    ingredients: [
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Ingredient',
        },
    ],
    instructions: {
        type: String,
        required: true,
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    });

const Ingredient = mongoose.model('Ingredient', ingredientSchema);
const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = { Ingredient, Recipe };