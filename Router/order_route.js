import {response} from 'express';
import orderController from '../Controller/order_controller';

export default function(app){
    app.route('/api/order').get(orderController.getOrder);
    app.route('/api/order/:id').get(orderController.getOrderById)
                                .delete(orderController.deleteOrderById)
                                .put(orderController.updateOrderById)
    app.route('/api/order/register').post(orderController.orderRegister);
}