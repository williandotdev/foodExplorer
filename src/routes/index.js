const { Router } = require('express'); // Importa o módulo Router do Express.
const routes = Router(); // Cria uma instância do Router do Express.

// Importa os arquivos de rotas específicas.
const usersRouter = require('./users.routes');
const sessionRouter = require('./sessions.routes');
const ingredientsRouter = require('./ingredients.routes');
const categoryRouter = require('./category.routes');
const DishRoutes = require('./dish.routes');


// Define os pontos de entrada para as rotas expessíficas
routes.use('/', usersRouter); 
routes.use('/sessions', sessionRouter);
routes.use('/ingredients', ingredientsRouter);
routes.use('/category', categoryRouter);
routes.use('/dish', DishRoutes);

module.exports = routes; 
