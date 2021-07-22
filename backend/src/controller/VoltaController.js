const { response } = require('express');
const VoltaModel = require('../model/VoltaModel');

class VoltaController {
    async create(req, res){
        const volta = new VoltaModel(req.body);
        await volta
                .save()
                .then(Response => {
            return res.status(200).json(Response);
        })
        .catch(error => {
            return res.status(500).json(error);
        });
    }

    async update(req, res){
        await VoltaModel.findByIdAndUpdate({'_id': req.params.id}, req.body, { new: true })
        .then(response => {
          return res.status(200).json(response);
        })
        .catch(error => {
          return res.status(500).json(error);
        });
    
    }

    async uppiloto (req, res){
        await VoltaModel.findOneAndUpdate({'nome': req.params.nome}, req.body, {new: true})
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }

    async ultimo(req, res){
        await VoltaModel.findOne({$query: {}, $orderby: {$temperatura : - 1}})
                .sort('when')
                .then(Response => {
                    return res.status(200).json(Response);
                })
                .catch(error => {
                    return res.status(500).json(error);
                })
    }

    async geral(req, res){
        await VoltaModel.find()
                .sort({ field: 'asc', melhor_volta: 1  })
                .then(Response => {
                    return res.status(200).json(Response);
                })
                .catch(error => {
                    return res.status(500).json(error);
                })
    }

    async geralcinco(req, res){
        await VoltaModel.find().limit(5)
                .sort({ field: 'asc', melhor_volta: 1  })
                .then(Response => {
                    return res.status(200).json(Response);
                })
                .catch(error => {
                    return res.status(500).json(error);
                })
    }

    async localpiloto(req, res){
        await VoltaModel.findOne({nome: {'$in': req.params.nome}})
                .sort('when')
                .then(Response => {
                    return res.status(200).json(Response);
                })
                .catch(error => {
                    return res.status(500).json(error);
                })
    }

    async andamento(req, res){
        await VoltaModel.find({$query: {data: '0'}})
                .sort({ field: 'asc', melhor_volta: 1 })
                .then(Response => {
                    return res.status(200).json(Response);
                })
                .catch(error => {
                    return res.status(500).json(error);
                })
    }

    async andamentom(req, res){
        await VoltaModel.find({$query: {data: '0'}}).limit(5)
                .sort({ field: 'asc', melhor_volta: 1 })
                .then(Response => {
                    return res.status(200).json(Response);
                })
                .catch(error => {
                    return res.status(500).json(error);
                })
    }

    async encerrada(req, res){
        await VoltaModel.find({$query: {tempo_corrida: 'PROVA ENCERRADA'}})
                .sort({ field: 'asc', melhor_volta: 1 })
                .then(Response => {
                    return res.status(200).json(Response);
                })
                .catch(error => {
                    return res.status(500).json(error);
                })
    }

}

module.exports = new VoltaController();