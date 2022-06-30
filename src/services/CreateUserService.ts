import { AppDataSource } from "../data-source"
import { Usuario } from "../entity/Usuario";
interface IUsuario{
    nome: string,
    email?: string
}

class CreateUserService {
    async execute ({ nome, email }: IUsuario) {
        const data = [];
        const usuario = await AppDataSource.getRepository(Usuario)
        .createQueryBuilder()
        .insert()
        .into(Usuario)
        .values([
        {
          nome: nome,
          email: email
        },
        
    ])
    .execute()
        return usuario;
        
        
    }
}

export { CreateUserService }



// .where("user.id = : id", { id: 1 })
// .getOne()
