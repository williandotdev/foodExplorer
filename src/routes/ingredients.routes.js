const { Router } = require('express');
const IngredientsController = require("../controllers/ingredientsController");
const ensureAuthenticated = require('../middlewares/ensureAuthenticated');

const ingredientsRoutes = Router();
const ingredientsController = new IngredientsController()

ingredientsRoutes.use(ensureAuthenticated);

ingredientsRoutes.post('/ingredients', ingredientsController.create);
ingredientsRoutes.get('/ingredients', ingredientsController.index);
ingredientsRoutes.put('/ingredients', ingredientsController.update);
ingredientsRoutes.delete('/ingredients', ingredientsController.delete);


module.exports = ingredientsRoutes;