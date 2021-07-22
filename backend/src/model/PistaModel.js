const mongoose = require('../config/database');
const Schema = mongoose.Schema;

const PistaSchema = new Schema({
    piloto_pista: {type: String},
    posicao_pista: {type: Number},
    ultima_volta: {type: String},
    melhor_volta: {type: String},
    dif_proximo: {type: String},
    dif_lider: {type: String},
    titulo_corrida: {type: String},
    data: {type: String}
});

module.exports = mongoose.model('Pista', PistaSchema);