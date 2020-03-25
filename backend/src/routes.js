const express = require('express');

const OngController = require('../src/controllers/OngController');
const IncidentsController = require('../src/controllers/IncidentsController');
const ProfileController = require('../src/controllers/ProfilleController');
const routes = express.Router();
const SessionController = require('../src/controllers/SessionController');

routes.post('/sessions', SessionController.create);


routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.post('/incidents', IncidentsController.create);
routes.get('/incidents', IncidentsController.index);
routes.delete('/incidents/:id', IncidentsController.delete )



module.exports = routes