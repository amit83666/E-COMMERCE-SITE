import dalProduct from '../DBHandler/dalProduct.js';

const dal = new dalProduct();
export default class productController {
getAllProduct=async function(req, res){
    let result=[];
    result = await dal.getAllProduct();
    //res.render('../views/product', {result:result});
    
    //console.log('seller ',result);
    res.send(result);
}

getProductById=async function(req, res){
    let result = [];
    result = await dal.getProductById(req.params.id);
    res.send(result);
}
updateProductById=async function(req, res){   
    let result = [];
    result = await dal.updateProductById(req,req.params.id);
    res.send(result);
}
deleteProductById=async function(req, res){
    let result = [];
    result = await dal.deleteProductById(req.params.id);
    res.send(result);
}
getProductByName=async function(req, res){
    let result = [];
    result =await dal.getProductByName(req.params.name);
    res.send(result);
}
getProductByCategory=async function(req, res){
    let result = [];
    result =await dal.getProductByCategory(req.params.category);
    res.send(result);
}

productRegister=async function(req, res){
    let result=[];
    result= await dal.productRegister(req);
    res.send(result);
}}