import Controller from '../Controller/payment_controller.js';

export default function(app){
    const paymentController= new Controller();
    app.route('/api/payment').get(paymentController.getAllpaymentReceipt);
    app.route('/api/payment/:id').get(paymentController.getPaymentReceiptById)
                                .delete(paymentController.deletePaymentReceiptById)
                      .put(paymentController.updatePaymentReceiptById)
     app.route('/api/payment/register').post(paymentController.payment);
}