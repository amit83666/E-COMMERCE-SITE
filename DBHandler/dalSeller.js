const sql = require('./dbConnection');

exports.getAllSeller=function(){
    return new Promise(resolve=>{
         let command="select * from e_commerce_site.sellers";
         sql.query(command,(err, rows, fields)=>{
            if(err){console.log('err', err)}
             resolve(rows);
         })
     }) 
 };

 exports.getSellerById=function(id){
  return new Promise(resolve=>{
    let command = `select * from sellers where sellerId=${id}`;
    sql.query(command,(err, rows, fields)=>{
        if(err){console.log('err', err)}
        resolve(rows);
    })
  })  
}

exports.deleteSellerById=function(id){
    return new Promise(resolve=>{
        let command = `delete from sellers where sellerId=${id}`;
        sql.query(command,(err, rows, fields)=>{
            if(err){
                console.log('err ', err);
            }
            resolve(rows)
        })
    })
}

exports.updateSellerById=function(req,id){
    return new Promise(resolve=>{
        let items=req.body;
        let dataValue=Object.values(items);
        let command ='update sellers set accountNo=?,gstin=? where sellerId='+id;  
        sql.query(command,dataValue, (err, rows, fields)=>{
            if(err){
                console.log(err);
            }
            resolve(rows);
        })
    })
}

exports.sellerRegister=function(req){
    return new Promise(resolve=>{
        let items=req.body;
        let data = Object.values(items);
        let command =`insert into sellers(sellerId,userId,accountNo,gstin) values (?,?,?,?)`;
        sql.query(command,data, (err, rows , fields)=>{
            if(err){
                console.log('err ', err);
            }
            resolve(rows );
        })
    })
}