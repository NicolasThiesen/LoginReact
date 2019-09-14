const express = require('express');

const app = express();

const {User} = require('./app/models');

// Rotas
app.get('/user',(req,res)=>{}); //Listar Todos
app.post('/register',(req,res)=>{
    const user = await User.create(req.body);
    res.json(user);
}); //criar
app.get('/login/:id',(req,res)=>{}); //pesquisar
app.put('/user/:id',(req,res)=>{}); //update
app.delete('/user/:id',(req,res)=>{}) //deletar

app.use(express.urlencoded({extended:false}));

app.get('/',(req,res)=>{
    return
});


app.listen('3333');


