const express = require('express');
const mongoose = require('mongoose');
const meals = require('./meals.js');
const dotenv = require('dotenv');
dotenv.config();
const app = express();


app.use(express.json());

app.use('/meals', meals);

app.use('/meal', meals);

const PDO = mongoose.connect(process.env.MONGO_URI).then(() => console.log("base de donnée connecté"));

app.listen(process.env.PORT, () => console.log(`Serveur en écoute sur http://localhost:${process.env.PORT}`));

