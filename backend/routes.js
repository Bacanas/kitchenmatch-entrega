//importações 
import express from 'express'
import { sqlConfig } from "./config.js"
import sql from 'mssql';

//conexão com MySql (banco)
const pool = new sql.ConnectionPool(sqlConfig)
await pool.connect();
const routes = express.Router();

routes.get('/receitas', async (req,res)=>{
    try{
        const { recordset }  = await pool.query`select * from receitas`
        return res.status(200).json(recordset)
    }
    catch{
        return res.status(501).json('erro ao consultar receitas')
    }
})

routes.get('/ingredientes', async (req,res)=>{
    try{
        const { recordset }  = await pool.query`select * from ingredientes`
        return res.status(200).json(recordset)
    }

    catch{
        return res.status(501).json('erro ao consultar ingredientes')
    }
})

routes.post('/match', async (req, res) => {

    const {ingredientes} = req.body;
    const receitas = []

    try{
        for (let i = 0; i < ingredientes.length; i++) {
            const {recordset} = await pool.query("select r.nome from receitas as r inner join Receitas_ingredientes as ri on ri.ID_Receita = r.id where ri.ID_Ingrediente = 6")
            receitas[i] = recordset
        }
        console.log(receitas)
        return res.status(200).json(receitas)
    }
    catch{
        return res.status(501).json('erro ao consultar receitas')
    }
});

routes.post('/login', async (req, res)=>{
    try {
        const { email, senha } = req.body;
        if(email != null && email != "" && senha != null && senha != "")
        {
            const { recordset } = await pool.query`select id, nome from usuarios where email = ${email} and senha = ${senha}`;
            if(recordset.length == 0)
            {
                return res.status(204).json('usuario ou senha incorreta')
            }

            return res.status(200).json(recordset)
        }
            return res.status(400).json("bad request")
    } 
    catch (error){
        return res.status(500).json('Error on server!')
    }
});

//exportar para o app
export default routes
