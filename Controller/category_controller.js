import dalcategory from '../DBHandler/dalCategory.js';

const dal = new dalcategory();
export default class paymentController {
getCategory=async function(req,res){
    let result=[];
    result=await dal.getCategory();
    res.send(result);
}

getCategoryById=async function(req,res){
    let result=[];
    result=await dal.getCategoryById(req.params.id);
    res.send(result);
}

deleteCategoryById=async function(req,res){
    let result=[];
    result=await dal.deleteCategoryById(req.params.id);
    res.send(result);
}
updateCategoryById=async function(req,res){
    let result=[];
    result=await dal.updateCategoryById(req,req.params.id);
    res.send(result);
}
categoryRegister=async function(req,res){
    let result=[];
    result=await dal.categoryRegister(req);
    res.send(result);
}
}