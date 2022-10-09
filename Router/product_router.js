import Controller from '../Controller/product_controller.js';

export default function(app){
    const productController=new Controller();
    app.route('/api/product').get(productController.getAllProduct);
    app.route('/api/product/:id').get(productController.getProductById)
                                .delete(productController.deleteProductById)
                      .put(productController.updateProductById);
     app.route('/api/productName/:name').get(productController.getProductByName)
     app.route('/api/productCategory/:category').get(productController.getProductByCategory)
     app.route('/api/product/register').post(productController.productRegister);
}