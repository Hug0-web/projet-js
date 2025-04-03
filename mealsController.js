const express = require('express');
const router = express.Router();
const MealsModel = require('./mealsModel');
const fp = require('lodash/fp');
const cors = require('cors')

router.use(cors());


router.use(express.json());

const getMeals = async () => await MealsModel.find();

const addMeals = async (Nom, Calories, Proteines, Glucides, Lipides, Date_Of_Today) => {
    const newMeals = new MealsModel({ Nom, Calories, Proteines, Glucides, Lipides, Date_Of_Today });

    return await newMeals.save();
}

router.post('/meal', async (req, res) => {
   const { Nom, Calories, Proteines, Glucides, Lipides, Date_Of_Today } = req.body;

   const meal = await addMeals(Nom, Calories, Proteines, Glucides, Lipides, Date_Of_Today);

   res.status(201).json(meal);
});

router.get('/meals', async (req, res) => {
    const meals = await getMeals();

    const sommeCalories = fp.sumBy('Calories', meals);
    const sommeProteines = fp.sumBy('Proteines', meals);
    const sommeGlucides = fp.sumBy('Glucides', meals);
    const sommeLipides = fp.sumBy('Lipides', meals);
    //console.log(sommeCalories, sommeProteines, sommeGlucides, sommeLipides);
    res.json({
        meals,
        totalNutrients: {
            calories: sommeCalories,
            proteines: sommeProteines,
            glucides: sommeGlucides,
            lipides: sommeLipides
        }
    })});

module.exports = router;


