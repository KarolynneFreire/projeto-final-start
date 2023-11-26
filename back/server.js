const express = require("express");
const mysql = require('mysql');
const cors = require('cors');


const app = express();
app.use(cors ());
app.use(express.json());

const db = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "",
        database: "testeversaofinal"
    });

    db.connect((err) => {
        if (err) {
            console.error('Erro ao conectar ao banco de dados:', err);
            return;
        }
        console.log('Conexão bem-sucedida ao banco de dados!');
    });

    app.post('/cadastro', (req,res)=>{
        const sql = "INSERT INTO cad_cadastro (`cad_nome`,`cad_email`,`cad_senha`) VALUES (?, ?, ?)";
        const values = [
            req.body.nome,
            req.body.email,
            req.body.senha  
        ];
        db.query(sql,values, (err, data)=>{
            if(err){
                return res.json(err);
            }
            return res.json(data);
        })
    });

    app.post('/login', (req,res)=>{
        const sql = "INSERT INTO log_login (`log_nome`,`log_email`,`log_senha`) VALUES (?, ?, ?)";
        const values = [
            req.body.nome,
            req.body.email,
            req.body.senha  
        ];
        db.query(sql,values, (err, data)=>{
            if(err){
                return res.json(err);
            }
            return res.json("Sucesso");
        })
    });

app.listen(8081,()=>{
    console.log("conectando");
})



