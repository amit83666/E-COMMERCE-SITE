const dbCon = require('../DBHandler/dbConnection');


exports.getAllCredential=(req, res)=>{
    let commands='select * from auth';
    dbCon.query(commands, (err, row ,field)=>{
        if(err){      
            console.log(err);
        }else{
            console.log(row);
            res.send(row);
        }
    })
}

exports.getAllCredentialById=(req, res)=>{
    let id=req.params.id;
    let commands=`select * from auth where id=${id}`;
    dbCon.query(commands,(err, row, field)=>{
        if(err){
            console.log(err);
        }else{
            console.log(row);
            res.send(row);
        }
    })
}
exports.signUp=(req, res)=>{
    let email=req.body.email;
    let password=req.body.password;
    console.log("body ", req.body);
    let commands=`insert into auth(email, password) values ("${email}", "${password}")`; 
    dbCon.query(commands,(err, row, field)=>{
        if(err){
            console.log(err);
            res.send("something went wrong..");
        }else{
            console.log('successfully signup..',row);
            res.send("dara inserted....");
        }
    })
}
exports.login=(req, res)=>{
    let email=req.body.email;
    let password=req.body.password;
    let commands=`select * from auth where email="${email}" and password="${password}"`; 
    dbCon.query(commands,(err, row, field)=>{
        if(err){
            console.log(err);
            res.send("something went wrong..");
        }else{
            console.log('successfully  login',row);
            res.send(row);
        }
    })
}

exports.deleteById=(req, res)=>{
    let id=req.params.id;
    let commands=`delete from auth where id=${id}`;
    dbCon.query(commands,(err, row, field)=>{
        if(err){
            console.log(err);
        }else{
            console.log(row);
            res.send("data deleted sucessfully...");
        }
    })
}

exports.updateCredentialById=(req, res)=>{
    let email=req.body.email;
    let password=req.body.password;
    let id=req.params.id;
    let commands=`update auth set email="${email}", password="${password}" where id=${id}`;
    dbCon.query(commands,(err, row, field)=>{
        if(err){
            console.log(err);
        }else{
            console.log(row);
            res.send("data updated sucessfully...");
        }
    })
}