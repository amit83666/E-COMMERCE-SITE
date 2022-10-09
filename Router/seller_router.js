const sellerController = require("../Controller/seller_controller");


export default function(app){
    app.route('/api/addseller').get(sellerController.addSeller);
    app.route('/api/seller').get(sellerController.getAllSeller);
    app.route('/api/seller/:id').get(sellerController.getSellerById)
                              .delete(sellerController.deleteSellerById)
                              .put(sellerController.updateSellerById);
    app.route('/api/seller/register').post(sellerController.sellerRegister);
}