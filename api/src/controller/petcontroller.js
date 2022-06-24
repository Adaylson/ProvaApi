import { addPet, listarpets } from "../repository/petrepository.js";
import { Router } from "express";
const server = Router();


server.post('/pets/cadrastar', async (req, resp) => {
    try{
        const novoPet  = req.body
        const petAcionado = await addPet(novoPet);
        resp.send(petAcionado);
    }   catch (err){
        resp.status(400).send({
            erro: err.mensage
        })
    }
    })

    server.get ('/pets' , async (req,resp) =>{
        try{
            const resposta = await listarpets();
            resp.send(resposta);
     
        } catch(err){
     
         resp.status(400)({
             erro:err.message
         })
        }
     
     })

  

export default server;

    

 