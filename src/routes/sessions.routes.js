const { Router } = require("express");
const SessionsController = require('../controllers/sessionsController');

const sessionController = new SessionsController();
const sessionRoutes = new Router();

sessionRoutes.post("/", sessionController.create);

module.exports = sessionRoutes;