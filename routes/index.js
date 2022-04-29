const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.send('Konnor Mueller')
})

routes.use('/home', require('./home'))
routes.use('/contacts', require('./contacts'))

module.exports = routes;