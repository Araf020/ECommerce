const Product = require('../models/product');
const {request, response} = require("express");
const ErrorHandler = require("../Util/ErrorHandler");
const  catchAsyncErrors = require('../middleware/catchAsyncerrors');


// var express  = require('express');

// express().use(express.json());

//Admin- job

//catch error if anything goes wrong.
exports.createProduct = catchAsyncErrors(async (request, response, next) => {

    console.log("request body: ");
    console.log(request.body);

    const product = await Product.create(request.body);

    response.status(201).json({
        success: true,
        product
    });

});


//get All product
exports.getAllProducts =  catchAsyncErrors(async (request, response, next) => {

    const products = await Product.find();

    response.status(200).json({
        success: true,
        products
    });

});

exports.updateProduct = catchAsyncErrors(async (request, response, next) => {

    const product = await Product.findByIdAndUpdate(request.params.id, request.body, {
        new: true,
        runValidators: true
    });

    if (!product) {
        return next(new ErrorHandler(404, "Product not found"));
    }

    response.status(200).json({
        success: true,
        product
    });

});

/*async (request,response, next) => {
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


}*/

exports.deleteProduct = catchAsyncErrors(async (request, response, next) => {

    const product = await Product.findByIdAndDelete(request.params.id);

    if (!product) {
        return next(new ErrorHandler(404, "Product not found"));
    }

    response.status(200).json({
        success: true,
        product
    });

});

exports.getSingleProductDetails = async (request,response, next) => {
    const product = await Product.findById(request.params.id);

    // if (!product) {
    //     return response.status(500).json({
    //         success: false,
    //         message: "product not found"
    //     });
    // }
    if (!product) {
        return next(new ErrorHandler(404, "product not found!"));
    }

    response.status(200).json({
        success: true,
        product
    });

}


