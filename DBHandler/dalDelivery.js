const sql = require('./dbConnection');

exports.getDelivery=function(){
    return new Promise(resolve=>{
        let command=`select * from orders`;
        sql.query(command,(err, rows, fields)=>{
            if(err){console.log('err ', err)}
            resolve(rows);
        })
    })
}

exports.getDeliveryStatusById=function(id){
    return new Promise(resolve=>{
        let command = 'select * from orders where orderID='+id;
        sql.query(command,(err, rows, fields)=>{
            if(err){console.log('err ', err)}
            resolve(rows);       
        })
    })
}

exports.deleteOrderById=function(id){
    return new Promise(resolve=>{
        let command = 'delete from orders where orderID='+id;
        sql.query(command,(err, rows, fields)=>{
            if(err){console.log('err ', err)};
            resolve(rows);
        })
    })
}

exports.updateOrderById = function(req,id){
    return new Promise(resolve=>{
    let command='update orders set orderID=?,orderUserID=?,orderAmount=?,orderShipName=?,orderShipAddress=?,orderCity=?,oderState=?,orderZip=?,orderCountry=?,orderPhone=?,orderShipping=?,orderTax=?,orderEmail=?,orderDate=?,orderShipped=?,orderTrackingNo=? where orderID='+id;
    let items = req.body;
    let data = Object.values(items);
    sql.query(command,data,(err, rows, fields)=>{
        if(err){console.log('err ', err)};
            resolve(rows);        
    })
})
}

exports.orderRegister=function(req){
    return new Promise(resolve=>{
        let items=req.body;
        let data = Object.values(items);
        let command =`insert into orders() values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
        sql.query(command,data, (err, rows , fields)=>{
            if(err){
                console.log('err ', err);
            }
            resolve(rows );
        })
    })

}