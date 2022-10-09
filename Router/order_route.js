import ordController from '../Controller/order_controller.js';

export default function(app){
    const orderController=new ordController();
    app.route('/api/order').get(orderController.getOrder);
    app.route('/api/order/:id').get(orderController.getOrderById)
                                .delete(orderController.deleteOrderById)
                                .put(orderController.updateOrderById)
    app.route('/api/order/register').post(orderController.orderRegister);
}