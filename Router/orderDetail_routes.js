const {response}= require('express');
const orderdetailController = require('../Controller/orderdetails_controller');

module.exports=function(app){
    app.route('/api/orderDetails').get(orderdetailController.getOrderDetaila);
    app.route('/api/orderDetails/:id').get(orderdetailController.getOrderDetailsById)
                                .delete(orderdetailController.deleteOrderdetailsById)
                                .put(orderdetailController.updateOrderdetailsById)
    app.route('/api/orderDetails/register').post(orderdetailController.orderdetailsRegister);
}