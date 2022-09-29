const {response}= require('express');
const productController = require('../Controller/product_controller');

module.exports=function(app){
    app.route('/api/product').get(productController.getAllProduct);
    app.route('/api/product/:id').get(productController.getProductById)
                                .delete(productController.deleteProductById)
                      .put(productController.updateProductById)
     app.route('/api/product/register').post(productController.productRegister);
}