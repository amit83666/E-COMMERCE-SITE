const sql = require("./dbConnection");

exports.getCategory=function(){
    return new Promise(resolve=>{
        let command="select * from categories";
        sql.query(command,(err, rows, fields)=>{
            if(err){console.log('err', err)};
            resolve(rows);
        })
    })
}

exports.getCategoryById=function(id){
    return new Promise(resolve=>{
        let command = 'select * from categories where categoryId='+id;
        sql.query(command,(err, rows, fields)=>{
            if(err){console.log('err ', err)}
            resolve(rows);       
        })
    })
}

exports.deleteCategoryById=function(id){
    return new Promise(resolve=>{
        let command = 'delete from categories where categoryId='+id;
        sql.query(command,(err, rows, fields)=>{
            if(err){console.log('err ', err)};
            resolve(rows);
        })
    })
}

exports.updateCategoryById = function(req,id){
    return new Promise(resolve=>{
    let command='update categories set category=? where categoryId='+id;
    let items = req.body;
    let data = Object.values(items);
    sql.query(command,data,(err, rows, fields)=>{
        if(err){console.log('err ', err)};
            resolve(rows);        
    })
})
}

exports.categoryRegister=function(req){
    return new Promise(resolve=>{
        let items=req.body;
        let data = Object.values(items);
        let command =`insert into categories(category, sellerId) values (?,?)`;
        sql.query(command,data, (err, rows , fields)=>{
            if(err){
                console.log('err ', err);
            }
            resolve(rows );
        })
    })
}