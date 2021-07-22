const { response } = require('express');
const AgendaModel = require('../model/AgendaModel');
//const moment = require('moment-timezone');
//moment.locale("pt-br");
//(moment(ev.start.toUTCString('pt-BR'))
//const dt = moment().tz('America/Sao_Paulo').format();
//const dt = moment();
const current = new Date();
class AgendaController {
    async create(req, res){
        const agenda = new AgendaModel(req.body);
        await agenda
                .save()
                .then(Response => {
            return res.status(200).json(Response);
        })
        .catch(error => {
            return res.status(500).json(error);
        });
    }

    async eventos(req, res){
        await AgendaModel
                .find({
                    data_evento:{$gte: current}
                })       
                .sort({ field: 'asc', data_evento: 1})
                .then(Response => {
                    return res.status(200).json(Response);
                })
                .catch(error => {
                    return res.status(500).json(error);
                })
    }

    async campeonato(req, res){
        await AgendaModel
            .find({
                'campeonato': {'$in': req.params.campeonato},
                'data_evento':{'$gte': current} 
            }).limit(1)
            .sort({ field: 'asc', data_evento: 1})
            .then(Response => {
                return res.status(200).json(Response);
            })
            .catch(error => {
                return res.status(500).json(error);
            })
    }
}

module.exports = new AgendaController();