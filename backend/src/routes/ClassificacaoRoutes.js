const express = require('express');
const router = express.Router();

const ClassificacaoController = require( '../controller/ClassificacaoController');

router.post('/', ClassificacaoController.create); 

router.put('/piloto/:piloto', ClassificacaoController.uppiloto);

router.get('/filter/geral', ClassificacaoController.geral);
router.get('/filter/geral/campeonato/:campeonato', ClassificacaoController.geralcampeonato);
router.get('/filter/geral/piloto/:piloto', ClassificacaoController.classificacaopiloto);
router.get('/filter/geral/fullpiloto/:piloto', ClassificacaoController.fullpiloto);

module.exports = router;

