const Product = require('../models/product');
const {request, response} = require("express");
// var express  = require('express');

// express().use(express.json());

//Admin- job
exports.createProduct = async (request, response, next) => {

    console.log("request body: ");
    console.log(request.body);


    
    const product = await Product.create(request.body);

    response.status(201).json({
        success: true,
        product
    })
  
}

//get All product
exports.getAllProducts =  async (req, res) => {

    const products = await Product.find();
    res.status(200).json({
        success: true,
        products
    });
}

exports.updateProduct = async (request,response, next)=> {
    let product = await Product.findById(request.params.id);

    if (!product){
        return response.status(500).json({
            success:false,
            message:"product not found"
        })
    }
    console.log(request.params.id);

    product = await Product.findByIdAndUpdate(request.params.id, request.body,{

        new: true,
        runValidators: true,
        useFindAndModify: false


    });

    response.status(200).json({
        success:true,
        product
    });
}

exports.deleteProduct = async (request,response, next) => {
    const  product = await Product.findById(request.params.id);

    if (!product){
        return response.status(500).json({
            success:false,
            message: "product not found"
        });


    }

    await product.remove();

    response.status(200).json({
        success:true,
        message: "product deleted"
    });


}


