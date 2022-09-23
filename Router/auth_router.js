const authController = require('../Controller/auth_controller');

module.exports = function (app) {
    app.route('/api/auth').get(authController.getAllCredential);
    app.route('/api/auth/:id').get(authController.getAllCredentialById)
                              .delete(authController.deleteById)
                              .put(authController.updateCredentialById);
    app.route('/api/auth/signup').post(authController.signUp);
    app.route('/api/auth/login').post(authController.login);
}