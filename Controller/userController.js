const { response} = require('express');
const dal =require('../DBHandler/dalUsers');

exports.getAllUsers=async function(req, res){
    let result=[];
    result = await dal.getAllUsers();
    res.send(result);
}

exports.getAllUserById=async function(req, res){
    let result = [];
    result = await dal.getAllUserById(req.params.id);
    res.send(result);
}

//update user
exports.updateUserById=async function(req, res){   
    let result = [];
    result = await dal.updateUserById(req,req.params.id);
    res.send(result);
}
//delete user
exports.deleteById=async function(req, res){
    let result = [];
    result = await dal.deleteById(req.params.id);
    res.send(result);
}
//signup api
exports.userRegister=async function(req, res){
    let result=[];
    result= await dal.userRegister(req);
    res.send("successfully registered ");
}
//login api
exports.userlogin=async function(req, res){
    let result=[];
    let emaill=req.body.userEmail;
    result= await dal.userlogin(req);
    if(result==0) {
        console.log("credential are wrong")
        res.send("credential are wrong...");
    }else{
        console.log('successfully  login',result);
        res.send("successfully login ",emaill);
    }
}

// exports.addToCart=async function(req, res){
//     let result=[];
//     result = await dal.addToCart(req);
//     if(result == undefined){
//         res.send("something went wrong CONTRAINT ERROR");
//     }else{
//     res.send("add to cart successfully...");
//     }
// }

// //get all cart details
// exports.getCartDetail=async function(req, res){
//     let result=[];
//     result = await dal.getCartDetail();
//     console.log("result ", result);
//     if(result == undefined){
//         res.send("something went wrong CONTRAINT ERROR");
//     }else{
//     res.send(result);
//     }
// }



