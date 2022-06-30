import { CreateUserController } from "./CreateUserController"

describe('CreateUserController', () =>{
   it('Deve retornar o id', ()=>{
    const createUserController = new CreateUserController;
    const result = createUserController.handle();
   })
})