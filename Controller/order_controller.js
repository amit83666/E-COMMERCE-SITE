
import dal from '../DBHandler/dalOrder';

exports.getOrder=async function(req, res){
    let result=[];
    result = await dal.getOrder();
    res.send(result);
}

exports.getOrderById=async function(req, res){
    let result =[];
    result = await dal.getOrderById(req.params.id);
    res.send(result);
}

exports.orderRegister=async function(req, res){
    let result =[];
    result = await dal.orderRegister(req);
    res.send(result);
}

exports.deleteOrderById=async function(req, res){
    let result =[];
    result = await dal.deleteOrderById(req.params.id);
    res.send(result);
}
exports.updateOrderById=async function(req, res){
    let result =[];
    result = await dal.updateOrderById(req,req.params.id);
    res.send(result);
}