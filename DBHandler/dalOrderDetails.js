const sql = require('./dbConnection');

exports.getOrderDetaila=function(){
    return new Promise(resolve=>{
        let command=`select * from itemDetails`;
        sql.query(command,(err, rows, fields)=>{
            if(err){console.log('err ', err)}
            resolve(rows);
        })
    })
}

exports.getOrderDetailsById=function(id){
    return new Promise(resolve=>{
        let command = 'select * from itemDetails where orderDetailId='+id;
        sql.query(command,(err, rows, fields)=>{
            if(err){console.log('err ', err)}
            resolve(rows);       
        })
    })
}

exports.deleteOrderdetailsById=function(id){
    return new Promise(resolve=>{
        let command = 'delete from itemDetails where orderDetailId='+id;
        sql.query(command,(err, rows, fields)=>{
            if(err){console.log('err ', err)};
            resolve(rows);
        })
    })
}

//not applicable now
// exports.updateOrderdetailsById = function(req,id){
//     return new Promise(resolve=>{ 
        
//     let command='update itemDetails set orderId,productId=?,quantity=?,amount=? where detailId='+id;
//     let items = req.body;
//     let data = Object.values(items);
//     sql.query(command,data,(err, rows, fields)=>{
//         if(err){console.log('err ', err)};
//             resolve(rows);        
//     })
// })
// }

exports.orderdetailsRegister=function(req){
    return new Promise(resolve=>{
        let items=req.session.cart[0];
        console.log("item ", items);
        let data = Object.values(items);
        console.log("data ",data);
        
        let command =`insert into itemDetails(orderId,productId,quantity,amount) values (?,?,?,?)`;
        sql.query(command,data, (err, rows , fields)=>{
            if(err){
                console.log('err ', err);
            }
            resolve(rows );
        })
    })
}