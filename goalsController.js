const express = require('express');
const router = express.Router();
const GoalsModel = require('./goalsModel.js');

router.use(express.json());

const getGoals = async () => await GoalsModel.find();

const addGoals = async (Daily_Calories, Proteines, Glucides, Lipides) => {
    const newGoals = new GoalsModel({ Daily_Calories, Proteines, Glucides, Lipides });

    return await newGoals.save();
}

router.post('/goal', async (req, res) => {
    const { Daily_Calories, Proteines, Glucides, Lipides  } = req.body;

    const goal = await addGoals(Daily_Calories, Proteines, Glucides, Lipides);

    res.status(201).json(goal);
})

router.get('/goals', async (req, res) => {
    const goals = await getGoals();

    res.json(goals);
})

module.exports = router;