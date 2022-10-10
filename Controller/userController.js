
//const dal = require('../DBHandler/dalUsers');
import dalUsers from '../DBHandler/dalUsers.js';
import session from 'express-session';
import jwt from 'jsonwebtoken';
import ejs from 'ejs';

let jwtSecretKey = 'amit';
const dal = new dalUsers();
export default class userController {
    constructor(daluser) {

    }
    landing = function (req, res) {
        res.render('../views/landing');
    }
    signup = function (req, res) {
        res.render('../views/signup');
    }
    login = function (req, res) {
        res.render('../views/login');
    }

    getAllUsers = async function (req, res) {
        let result = [];
       // let session = req.session;
        if (session.user) {
            result = await dal.getAllUsers();
            res.send(result);
        } else {
            res.send("please logion first ");
        }
    }

    getAllUserById = async function (req, res) {
        let result = [];
        let session = req.session;
        if (session.user) {
            result = await dal.getAllUserById(req.params.id);
            res.send(result);
        } else {
            res.send("please logion first ");
        }
    }

    updateUserById = async function (req, res) {
        let result = [];
        let sessionn = req.session;
        let token =req.header('receivedtoken');
        let extractedData=jwt.verify(token,jwtSecretKey)
        //let token =localStorage.getItem('token');
       console.log('hm extracted----------',extractedData);
       console.log('session user---------',sessionn.user);
        //if (session.user) {
        if (extractedData) {
            result = await dal.updateUserById(req, req.params.id);
            res.send(result);
        } else {
            res.send("please logion first ");
        }
    }

    deleteById = async function (req, res) {
        let result = [];
        let session = req.session;
        if (session.user) {
            result = await dal.deleteById(req.params.id);
            res.send(result);
        } else {
            res.send("please logion first ");
        }
    }

    userRegister = async function (req, res) {
        let result = [];
        result = await dal.userRegister(req);
       // res.render('../views/signup', result);
        res.send("successfully registered ");
    }

userlogin = async function (req, res) {
    let result = [];
    req.session.user = [];
    
    let emaill = req.body.userEmail;
    result = await dal.userlogin(req);
    if (result == 0) {
        console.log("credentials are wrong");
        //res.send("credential are wrong...");
    } else {
        let amit = req.session.user.push(emaill);
        console.log("amit ", req.session.user);
        let token = jwt.sign(emaill, jwtSecretKey);
        //res.redirect('/api/product');
        res.status(200).send(token);
    }
    //  res.send("some thing wrong");
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



