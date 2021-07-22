const express = require('express');
const router = express.Router();

const AgendaController = require( '../controller/AgendaController');

router.post('/', AgendaController.create); 

router.get('/filter/eventofuturo', AgendaController.eventos);
router.get('/filter/campeonato/:campeonato', AgendaController.campeonato);

module.exports = router;

