const mongoose = require( 'mongoose');
require('dotenv').config();
//const mongodbSecret = process.env.MONGO;
const mongodbSecret = `mongodb+srv://bronx:540soul@devhouse-lqudb.mongodb.net/devhouse?retryWrites=true&w=majority`;
//console.log(process.env.MONGO)

const url = mongodbSecret;
mongoose.connect(url, { useNewUrlParser: true,
    useUnifiedTopology: true, });
    
module.exports = mongoose;
