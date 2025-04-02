const express = require('express');
const app = express();
const mongoose = require('mongoose');
const connexion = require('./server');



app.use(express.json());


const Meals = mongoose.model('Meals', new mongoose.Schema({
    Nom: String,
    Calories: Number,
    Proteine: Number,
    Glucides: Number,
    Lipides: Number,
    Date_Of_Today: Date,
}));

const getMeals = () => Meals.find();

const addMeals = (Nom, Calories, Proteine, Glucides, Lipides, Date_Of_Today) => {
    const newMeals = new Meals({ Nom, Calories, Proteine, Glucides, Lipides, Date_Of_Today });

    return newMeals.save();
}

app.post('/meal', (req, res) => {
   const { Nom, Calories, Proteine, Glucides, Lipides, Date_Of_Today } = req.body;

   const meal = addMeals(Nom, Calories, Proteine, Glucides, Lipides, Date_Of_Today);

   res.status(201, "repas").json(meal);
});

app.get('/meals', (req, res) => {
    const meals = getMeals();
    
    res.json(meals);
});

app.get('/', (req, res) => {
    res.send('hello world');
})



