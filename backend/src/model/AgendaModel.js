const mongoose = require('../config/database');
const Schema = mongoose.Schema;

const AgendaSchema = new Schema({
    titulo: {type: String},
    campeonato: {type: String},
    categoria: {type: String},
    data_evento: {type: Date},
    hora_chegada: {type: String},
    hora_briefing: {type: String},
    resumo: {type: String},
    local: {type: String},
    lastro:{type: String},
    tracado:{type: String}
});

module.exports = mongoose.model('Agenda', AgendaSchema);