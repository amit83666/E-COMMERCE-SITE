
import dalorder from '../DBHandler/dalOrder.js';

const dal = new dalorder();
export default class orderController {
getOrder=async function(req, res){
    let result=[];
    result = await dal.getOrder();
    res.send(result);
}

getOrderById=async function(req, res){
    let result =[];
    result = await dal.getOrderById(req.params.id);
    res.send(result);
}

orderRegister=async function(req, res){
    let result =[];
    result = await dal.orderRegister(req);
    res.send(result);
}

deleteOrderById=async function(req, res){
    let result =[];
    result = await dal.deleteOrderById(req.params.id);
    res.send(result);
}
updateOrderById=async function(req, res){
    let result =[];
    result = await dal.updateOrderById(req,req.params.id);
    res.send(result);
}}