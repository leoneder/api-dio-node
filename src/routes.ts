import { Router, Request, Response } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
const createUserController = new CreateUserController;
const router = Router();
const usuario = {
    nome: "leo",
    id:5 
};




router.post('/users', createUserController.handle);


export { router };