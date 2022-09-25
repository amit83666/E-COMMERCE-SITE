const dal = require('../DBHandler/dalProduct');
//const { response } = require('express');


exports.getAllProduct=async function(req, res){
    let result=[];
    result = await dal.getAllProduct();
    console.log('seller ',result);
    res.send(result);
}

exports.getProductById=async function(req, res){
    let result = [];
    result = await dal.getProductById(req.params.id);
    res.send(result);
}
exports.updateProductById=async function(req, res){   
    let result = [];
    result = await dal.updateProductById(req,req.params.id);
    res.send(result);
}
exports.deleteProductById=async function(req, res){
    let result = [];
    result = await dal.deleteProductById(req.params.id);
    res.send(result);
}

exports.productRegister=async function(req, res){
    let result=[];
    result= await dal.productRegister(req);
    res.send(result);
}