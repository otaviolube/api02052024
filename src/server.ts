import express from 'express';
import UserRouter from './routes/UserRoutes';

const app = express();

app.use(express.json());
app.use(UserRouter)

const port = 3000;

app.get('/', function(req, res){
    return res.json({
        status: "ok",
        messagem: "Requisição enviada com sucesso"
    })
});

app.listen(port, function(){
    console.log("Servidor rodando normalmente na porta " + port);
});