//env variables
const dotenv = require('dotenv');
dotenv.config();

//database
const MongoClient = require('mongodb').MongoClient;

let _client;
let _collection;

const initDatabase = () => {
    MongoClient.connect(process.env.MONGODB_URI, (err, client) => {
        if (err) throw err;
        _client = client
        _collection = _client.db("MongoDB").collection("contacts");
        // dbo.collection("contacts").find().toArray((err, result) => {//   if (err) throw err;//   res.json(result);//   db.close()// });
        console.log("Database Connected")
    });
}

const getCollection = () => {

    return _collection;
}

module.exports = {
    initDatabase,
    getCollection
};