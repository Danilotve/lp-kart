const mongoose = require('../config/database');
const Schema = mongoose.Schema;

const VoltaSchema = new Schema({
    nome: {type: String, required: true},
    numero_volta: {type: String, required: true},
    ultima_volta: {type: String, required: true},
    melhor_volta: {type: String, required: true},
    format_melhor_volta: {type: String, required: true},
    tempo_corrida: {type: String, required: true},
    data: {type: String, required: true},
    titulo: {type: String, required: true},
    posicao_geral: {type: String},
    posicao_andamento: {type: String}
    
});

module.exports = mongoose.model('Volta', VoltaSchema);