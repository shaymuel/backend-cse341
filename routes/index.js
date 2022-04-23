const routes = require('express').Router();

routes.get('/', (req, res) => {
    res.send('Konnor Mueller')
  })

module.exports = routes;