import dalorderdetail from '../DBHandler/dalOrderDetails.js';

const dal = new dalorderdetail();
export default class orderController {
getOrderDetaila=async function(req, res){
    let result=[];
    result = await dal.getOrderDetaila();
    res.send(result);
}

getOrderDetailsById=async function(req, res){
    let result =[];
    result = await dal.getOrderDetailsById(req.params.id);
    res.send(result);
}

orderdetailsRegister=async function(req, res){
    let result =[];
    result = await dal.orderdetailsRegister(req);
    res.send(result);
}

deleteOrderdetailsById=async function(req, res){
    let result =[];
    result = await dal.deleteOrderdetailsById(req.params.id);
    res.send(result);
}
updateOrderdetailsById=async function(req, res){
    let result =[];
    result = await dal.updateOrderdetailsById(req,req.params.id);
    res.send(result);
}}