import { axios } from 'axios'

const api = axios.create({
    baseURL:'http://localhost:5000'
})

export async function cadastrarDog(nome) {
    const resp = await api.post('/pets/cadrastar',{nome:nome});
    return resp.data;
}

export async function listarDogs() {
    const resp = await api.get('/pets');
    return resp.data
}


