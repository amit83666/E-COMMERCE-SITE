const sql = require('./dbConnection');

exports.getAllSeller=function(){
    return new Promise(resolve=>{
         let command="select * from e_commerce_site.seller";
         sql.query(command,(err, rows, fields)=>{
            if(err){console.log('err', err)}
             resolve(rows);
         })
     }) 
 };

 exports.getSellerById=function(id){
  return new Promise(resolve=>{
    let command = `select * from seller where sellerId=${id}`;
    sql.query(command,(err, rows, fields)=>{
        if(err){console.log('err', err)}
        resolve(rows);
    })
  })  
}

exports.deleteSellerById=function(id){
     //sqlMessage: 'Cannot delete or update a parent row: a foreign key constraint fails (`e_commerce_site`.`orders`, CONSTRAINT `FK_user_order` FOREIGN KEY (`orderUserID`) REFERENCES `users` (`userID`))'
    return new Promise(resolve=>{
        let command = `delete from seller where sellerId=${id}`;
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
        let command ='update seller set sellerId=?,comapanyName=?,companyBranch=?,email=?,contactNo=?,location=? where sellerId='+id;
        
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
        let command =`insert into seller() values (?,?,?,?,?,?)`;
        sql.query(command,data, (err, rows , fields)=>{
            if(err){
                console.log('err ', err);
            }
            resolve(rows );
        })
    })

}