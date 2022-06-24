import { axios } from 'axios'

const api = axios.create({
    baseURL:'http://localhost5000'
})

export async function cadastrarPet(Nome){

    const resposta = await api.post({url:'/pets/cadrastar', 
        Nome:Nome});

    return resposta.data;
}

export async function consultarPet(){

    const resposta = await api.get({url:'/pets', 
        Nome:Nome
    });

    return resposta.data;
}