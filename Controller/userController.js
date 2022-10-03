const session = require('express-session');
const dal = require('../DBHandler/dalUsers');
const jwt = require('jsonwebtoken');
const ejs = require('ejs');

exports.landing=function(req, res){
    res.render('../views/landing');
}
exports.signup= function(req, res){
res.render('../views/signup');
}
exports.login=function(req, res){
    res.render('../views/login');
    
}

exports.getAllUsers = async function (req, res) {
    let result = [];
    let session = req.session;
    if (session.user) {
        result = await dal.getAllUsers();
        res.send(result);
    } else {
        res.send("please logion first ");
    }
}

exports.getAllUserById = async function (req, res) {
    let result = [];
    let session = req.session;
    if (session.user) {
        result = await dal.getAllUserById(req.params.id);
        res.send(result);
    } else {
        res.send("please logion first ");
    }
}

exports.updateUserById = async function (req, res) {
    let result = [];
    let session = req.session;
    if (session.user) {
        result = await dal.updateUserById(req, req.params.id);
        res.send(result);
    } else {
        res.send("please logion first ");
    }
}

exports.deleteById = async function (req, res) {
    let result = [];
    let session = req.session;
    if (session.user) {
        result = await dal.deleteById(req.params.id);
        res.send(result);
    } else {
        res.send("please logion first ");
    }
}

exports.userRegister = async function (req, res) {
    let result = [];
    result = await dal.userRegister(req);
    res.render('../views/signup',result);
    res.send("successfully registered ");
}
let jwtSecretKey='amit'
exports.userlogin = async function (req, res) {
    let result = [];
    req.session.user = [];
    let emaill = req.body.userEmail;
    result = await dal.userlogin(req);
    if (result == 0) {
        console.log("some wrong");
        //res.send("credential are wrong...");
    } else {
       let amit = req.session.user.push(emaill);
       let token=jwt.sign(emaill,jwtSecretKey);
       //res.redirect('/api/product');
       res.status(200).send(token);
    }
  //  res.send("some thing wrong");
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



