const sql = require('./dbConnection');

exports.getAllpaymentReceipt=function(){
    return new Promise(resolve=>{
         let command="select * from e_commerce_site.payment";
         sql.query(command,(err, rows, fields)=>{
            if(err){console.log('err', err)}
             resolve(rows);
         })
     }) 
 };

 exports.getPaymentReceiptById=function(id){
  return new Promise(resolve=>{
    let command = `select * from payment where payId=`+id;
    sql.query(command,(err, rows, fields)=>{
        if(err){console.log('err', err)}
        resolve(rows);
    })
  })  
}

exports.deletePaymentReceiptById=function(id){
        return new Promise(resolve=>{
        let command = `delete from payment where payId=`+id;
        sql.query(command,(err, rows, fields)=>{
            if(err){
                console.log('err ', err);
            }
            resolve(rows)
        })
    })
}

exports.updatePaymentReceiptById=function(req,id){
    return new Promise(resolve=>{
        let items=req.body;
        let dataValue=Object.values(items);
            
        let command ='update payment set payId=?,customerId=?,paymentAmount=?,upi=?,cash=?  where payId='+id;           
        sql.query(command,dataValue, (err, rows, fields)=>{
            if(err){
                console.log(err);
            }
            resolve(rows);
        })
    })
}

exports.payment=function(req){
    return new Promise(resolve=>{
        let items=req.body;
        let data = Object.values(items);
        let command =`insert into payment() values (?,?,?,?,?)`;
        sql.query(command,data, (err, rows , fields)=>{
            if(err){
                console.log('err ', err);
            }
            resolve(rows );
        })
    })

}