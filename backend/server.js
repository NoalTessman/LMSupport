const express = require('express');
const mongoose = require('mongoose');
const app = express();

require('dotenv/config')
//Import Routes
const questionsRoute = require('./routes/questions')

//Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/questions', questionsRoute);
//Routes
app.get('/', (req, res)=>{
    res.send("Successfully loaded");
});

//Connect to DB
mongoose.connect(process.env.DB_CONNECTION,{ useNewUrlParser: true }, ()=> console.log('connected to DB!'))

app.listen(8080);