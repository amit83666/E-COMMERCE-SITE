import Controller from '../Controller/cart_controller.js';

export default  function (app) {
    const cartController=new Controller();
    app.route('/api/cart').get(cartController.getCart);
    app.route('/api/cart/:id').post(cartController.addToCart)
                              .delete(cartController.removefromcartById)
    app.route('/api/cart/delete').delete(cartController.checkout)
}