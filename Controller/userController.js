const { response} = require('express');
const dal =require('../DBHandler/dalUsers');

exports.getAllUsers=async function(req, res){
    let result=[];
    result = await dal.getAllUsers();
    res.send(result);
}

exports.getAllUserById=async function(req, res){
    let result = [];
    result = await dal.getAllUserById(req.params.id);
    res.send(result);
}
exports.updateUserById=async function(req, res){   
    let result = [];
    result = await dal.updateUserById(req,req.params.id);
    res.send(result);
}
exports.deleteById=async function(req, res){
    let result = [];
    result = await dal.deleteById(req.params.id);
    res.send(result);
}

exports.userRegister=async function(req, res){
    let result=[];
    result= await dal.userRegister(req);
    res.send(result);
}