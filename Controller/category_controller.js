const dal = require('../DBHandler/dalCategory');

exports.getCategory=async function(req,res){
    let result=[];
    result=await dal.getCategory();
    res.send(result);
}

exports.getCategoryById=async function(req,res){
    let result=[];
    result=await dal.getCategoryById(req.params.id);
    res.send(result);
}

exports.deleteCategoryById=async function(req,res){
    let result=[];
    result=await dal.deleteCategoryById(req.params.id);
    res.send(result);
}
exports.updateCategoryById=async function(req,res){
    let result=[];
    result=await dal.updateCategoryById(req,req.params.id);
    res.send(result);
}
exports.categoryRegister=async function(req,res){
    let result=[];
    result=await dal.categoryRegister(req);
    res.send(result);
}
