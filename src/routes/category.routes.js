const { Router } = require('express');
const CategoryController = require("../controllers/categoryController");
const ensureAuthenticated = require('../middlewares/ensureAuthenticated');

const CategoryRoutes = Router();
const categoryController = new CategoryController()

CategoryRoutes.use(ensureAuthenticated);

CategoryRoutes.post('/ingredients', categoryController.create);
CategoryRoutes.get('/ingredients', categoryController.index);
CategoryRoutes.put('/ingredients', categoryController.update);
CategoryRoutes.delete('/ingredients', categoryController.delete);


module.exports = CategoryRoutes;