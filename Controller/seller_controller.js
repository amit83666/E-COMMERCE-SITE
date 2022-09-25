const dal = require('../DBHandler/dalSeller');
//const { response } = require('express');


exports.getAllSeller=async function(req, res){
    console.log("1-------");
    let result=[];
    result = await dal.getAllSeller();
    console.log('seller ',result);
    res.send(result);
}

exports.getSellerById=async function(req, res){
    let result = [];
    result = await dal.getSellerById(req.params.id);
    res.send(result);
}
exports.updateSellerById=async function(req, res){   
    let result = [];
    result = await dal.updateSellerById(req,req.params.id);
    res.send(result);
}
exports.deleteSellerById=async function(req, res){
    let result = [];
    result = await dal.deleteSellerById(req.params.id);
    res.send(result);
}

exports.sellerRegister=async function(req, res){
    let result=[];
    result= await dal.sellerRegister(req);
    res.send(result);
}