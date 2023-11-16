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
        database: ""
    }
)


app.post('/cadastro', (req,res)=>{
    const sql = "INSERT INTO login (`nome`,`email`,`senha`) VALUES (?)";
    const values = [
        req.body.nome,
        req.body.email,
        req.body.senha
    ]
    db.query(sql,[values], (err, data)=>{
        if(err){
            return res.json("Error");
        }
        return res.json(data);
    }
    )
}
)

app.post('/login', (req,res)=>{
    const sql = " SELECT * FROM login WHERE `email` = ? AND `senha` = ?";
    db.query(sql,[req.body.email,req.body.senha], (err, data)=>{
        if(err){
            return res.json("Error");
        }
        if(data.length > 0){
            return res.json("Sucesso");
        }else{
            return res.json("Falhou");
        }
    }
    )
}
)


app.listen(8081,()=>{
    console.log("conectando");
})



