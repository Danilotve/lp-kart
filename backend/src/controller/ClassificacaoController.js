const { response } = require('express');
const ClassificacaoModel = require('../model/ClassificacaoModel');

class ClassificacaoController {
    async create(req, res){
        const classificacao = new ClassificacaoModel(req.body);
        await classificacao
                .save()
                .then(Response => {
            return res.status(200).json(Response);
        })
        .catch(error => {
            return res.status(500).json(error);
        });
    }

    async geral(req, res){
        await ClassificacaoModel.find()
                .sort('when')
                .then(Response => {
                    return res.status(200).json(Response);
                })
                .catch(error => {
                    return res.status(500).json(error);
                })
    }
    async geralcampeonato(req, res){
        await ClassificacaoModel
            .find({
                'campeonato': {'$in': req.params.campeonato}
            })
            .sort({ field: 'asc', posicao: 1})
            .then(Response => {
                return res.status(200).json(Response);
            })
            .catch(error => {
                return res.status(500).json(error);
            })
    }
    async classificacaopiloto(req, res){
        await ClassificacaoModel
                .find({
                    'piloto': {'$in': req.params.piloto}
                })
                .sort({ field: 'asc', posicao: 1  })
                .then(Response => {
                    return res.status(200).json(Response);
                })
                .catch(error => {
                    return res.status(500).json(error);
                })
    }

    async fullpiloto(req, res){
        await ClassificacaoModel
                .find({'piloto': {'$regex': req.params.piloto}
                })
                .sort({ field: 'asc', posicao: 1  })
                .then(Response => {
                    return res.status(200).json(Response);
                })
                .catch(error => {
                    return res.status(500).json(error);
                })
    }


    async uppiloto (req, res){
        await ClassificacaoModel.findOneAndUpdate({'piloto': req.params.piloto}, req.body, {new: true})
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }

}

module.exports = new ClassificacaoController();