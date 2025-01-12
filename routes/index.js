const routes = require('express').Router();

const lesson1Controller = require ('./controllers/lesson1');
 
routes.get('/', lesson1Controller.bellaRoute );

routes.get('/Liam', lesson1Controller.liamRoute);
 

module.exports = routes;