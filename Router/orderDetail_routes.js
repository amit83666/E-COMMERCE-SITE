import Controller from '../Controller/orderdetails_controller.js';

export default function(app){
    const orderdetailController= new Controller();
    app.route('/api/orderDetails').get(orderdetailController.getOrderDetaila);
    app.route('/api/orderDetails/:id').get(orderdetailController.getOrderDetailsById)
                                .delete(orderdetailController.deleteOrderdetailsById)
                                .put(orderdetailController.updateOrderdetailsById)
    app.route('/api/orderDetails/register').post(orderdetailController.orderdetailsRegister);
}