
import sql from './dbConnection.js';

export default class orderdal {  
getOrder=function(){
    return new Promise(resolve=>{
        let command=`select * from orders`;
        sql.query(command,(err, rows, fields)=>{
            if(err){console.log('err ', err)}
            resolve(rows);
        })
    })
}

getOrderById=function(id){
    return new Promise(resolve=>{
        let command = 'select * from orders where orderId='+id;
        sql.query(command,(err, rows, fields)=>{
            if(err){console.log('err ', err)}
            resolve(rows);       
        })
    })
}

deleteOrderById=function(id){
    return new Promise(resolve=>{
        let command = 'delete from orders where orderId='+id;

        //firstly delete the item details,.
        sql.query(command,(err, rows, fields)=>{
            if(err){console.log('err ', err)};
            resolve(rows);
        })
    })
}

//not required yet
// exports.updateOrderById = function(req,id){
//     return new Promise(resolve=>{
//         orderId,orderDate,userId,status
//     let command='update orders set  where orderID='+id;
//     let items = req.body;
//     let data = Object.values(items);
//     sql.query(command,data,(err, rows, fields)=>{
//         if(err){console.log('err ', err)};
//             resolve(rows);        
//     })
// })
// }

orderRegister=function(req){
    return new Promise(resolve=>{
        let items=req.body;
        let data = Object.values(items);
        let command =`insert into orders(userId) values (?)`;
        sql.query(command,data, (err, rows , fields)=>{
            if(err){
                console.log('err ', err);
            }
            resolve(rows );
        })
    })
}}