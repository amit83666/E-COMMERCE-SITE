import mysql from 'mysql';

const conURL= {
    host:'localhost',
    user:'root',
    password:'123456',
    database:'e_commerce_site'
}

const connection = mysql.createConnection(conURL);

connection.connect((err)=>{
    if(!err){
        console.log('Database connected successfully....');
    }else{
        console.log('error ', err);
    }
})
export default connection;