const express = require('express');
const cors = require('cors');
const server = express();
server.use(cors());
server.use(express.json());

const TaskRoutes = require('./routes/TaskRoutes');
server.use('/task', TaskRoutes);

const SensorTempUmidRoutes = require('./routes/SensorTempUmidRoutes');
server.use('/sensor', SensorTempUmidRoutes);

server.listen(3000, () => {
    console.log('API ONLINE Porta: 3000');
});




