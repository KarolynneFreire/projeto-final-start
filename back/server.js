const express = require("express");
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
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

app.post('/cadastro', (req, res) => {
    const sql = "INSERT INTO cad_cadastro (`cad_nome`, `cad_email`, `cad_senha`) VALUES (?, ?, ?)";
    const values = [req.body.nome, req.body.email, req.body.senha];
    db.query(sql, values, (err, data) => {
        if (err) {
            return res.json(err);
        }
        return res.json(data);
    });
});

app.post('/login', (req, res) => {
    const sql = "SELECT * FROM cad_cadastro WHERE cad_email = ?";
    const values = [req.body.email];
    db.query(sql, values, (err, results) => {
        if (err) {
            return res.json(err);
        }
        if (results.length > 0) {
            const usuarioEncontrado = results[0];
            if (usuarioEncontrado.cad_senha === req.body.senha) {
                return res.json({ usuario: { nome: usuarioEncontrado.cad_nome, email: usuarioEncontrado.cad_email } });
            }
        }
        return res.json("Credenciais inválidas");
    })
})

app.post('/criar-servico', (req, res) => {
    const { titulo, valor, descricao, proId, disponibilidade } = req.body;
    
    const sqlServico = "INSERT INTO ser_servicos (ser_titulo, ser_valor, ser_descricao, pro_id) VALUES (?, ?, ?, ?)";
    db.query(sqlServico, [titulo, valor, descricao, proId], (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }
        
        const servicoId = result.insertId;

        const sqlDisponibilidade = "INSERT INTO dis_disponibilidade (dis_dia_semana, dis_horario, ser_id) VALUES (?, ?, ?)";
        disponibilidade.forEach(slot => {
            db.query(sqlDisponibilidade, [slot.dia, slot.hora, servicoId], (err, result) => {
                if (err) {
                    console.error('Erro ao inserir disponibilidade:', err);
                }
            });
        });        

        res.status(200).json({ message: "Serviço criado com sucesso", serviceId: servicoId });
    });
});


app.get('/criar-servico', (req, res) => {
    res.send('Endpoint GET /criar-servico (apenas para teste)');
});

app.put('/atualizar-servico/:id', (req, res) => {
    const { status } = req.body;
    const sql = "UPDATE ser_servicos SET status = ? WHERE ser_id = ?";
    db.query(sql, [status, req.params.id], (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }
        return res.status(200).json({ message: "Serviço atualizado com sucesso" });
    });
});


app.get('/meus-servicos/:proId', (req, res) => {
    const sql = `
        SELECT s.*, d.dis_dia_semana, d.dis_horario 
        FROM ser_servicos s
        LEFT JOIN dis_disponibilidade d ON s.ser_id = d.ser_id
        WHERE s.pro_id = ?
    `;

    db.query(sql, [req.params.proId], (err, results) => {
        if (err) {
            return res.status(500).json(err);
        }

        const servicos = results.reduce((acc, current) => {
            const servicoId = current.ser_id;
            if (!acc[servicoId]) {
                acc[servicoId] = { ...current, disponibilidade: [] };
            }
            if (current.dis_dia_semana && current.dis_horario) {
                acc[servicoId].disponibilidade.push({ dia: current.dis_dia_semana, hora: current.dis_horario });
            }
            return acc;
        }, {});

        return res.status(200).json(Object.values(servicos));
    });
});

app.delete('/excluir-servico/:id', (req, res) => {
    const sql = "DELETE FROM ser_servicos WHERE ser_id = ?";
    db.query(sql, [req.params.id], (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }
        return res.status(200).json({ message: "Serviço excluído com sucesso" });
    });
});


app.listen(8081, () => {
    console.log("Servidor rodando na porta 8081");
});
