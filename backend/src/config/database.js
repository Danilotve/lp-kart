const mongoose = require( 'mongoose');
require('dotenv').config();

const mongodbSecret = process.env.MONGO;

const url = mongodbSecret;
mongoose.connect(url, { useNewUrlParser: true,
    useUnifiedTopology: true, });
    
module.exports = mongoose;
