// import { Connection, createConnection, getConnection} from 'typeorm';

// export default async(): Promise<Connection>=>{
//     const defaultOption=await getConnection();
//     return createConnection(
//         Object.assign(defaultOption)
//     )
// }


// import { Connection, createConnection, getConnectionOptions } from 'typeorm';

// export default async(): Promise<Connection> => {
//     const defaultOption = await getConnectionOptions();
//     return createConnection(
//         Object.assign(defaultOption, {
//             database: process.env.NODE_ENV === 'test' ?
//             './src/database/database.test.sqlite' :
//             defaultOption.database
//         })
//     )
// }