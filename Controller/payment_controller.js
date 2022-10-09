import dalpayment from '../DBHandler/dalPayment.js';
const dal = new dalpayment();
export default class paymentController {
getAllpaymentReceipt=async function(req, res){
    let result=[];
    result = await dal.getAllpaymentReceipt();
    console.log('seller ',result);
    res.send(result);
}

getPaymentReceiptById=async function(req, res){
    let result = [];
    result = await dal.getPaymentReceiptById(req.params.id);
    res.send(result);
}
updatePaymentReceiptById=async function(req, res){   
    let result = [];
    result = await dal.updatePaymentReceiptById(req,req.params.id);
    res.send(result);
}
deletePaymentReceiptById=async function(req, res){
    let result = [];
    result = await dal.deletePaymentReceiptById(req.params.id);
    res.send(result);
}

payment=async function(req, res){
    let result=[];
    result= await dal.payment(req);
    let id=req.body

    console.log("result ", result);
    res.send(result);
}}