//const sql = require('./dbConnection');
import sql from './dbConnection.js';
//const payment = require('./dalPayment');


export default class userdal {                          
    // constructor() {

    // }   
    getAllUsers = function () {
        return new Promise(resolve => {
            let command = "select * from e_commerce_site.users";
            sql.query(command, (err, rows, fields) => {
                if (err) { console.log('err', err) }
                resolve(rows);
            })
        })
    };

    getAllUserById = function (id) {
        return new Promise(resolve => {
            let command = `select * from e_commerce_site.users where userId=${id}`;
            sql.query(command, (err, rows, fields) => {
                if (err) { console.log('err', err) }
                resolve(rows);
            })
        })
    }

    deleteById = function (id) {
        return new Promise(resolve => {
            let command = `delete from users where userId=${id}`;
            sql.query(command, (err, rows, fields) => {
                if (err) {
                    console.log('err ', err);
                }
                resolve(rows)
            })
        })
    }

    updateUserById = function (req, id) {
        return new Promise(resolve => {
            let items = req.body;
            let dataValue = Object.values(items);
            let command = `update users set userEmail=?,userPassword=?,userFullName=?,userContactNo=?,userAddress=?,userRole=? where userId=` + id;
            sql.query(command, dataValue, (err, rows, fields) => {
                if (err) {
                    console.log(err);
                }
                resolve(rows);
            })
        })
    }

    userRegister = function (req) {
        return new Promise(resolve => {
            let items = req.body;
            let data = Object.values(items);
            let command = `insert into users(userEmail,userPassword,userFullName,userContactNo,userAddress,userRole) values (?,?,?,?,?,?)`;
            sql.query(command, data, (err, rows, fields) => {
                if (err) {
                    console.log('err ', err);
                }
                resolve(rows);
            })
        })
    }

    userlogin = function (req) {
        return new Promise(resolve => {
            let email = req.body.userEmail;
            let password = req.body.userPassword;
            console.log("email " + email + " " + password);
            let commands = `select * from users where userEmail="${email}" and userPassword="${password}"`;
            sql.query(commands, (err, rows, field) => {
                if (err) {
                    console.log("error in login ", err);
                }
                resolve(rows);
            })
        })
    }
}

// exports.addToCart = function (req) {
//     return new Promise(resolve => {
//         let items = req.body;
//         let data = Object.values(items);
//         let commands = `insert into cart() values(?,?,?,?)`;
//         sql.query(commands, data, (err, rows, field) => {
//             if (err) {
//                 console.log("error ", err);
//             }
//             resolve(rows);
//         })
//     })
// }

// //get all cart details
// exports.getCartDetail = function() {
//     return new Promise(resolve => {
//         let commands = `select * from cart`;
//         sql.query(commands,(err, rows, field) => {
//             if (err) {
//                 console.log("error ", err);
//             }
//             resolve(rows);
//         })
//     })
// }

// exports.orderplaced= function(){
//     return new Promise(resolve =>{
//         let commands ="select * from payment where"
//     })
// }


