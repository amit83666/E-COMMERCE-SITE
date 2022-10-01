const userController = require("../Controller/userController");


module.exports = function(app){
    app.route('/api/user').get(userController.getAllUsers);
    app.route('/api/user/:id').get(userController.getAllUserById)
                              .delete(userController.deleteById)
                              .put(userController.updateUserById);
    app.route('/api/user/register').post(userController.userRegister);
    app.route('/api/user/login').post(userController.userlogin);
}