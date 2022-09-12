const express = require('express');
const mongoose = require('mongoose');
const app = express();

const db = require('./config/key').MongoURI;
mongoose.connect(db,{useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log('MongoDb connection successful');
})
.catch((err)=>{
    console.log(err);
})


app.listen(3000,()=>{
    console.log(`Server connected to the port ${3000}`);
})