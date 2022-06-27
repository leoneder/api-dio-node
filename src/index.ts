import express, { Request, Response } from 'express';
var bodyParser = require('body-parser')
import { router } from './routes';
const server = express();


server.use(bodyParser.json())
server.use(router);
server.use(express.json());

server.listen(8080, () => {
    console.log("servidor subiu");
})















