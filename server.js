import express from 'express';

const app = express();

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

// req, res => requisição e resposta
app.get('/usuarios', (req, res) =>{
    res.send('Ok, deu bom');
});

app.listen(3000);
