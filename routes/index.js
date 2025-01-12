const routes = require('express').Router();

const lesson1Controller = require ('./controllers/lesson1');
 
routes.get('/', lesson1Controller.bellaRoute );

routes.get('/liam', lesson1Controller.liamRoute);
 

module.exports = routes;