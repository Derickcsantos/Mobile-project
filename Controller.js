const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
const app=express();
/************************************** */
app.use(bodyParser.json());
/***************************************/
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
const models=require('./models');

app.get('/',(req,res)=>{
    res.send('O servidor está ON!');
});
/* Instanciando modelos de Banco */
let usuario=models.Usuario;

app.post('/criarUsuario',async (req,res)=>{
    let create=await usuario.create({
        nome: req.body.nome,
        password: req.body.password,
        createdAt: new Date(),
        updatedAt: new Date()
    });
});
   app.get('/listarUsuario', async (req,res)=>{
        let read=await usuario.findAll({
            raw:true,
        });
        console.log(read);
    });

    app.get('/atualizarUsuario', async (req,res)=> {
    let update=await usuario.findByPk(req.body.id).then((response)=>{
            response.nome="Flavio";
            response.save();
    });
    console.log(update);
});
       app.get('/deletarUsuario', async (req,res)=> {
        usuario.destroy({
            where: {id:req.body.id}
        });
    });
    
    app.get('/login',async (req,res)=>{
        let response=await usuario.findOne({
            where:{nome:req.body.nome, password: req.body.password}
            
        });
        if(response === null){
            res.send(JSON.stringify('error'));
        }else{
            res.send(response);
        }
    });
    
let port=process.env.PORT || 3000;
app.listen(port,(req,res)=>{
    console.log('Servidor Rodando');
});
