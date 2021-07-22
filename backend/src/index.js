const express = require('express');
const cors = require('cors');
const server = express();
server.use(cors());
server.use(express.json());

const TaskRoutes = require('./routes/TaskRoutes');
server.use('/task', TaskRoutes);

const SensorTempUmidRoutes = require('./routes/SensorTempUmidRoutes');
server.use('/sensor', SensorTempUmidRoutes);

const VoltaRoutes = require('./routes/VoltaRoutes');
server.use('/volta', VoltaRoutes);

const AgendaRoutes = require('./routes/AgendaRoutes');
server.use('/agenda', AgendaRoutes);

const ClassificacaoRoutes = require('./routes/ClassificacaoRoutes');
server.use('/classificacao', ClassificacaoRoutes);

const PistaRoutes = require('./routes/PistaRoutes');
server.use('/pista', PistaRoutes);

server.listen(3000, () => {
    console.log('API ONLINE Porta: 3000 - CLASSIFICA');
});




