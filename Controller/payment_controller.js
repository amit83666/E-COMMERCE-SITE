const dal = require('../DBHandler/dalPayment');

exports.getAllpaymentReceipt=async function(req, res){
    let result=[];
    result = await dal.getAllpaymentReceipt();
    console.log('seller ',result);
    res.send(result);
}

exports.getPaymentReceiptById=async function(req, res){
    let result = [];
    result = await dal.getPaymentReceiptById(req.params.id);
    res.send(result);
}
exports.updatePaymentReceiptById=async function(req, res){   
    let result = [];
    result = await dal.updatePaymentReceiptById(req,req.params.id);
    res.send(result);
}
exports.deletePaymentReceiptById=async function(req, res){
    let result = [];
    result = await dal.deletePaymentReceiptById(req.params.id);
    res.send(result);
}

exports.payment=async function(req, res){
    let result=[];
    result= await dal.payment(req);
    res.send(result);
}