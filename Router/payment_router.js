const paymentController = require('../Controller/payment_controller');

export default function(app){
    app.route('/api/payment').get(paymentController.getAllpaymentReceipt);
    app.route('/api/payment/:id').get(paymentController.getPaymentReceiptById)
                                .delete(paymentController.deletePaymentReceiptById)
                      .put(paymentController.updatePaymentReceiptById)
     app.route('/api/payment/register').post(paymentController.payment);
}