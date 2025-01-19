// No server.js a gente vai ter as principais rotas dos nossos códigos

/*
1) tipo de rota
2) url (endereço)
HTTP MÉTODOS:
 get: listar
 post: criar;
 put: editar;
 patch: editar um;
 delete: deletar;
*/

/*
Query Params
Route Params: get, put, delete
Body Params: post e put
*/

//importando a biblioteca do express
import express from 'express';
// criando uma variável e passando o express como uma função
const app = express();
app.use(express.json());

const users = []

app.post('/usuarios' , (req, res) =>{
    users.push(req.body);
    res.status(201).json(req.body);
});

// req, res => requisição e resposta
app.get('/usuarios', (req, res) =>{
    res.json(users)
    res.status(200).json(users)
});


app.listen(3000);


/* 
    Criar API de usuarios

    - criar um usuario
    - listar todos os usuarios
    - editar um usuario
    - deletar um usuario
*/