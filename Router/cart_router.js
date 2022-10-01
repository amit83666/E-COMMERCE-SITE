const cartController = require('../Controller/cart_controller');

module.exports = function (app) {
    app.route('/api/user/cart').get(cartController.getCart);
    app.route('/api/user/cart/:id').post(cartController.addToCart)
                              .delete(cartController.removefromcartById)
    app.route('/api/user/cart/delete').delete(cartController.checkout)
                            // .put(cartController.updatecartById);
}