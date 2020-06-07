//Conexão com o banco
import knex from '../database/connection';
import {Request, Response} from 'express';


//RETORNADO OS ITENS
class ItemsControllers {
    async index(request: Request, response: Response) {
    //SELECT * FROM items
    const items = await knex('items').select('*');

    //Serialização de dados para torná-los mais acessíveis ao usuário
    const serializedItems = items.map(item => {
        return {
            id: item.id,
            title: item.title,
            image_url: `http://192.168.0.12:3333/uploads/${item.image}`,
        };
    });
        return response.json(serializedItems);
}
}
export default ItemsControllers;