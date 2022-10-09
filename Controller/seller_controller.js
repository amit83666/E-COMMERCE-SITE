import dalseller from '../DBHandler/dalSeller.js';
const dal = new dalseller();
export default class sellerController {
addSeller=async function(req, res){
    res.render();
}
getAllSeller = async function (req, res) {
    let result = [];
    let session = req.session;
    if (session.user) {
        result = await dal.getAllSeller();
        console.log("see ", result);
        res.send(result);
    } else {
        res.send("please logion first ");
    }
}

getSellerById = async function (req, res) {
    let result = [];
    let session = req.session;
    if (session.user) {
        result = await dal.getSellerById(req.params.id);
        res.send(result);
    } else {
        res.send("please logion first ");
    }
}
updateSellerById = async function (req, res) {
    let result = [];
    let session = req.session;
    if (session.user) {
        result = await dal.updateSellerById(req, req.params.id);
        res.send(result);
    } else {
        res.send("please logion first ");
    }
}
deleteSellerById = async function (req, res) {
    let result = [];
    let session = req.session;
    if (session.user) {
        result = await dal.deleteSellerById(req.params.id);
        res.send(result);
    } else {
        res.send("please logion first ");
    }
}

sellerRegister = async function (req, res) {
    let result = [];
    result = await dal.sellerRegister(req);
    res.send(result);
}}