import express, { Request, Response } from 'express';
const server = express();
const usuario = {
    nome: "leo",
    id:5 
};


server.listen(8080, () => {
    console.log("servidor subiu");
})

server.get('/users', (request: Request, response: Response)=>{
    return response.json ({usuario});
})


server.get('/ini', (request: Request, response: Response)=>{
    return response.json({mensagem: "server on!" });
}) 














