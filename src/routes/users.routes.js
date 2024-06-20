const { Router } = require('express');
const UsersController = require('../controllers/userController');
const ensureAuthenticated = require('../middlewares/ensureAuthenticated');

//Inicia as Instâncias
const usersRoutes = Router() // const nomeDaRotaExpessífica = Router();
const usersController = new UsersController()



//Crias as rotas expessíficas 

usersRoutes.post('/users', usersController.create);
usersRoutes.get('/users', usersController.index);
usersRoutes.put('/users', ensureAuthenticated , usersController.update);
usersRoutes.delete('/users', usersController.delete);

module.exports = usersRoutes;