const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.send('Liam Swartz');
});

module.exports = routes;