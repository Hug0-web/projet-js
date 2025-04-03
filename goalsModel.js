const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ObjectifSchema = new Schema({
    Daily_Calories: Number,
    Proteines: Number,
    Glucides: Number,
    Lipides: Number
});

const GoalsModel = mongoose.model('goals', ObjectifSchema);

module.exports = GoalsModel;

