import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Usuario } from "./entity/Usuario"


export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "Leo102938",
    database: "postgres",
    synchronize: true,
    logging: false,
    entities: [User, Usuario],
    migrations: [],
    subscribers: [],
})
