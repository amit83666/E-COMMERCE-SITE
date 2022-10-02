const sql = require('./dbConnection');

//user point of view
exports.getAllProduct=function(){
    return new Promise(resolve=>{
         let command="select * from e_commerce_site.products";
         sql.query(command,(err, rows, fields)=>{
            if(err){console.log('err', err)}
             resolve(rows);
         })
     }) 
 };

//user point of view
 exports.getProductById=function(id){
  return new Promise(resolve=>{
    let command = `select * from products where productId=`+id;
    sql.query(command,(err, rows, fields)=>{
        if(err){console.log('err', err)}
        resolve(rows);
    })
  })  
}
//seller point of view
exports.deleteProductById=function(id){
        return new Promise(resolve=>{
        let command = `delete from products where productId=`+id;
        sql.query(command,(err, rows, fields)=>{
            if(err){
                console.log('err ', err);
            }
            resolve(rows)
        })
    })
}
//seller point of view
exports.updateProductById=function(req,id){
    return new Promise(resolve=>{
        let items=req.body;
        let dataValue=Object.values(items);
        let command ='update products set productId=?,sellerId=?,productSKU=?,productName=?,productPrice=?,productWeight=?,productTitle=?,productShortDesc=?,productLongDesc=?,productCategoryId=?,productUpdateDate=?,productStock=?,productLocation=? where productId='+id;           
        sql.query(command,dataValue, (err, rows, fields)=>{
            if(err){
                console.log(err);
            }
            resolve(rows);
        })
    })
}
//seller point of view
exports.productRegister=function(req){
    return new Promise(resolve=>{
        let items=req.body;
        let data = Object.values(items);
        let command =`insert into products() values (?,?,?,?,?,?,?,?,?,?,?,?,?)`;
        sql.query(command,data, (err, rows , fields)=>{
            if(err){
                console.log('err ', err);
            }
            resolve(rows );
        })
    })

}
//user point of view
exports.getProductByName=function(title){
    return new Promise(resolve=>{
        let command = `select * from products where title="${title}"`;
        sql.query(command,(err, rows, fields)=>{
        if(err){console.log('err', err)}
        resolve(rows);       
    })
})}
//user point of view
exports.getProductByCategory=function(categoryId){
    return new Promise(resolve=>{
        let command = `select * from products where categoryId=`+ categoryId;
    sql.query(command,(err, rows, fields)=>{
        if(err){console.log('err', err)}
        resolve(rows);       
    })
})}