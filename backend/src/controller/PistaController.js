const { response } = require('express');
const PistaModel = require('../model/PistaModel');

class PistaController {
    async create(req, res){
        const pista = new PistaModel(req.body);
        await pista
                .save()
                .then(Response => {
            return res.status(200).json(Response);
        })
        .catch(error => {
            return res.status(500).json(error);
        });
    }

    async uppiloto (req, res){
        await PistaModel.findOneAndUpdate({'piloto_pista': req.params.piloto_pista}, req.body, {new: true})
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }

    //situacao de pista em andamento igual a '0'
    async andamento(req, res){
        await PistaModel.find({$query: {data: '0'}}).limit(5)
                .sort({ field: 'asc', posicao_pista: 1 })
                .then(Response => {
                    return res.status(200).json(Response);
                })
                .catch(error => {
                    return res.status(500).json(error);
                })
    }

    //situacao de pista é igual pista encerrada
    async situacaopista(req, res){
        await PistaModel.find({$query: {data: 'PROVA ENCERRADA'}}).limit(5)
                .sort({ field: 'asc', posicao_pista: 1 })
                .then(Response => {
                    return res.status(200).json(Response);
                })
                .catch(error => {
                    return res.status(500).json(error);
                })
    }

    async localpiloto(req, res){
        await PistaModel.find({piloto_pista: {'$in': req.params.piloto_pista}})
                .sort('when')
                .then(Response => {
                    return res.status(200).json(Response);
                })
                .catch(error => {
                    return res.status(500).json(error);
                })
    }


}

module.exports = new PistaController();