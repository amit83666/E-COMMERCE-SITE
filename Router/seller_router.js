const sellerController = require("../Controller/seller_controller");


module.exports = function(app){
    app.route('/api/seller').get(sellerController.getAllSeller);
    app.route('/api/seller/:id').get(sellerController.getSellerById)
                              .delete(sellerController.deleteSellerById)
                              .put(sellerController.updateSellerById);
    app.route('/api/seller/register').post(sellerController.sellerRegister);
}