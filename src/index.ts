import 'reflect-metadata';
import { router } from './routes';
import { AppDataSource } from "./data-source"
//import createConnection from './database';
import express = require('express');

//createConnection();
AppDataSource.initialize()
const server = express();

server.use(express.json())
server.use(router)

server.listen(8080, () => {
    console.log('Servidor on na porta 5000 http://localhost:5000/')
})
// import { AppDataSource } from "./data-source"
// import { User } from "./entity/User"
// import { Usuario } from "./entity/Usuario"


// AppDataSource.initialize().then(async () => {

//     console.log("Inserting a new user into the database...")
//     const user = new User()
//     const usuario = new Usuario;
//     user.firstName = "Timber"
//     user.lastName = "Saw"
//     user.age = 25

//     usuario.nome="leoel"
//     usuario.email="algum@email.com.br"


//     await AppDataSource.manager.save(usuario)
//     //console.log("Saved a new user with id: " + user.id)

//     //console.log("Loading users from the database...")
//     const users = await AppDataSource.manager.find(Usuario)
//     console.log("Loaded users: ", users)

//     //console.log("Here you can setup and run express / fastify / any other framework.")

// }).catch(error => console.log(error))
