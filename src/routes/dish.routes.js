const { Router } = require('express');
const DishController = require("../controllers/dishController");
const ensureAuthenticated = require('../middlewares/ensureAuthenticated');

const DishRoutes = Router();
const dishController = new DishController()

DishRoutes.use(ensureAuthenticated);

DishRoutes.post('/dish', dishController.create);
DishRoutes.get('/dish', dishController.index);
DishRoutes.put('/dish', dishController.update);
DishRoutes.delete('/dish', dishController.delete);


module.exports = DishRoutes;