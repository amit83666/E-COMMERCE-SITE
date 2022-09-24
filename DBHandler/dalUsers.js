const sql = require('./dbConnection');

exports.getAllUsers=function(){
    return new Promise(resolve=>{
         let command="select * from e_commerce_site.users";
         sql.query(command,(err, rows, fields)=>{
            if(err){console.log('err', err)}
             resolve(rows);
         })
     }) 
 }

 exports.getAllUserById=function(id){
  return new Promise(resolve=>{
    let command = `select * from e_commerce_site.users where userID=${id}`;
    sql.query(command,(err, rows, fields)=>{
        if(err){console.log('err', err)}
        resolve(rows);
    })
  })  
}

exports.deleteById=function(id){
     //sqlMessage: 'Cannot delete or update a parent row: a foreign key constraint fails (`e_commerce_site`.`orders`, CONSTRAINT `FK_user_order` FOREIGN KEY (`orderUserID`) REFERENCES `users` (`userID`))'
    return new Promise(resolve=>{
        let command = `delete from users where userID=${id}`;
        sql.query(command,(err, rows, fields)=>{
            if(err){
                console.log('err ', err);
            }
            resolve(rows)
        })
    })
}

exports.updateUserById=function(req,id){
    return new Promise(resolve=>{
        //const {userID,userEmail,userPassword,userFirstName,userLastName,userCity,userState,userZip,userRegistrationDate,userPhone,userCountry,userAddress}=req.body;
        let items=req.body;
        // let dataProp=[];
        // for (const item in items) {
        //    dataProp.push(item);
        //   }
        let dataValue=Object.values(items);
        
        let command = `update users set userID=?,userEmail=?,userPassword=?,userFirstName=?,userLastName=?,userCity=?,userState=?,userZip=?,userRegistrationDate=?,userPhone=?,userCountry=?,userAddress=? where userID=`+id;
        sql.query(command,dataValue, (err, rows, fields)=>{
            if(err){
                console.log(err);
            }
            resolve(rows);
        })
    })
}

exports.userRegister=function(req){
    return new Promise(resolve=>{
        let items=req.body;
        let data = Object.values(items);
        let command =`insert into users() values (?,?,?,?,?,?,?,?,?,?,?,?)`;
        sql.query(command,data, (err, rows , fields)=>{
            if(err){
                console.log('err ', err);
            }
            resolve(rows);
        })
    })

}