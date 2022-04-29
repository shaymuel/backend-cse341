const express = require('express');
const connect = require('./db/connect.js')
const app = express();
const port = process.env.PORT || 3000;

connect.initDatabase();
app.use('/', require('./routes'))

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})