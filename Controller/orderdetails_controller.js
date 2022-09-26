const dal = require('../DBHandler/dalOrderDetails');

exports.getOrderDetaila=async function(req, res){
    let result=[];
    result = await dal.getOrderDetaila();
    res.send(result);
}

exports.getOrderDetailsById=async function(req, res){
    let result =[];
    result = await dal.getOrderDetailsById(req.params.id);
    res.send(result);
}

exports.orderdetailsRegister=async function(req, res){
    let result =[];
    result = await dal.orderdetailsRegister(req);
    res.send(result);
}

exports.deleteOrderdetailsById=async function(req, res){
    let result =[];
    result = await dal.deleteOrderdetailsById(req.params.id);
    res.send(result);
}
exports.updateOrderdetailsById=async function(req, res){
    let result =[];
    result = await dal.updateOrderdetailsById(req,req.params.id);
    res.send(result);
}