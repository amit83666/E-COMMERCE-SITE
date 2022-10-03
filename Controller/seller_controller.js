const dal = require('../DBHandler/dalSeller');

exports.addSeller=async function(req, res){
    res.render();
}
exports.getAllSeller = async function (req, res) {
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

exports.getSellerById = async function (req, res) {
    let result = [];
    let session = req.session;
    if (session.user) {
        result = await dal.getSellerById(req.params.id);
        res.send(result);
    } else {
        res.send("please logion first ");
    }
}
exports.updateSellerById = async function (req, res) {
    let result = [];
    let session = req.session;
    if (session.user) {
        result = await dal.updateSellerById(req, req.params.id);
        res.send(result);
    } else {
        res.send("please logion first ");
    }
}
exports.deleteSellerById = async function (req, res) {
    let result = [];
    let session = req.session;
    if (session.user) {
        result = await dal.deleteSellerById(req.params.id);
        res.send(result);
    } else {
        res.send("please logion first ");
    }
}

exports.sellerRegister = async function (req, res) {
    let result = [];
    result = await dal.sellerRegister(req);
    res.send(result);
}