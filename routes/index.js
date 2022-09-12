const express = require('express');
const Product = require('../models/Ecommerce');

const route = express.Router();

route.post('/create', async (req, res) => {
    const newProduct = new Product(req.body);
    try {
        const productSave = await newProduct.save();
        res.status(200).json(savedProduct);
    } catch(err) {
        res.status(500).json(err);
    }
});

route.post('/:id',async (req,res)=>{
    try{
       const id = req.params.id;
       const update = req.query;
       const options = {new:true};
       const result = await Product.findByIdAndUpdate(id,update,options);
       res.status(200).json(result);
    }catch(err){
        res.status(500).json(err);
    }
});

route.delete('/:id', async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).json('Product deleted from the database');
    } catch (err){
        res.status(500).json(err);
    }
});

route.get('/',async (req,res)=>{
    try{
        let products = await Product.find();
        res.status(200).json(products);
    }catch (err){
        res.status(500).json(err);
    }
});

module.exports = route;