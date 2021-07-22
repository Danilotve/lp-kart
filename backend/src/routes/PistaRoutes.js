const express = require('express');
const router = express.Router();

const PistaController = require( '../controller/PistaController');

router.put('/piloto/:piloto_pista', PistaController.uppiloto);

router.post('/', PistaController.create); 

router.get('/filter/andamento', PistaController.andamento);
router.get('/filter/situacaopista', PistaController.situacaopista);
router.get('/filter/localpiloto/:piloto_pista', PistaController.localpiloto);


module.exports = router;

