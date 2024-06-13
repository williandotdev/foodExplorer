const { Router } = require('express'); // Importa o módulo Router do Express.
const routes = Router(); // Cria uma instância do Router do Express.

// Importa os arquivos de rotas específicas.
const usersRouter = require('./users.routes');
const sessionRoutes = require('./sessions.routes');


// Define os pontos de entrada para as rotas expessíficas
routes.use('/', usersRouter); 
routes.use('/sessions', sessionRoutes);

module.exports = routes; 
