import Controller from "../Controller/category_controller.js";

export default function(app){
    const categoryController=new Controller();
    app.route('/api/category').get(categoryController.getCategory);
    app.route('/api/category/:id').get(categoryController.getCategoryById)
                                .delete(categoryController.deleteCategoryById)
                                .put(categoryController.updateCategoryById)
    app.route('/api/category/register').post(categoryController.categoryRegister);
}