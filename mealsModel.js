const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const RepasSchema = new Schema({
    Nom: String,
    Calories: Number,
    Proteines: Number,
    Glucides: Number,
    Lipides: Number,
    Date_Of_Today: Date,
});

const MealsModel = mongoose.model('meals', RepasSchema);

module.exports = MealsModel;