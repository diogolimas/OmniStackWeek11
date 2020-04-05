const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');
const OngController = require('../src/controllers/OngController');
const IncidentsController = require('../src/controllers/IncidentsController');
const ProfileController = require('../src/controllers/ProfilleController');
const routes = express.Router();
const SessionController = require('../src/controllers/SessionController');

routes.post('/sessions', SessionController.create);


routes.get('/ongs',  OngController.index);
routes.post('/ongs', celebrate({
                        [Segments.BODY]: Joi.object().keys({
                            name: Joi.string().required(),
                            email: Joi.string().required().email(),
                            whatsapp: Joi.string().required().min(10).max(11),
                            uf: Joi.string().required().length(2),
                        })
                    }), OngController.create);

routes.get('/profile', celebrate(
    {
        [Segments.HEADERS]: Joi.object({
            authorization: Joi.string().required(),
        }).unknown()
    }),ProfileController.index);

routes.post('/incidents', IncidentsController.create);
routes.get('/incidents', celebrate({
        [Segments.QUERY]: Joi.object().keys({
            page: Joi.number(),
        }) 
}),IncidentsController.index);
routes.delete('/incidents/:id', celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            id: Joi.number().required(), 
        })
}), IncidentsController.delete )



module.exports = routes