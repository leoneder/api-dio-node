import { DataSource } from "typeorm";
export const connectionSource = new DataSource({
    migrationsTableName: 'migrations',
    type: 'sqlite',
    
   
   
   
    database: 'database',
    logging: false,
    synchronize: false,
    name: 'default',
    entities: ['src/entitys/**.entity{.ts,.js}'],
    migrations: ['src/database/migrations/*{.ts,.js}'],
    subscribers: ['src/subscriber/**/*{.ts,.js}'],
});
