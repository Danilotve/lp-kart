const express = require('express');
const router = express.Router();

const SensorTempUmidController = require( '../controller/SensorTempUmidController');

router.post('/', SensorTempUmidController.create); 
router.get('/filter/ultimo', SensorTempUmidController.ultimo);
router.get('/filter/ultimor', SensorTempUmidController.ultimor);

module.exports = router; 