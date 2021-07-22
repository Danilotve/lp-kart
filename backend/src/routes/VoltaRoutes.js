const express = require('express');
const router = express.Router();

const VoltaController = require( '../controller/VoltaController');

router.put('/nome/:nome', VoltaController.uppiloto);
router.put('/:id', VoltaController.update);

router.post('/', VoltaController.create); 
router.get('/filter/andamento', VoltaController.andamento);
router.get('/filter/andamentom', VoltaController.andamentom);
router.get('/filter/encerrada', VoltaController.encerrada);

router.get('/filter/geral', VoltaController.geral);
router.get('/filter/geralcinco', VoltaController.geralcinco);

router.get('/filter/localpiloto/:nome', VoltaController.localpiloto);

module.exports = router;

