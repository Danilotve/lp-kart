const mongoose = require('../config/database');
const Schema = mongoose.Schema;

const SensorTempUmidSchema = new Schema({
    temperatura: {type: String, required: true},
    umidade: {type: String, required: true},
    hora: {type: String, required: true}
    
});

module.exports = mongoose.model('Sensortempumidpro', SensorTempUmidSchema);