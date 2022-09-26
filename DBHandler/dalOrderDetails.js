const sql = require('./dbConnection');

exports.getOrderDetaila=function(){
    return new Promise(resolve=>{
        let command=`select * from orderdetails`;
        sql.query(command,(err, rows, fields)=>{
            if(err){console.log('err ', err)}
            resolve(rows);
        })
    })
}

exports.getOrderDetailsById=function(id){
    return new Promise(resolve=>{
        let command = 'select * from orderdetails where detailId='+id;
        sql.query(command,(err, rows, fields)=>{
            if(err){console.log('err ', err)}
            resolve(rows);       
        })
    })
}

exports.deleteOrderdetailsById=function(id){
    return new Promise(resolve=>{
        let command = 'delete from orderdetails where detailId='+id;
        sql.query(command,(err, rows, fields)=>{
            if(err){console.log('err ', err)};
            resolve(rows);
        })
    })
}

exports.updateOrderdetailsById = function(req,id){
    return new Promise(resolve=>{ 
    let command='update orderdetails set detailId=?,detailOrderId=?,detailProductId=?,detailName=?,detailPrice=?,detailSKU=?,detailQuantity=? where detailId='+id;
    let items = req.body;
    let data = Object.values(items);
    sql.query(command,data,(err, rows, fields)=>{
        if(err){console.log('err ', err)};
            resolve(rows);        
    })
})
}

exports.orderdetailsRegister=function(req){
    return new Promise(resolve=>{
        let items=req.body;
        let data = Object.values(items);
        let command =`insert into orderdetails() values (?,?,?,?,?,?,?)`;
        sql.query(command,data, (err, rows , fields)=>{
            if(err){
                console.log('err ', err);
            }
            resolve(rows );
        })
    })
}