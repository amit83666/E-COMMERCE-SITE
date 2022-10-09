const categoryController = require("../Controller/category_controller");

export default function(app){
    app.route('/api/category').get(categoryController.getCategory);
    app.route('/api/category/:id').get(categoryController.getCategoryById)
                                .delete(categoryController.deleteCategoryById)
                                .put(categoryController.updateCategoryById)
    app.route('/api/category/register').post(categoryController.categoryRegister);
}