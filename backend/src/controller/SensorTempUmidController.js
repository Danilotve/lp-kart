const SensorTempUmidModel = require('../model/SensorTempUmidModel');

class SensorTempUmidController {
    async create(req, res){
        const sensor = new SensorTempUmidModel(req.body);
        await sensor
                .save()
                .then(Response => {
            return res.status(200).json(Response);
        })
        .catch(error => {
            return res.status(500).json(error);
        });
    }

    async ultimo(req, res){
        await SensorTempUmidModel.findOne({$query: {}, $orderby: {$temperatura : - 1}})
                .sort('when')
                .then(Response => {
                    return res.status(200).json(Response);
                })
                .catch(error => {
                    return res.status(500).json(error);
                })
    }

    async ultimor(req, res){
        await SensorTempUmidModel.findOne()
                .sort({ field: 'asc', _id: -1  })
                .then(Response => {
                    return res.status(200).json(Response);
                })
                .catch(error => {
                    return res.status(500).json(error);
                })
    }

}

module.exports = new SensorTempUmidController();