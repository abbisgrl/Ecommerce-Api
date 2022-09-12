const express = require('express');
const mongoose = require('mongoose');
const productRouter = require('./routes/index');

const app = express();

const db = require('./config/key').MongoURI;

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDb connection successful');
    })
    .catch((err) => {
        console.log(err);
    });


app.use(express.json());

app.use('/products', productRouter);


app.listen(3000, () => {
    console.log(`Server connected to the port ${3000}`);
})