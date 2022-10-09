const cartController = require('../Controller/cart_controller');

export default  function (app) {
    app.route('/api/cart').get(cartController.getCart);
    app.route('/api/cart/:id').post(cartController.addToCart)
                              .delete(cartController.removefromcartById)
    app.route('/api/cart/delete').delete(cartController.checkout)
}