const express = require('express');
const connectDB = require('./db/connect.js')
const app = express();
const port = process.env.PORT || 3000;

connectDB();
app.use('/', require('./routes'))

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})

const dotenv = require('dotenv');
dotenv.config();

const MongoClient = require('mongodb').MongoClient;
MongoClient.connect(process.env.MONGODB_URI, function (err, db) {
  if (err) throw err;
  var dbo = db.db("MongoDB");
  dbo.collection("contacts").find().toArray(function (err, result) {
    if (err) throw err;
    console.log(result);
    db.close()

  });
});