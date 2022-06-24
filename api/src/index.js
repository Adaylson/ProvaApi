import 'dotenv/config'
import express from 'express'
import cors from 'cors'

import petcontroller from './controller/petcontroller.js';

const server = express();
server.use(cors());
server.use(express.json());
server.use(petcontroller);

server.listen(process.env.PORT, () => console.log(`API ONLINE NA PORTA ${process.env.PORT}`));



