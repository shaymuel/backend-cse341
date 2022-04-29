const mongoose = require('mongoose');

const URI = "mongodb+srv://dbuser:dbpassword@cluster0.lgyud.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const connectDB = async() => {
    await mongoose.connect(URI)
    console.log('Mongo is now connected!')
}

module.exports = connectDB;

