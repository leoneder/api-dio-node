import { Request, Response } from "express"
import { CreateUserService } from '../services/CreateUserService'


 class CreateUserController{
    async handle(request: Request, response: Response) {
        const nome = request.body.nome;
        const email = request.body.email;
       
        const createUserService = new CreateUserService;
        if (nome.length===0 || email.length===0)
        {
            return response.status(400).json ( {mensagem: "Preencha todos os campos corretamente!"} );    
        }

        const user = await createUserService.execute({nome, email})

        return response.status(201).json ( user );
    }
}

export { CreateUserController }