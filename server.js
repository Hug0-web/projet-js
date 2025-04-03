const express = require('express');
const mongoose = require('mongoose');
const meals = require('./mealsController.js');
const goals = require('./goalsController.js');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const cors = require('cors')

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type']
}));


app.use(express.json());

app.use(meals);

app.use(goals);

const PDO = mongoose.connect(process.env.MONGO_URI).then(() => console.log("base de donnée connecté"));

app.listen(process.env.PORT, () => console.log(`Serveur en écoute sur http://localhost:${process.env.PORT}`));

