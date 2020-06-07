import knex from 'knex';
import path from 'path';

//Conexão com o banco
const connection = knex( {
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite'),//ajuda a direcionar os caminhos de arquivos
    },
    useNullAsDefault: true,
})
//
export default connection;