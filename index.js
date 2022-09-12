const express = require('express');
const mongoose = require('mongoose');
const productRouter = require('./routes/index');

//initialize the app
const app = express();

//importing the db key for connection
const db = require('./config/key').MongoURI;

//mongodb connection to the application
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDb connection successful');
    })
    .catch((err) => {
        console.log(err);
    });

//middleware for reading the json object
app.use(express.json());

//router of the api
app.use('/products', productRouter);


app.listen(3000, () => {
    console.log(`Server connected to the port ${3000}`);
})