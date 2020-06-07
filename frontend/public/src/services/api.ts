import axios from 'axios';


//Conexão com as requisições do backend
const api = axios.create({
    baseURL: 'http://localhost:3333'
})

export default api;