const mongoose = require('../config/database');
const Schema = mongoose.Schema;

const ClassificacaoSchema = new Schema({
    piloto: {type: String},
    campeonato: {type: String},
    ponto: {type: String},
    posicao: {type: Number}
});

module.exports = mongoose.model('Classificacao', ClassificacaoSchema);