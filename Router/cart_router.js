const cartController = require('../Controller/cart_controller');

module.exports = function (app) {
    app.route('/api/cart').get(cartController.getCart);
    app.route('/api/cart/:id').get(cartController.addToCart)
    //                           .delete(cartController.deletetemcartById)
    //                           .put(cartController.updatecartById);
}