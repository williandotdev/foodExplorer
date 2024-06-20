const { Router } = require('express');
const CategoryController = require("../controllers/categoryController");
const ensureAuthenticated = require('../middlewares/ensureAuthenticated');

const CategoryRoutes = Router();
const categoryController = new CategoryController()

CategoryRoutes.use(ensureAuthenticated);

CategoryRoutes.post('/category', categoryController.create);
CategoryRoutes.get('/category', categoryController.index);
CategoryRoutes.put('/category', categoryController.update);
CategoryRoutes.delete('/category', categoryController.delete);


module.exports = CategoryRoutes;