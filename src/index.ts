
import'reflect-metadata';
import express, { Request, Response } from 'express';
import { createConnection } from 'typeorm';


var bodyParser = require('body-parser')
import { router } from './routes';

createConnection();
const server = express();


server.use(bodyParser.json())
server.use(router);
server.use(express.json());

server.listen(8080, () => {
    console.log("servidor subiu");
})















