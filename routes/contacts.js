const routes = require('express').Router();
const connect = require('../db/connect');

routes.get('/', (req, res) => {

  const dotenv = require('dotenv');
  dotenv.config();


  connect.getCollection("contacts").find().toArray((err, result) => {
    if (err) throw err;
    res.json(result);
    console.log("Contact Query Is Successful")
  });
});
//res.send('Contacts')

module.exports = routes;