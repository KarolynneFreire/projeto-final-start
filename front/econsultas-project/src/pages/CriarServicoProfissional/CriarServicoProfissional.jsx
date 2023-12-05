import  { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './assets/css/CriarServicoProfissional.css';
import Painel from '../../componets/Painel/Painel';

const CriarServicoProfissional = () => {
    const navigate = useNavigate();
    const [titulo, setTitulo] = useState('');
    const [valor, setValor] = useState('');
    const [descricao, setDescricao] = useState('');
    const [disponibilidade, setDisponibilidade] = useState([]);

    const horarios = [...Array(24).keys()].map(hour => `${hour.toString().padStart(2, '0')}:00`);
    const diasDaSemana = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'];

    const toggleTimeSlot = (dia, hora) => {
        const chave = { dia, hora };
        let novaDisponibilidade = [...disponibilidade];
    
        const index = novaDisponibilidade.findIndex(slot => slot.dia === dia && slot.hora === hora);
        if (index >= 0) {
            novaDisponibilidade.splice(index, 1);
        } else {
            novaDisponibilidade.push(chave);
        }
    
        setDisponibilidade(novaDisponibilidade);
    };
    

    const handleSubmit = (event) => {
        event.preventDefault();
        const dadosServico = {
            titulo,
            valor,
            descricao,
            proId: 1,
            disponibilidade
        };

        axios.post('http://localhost:8081/criar-servico', dadosServico)
            .then(response => {
                console.log(response.data);
                navigate('/meus-servicos');
            })
            .catch(error => {
                console.error('Houve um erro!', error);
            });
    };

    const renderTimeSlots = () => {
        return horarios.map(hora => (
            <tr key={hora}>
                <td>{hora}</td>
                {diasDaSemana.map(dia => (
                    <td
                        key={dia}
                        className={`celula-disponibilidade ${disponibilidade.some(slot => slot.dia === dia && slot.hora === hora) ? 'selecionado' : ''}`}
                        onClick={() => toggleTimeSlot(dia, hora)}
                    />
                ))}
            </tr>
        ));
    };

    return (
        <div className='container-criar-servico'>
            <Painel />
            <div className="pagina-criar-servico">
                <form className="formulario-criar-servico" onSubmit={handleSubmit}>
                    <input type="text" placeholder="Dê um título atraente ao seu serviço" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
                    <input type="text" placeholder="Valor do seu serviço" value={valor} onChange={(e) => setValor(e.target.value)} />
                    <textarea placeholder="Faça uma breve descrição do seu serviço" value={descricao} onChange={(e) => setDescricao(e.target.value)} />

                    <h3>Disponibilidade</h3>
                    <table className="tabela-disponibilidade">
                        <thead>
                            <tr>
                                <th>Horário</th>
                                {diasDaSemana.map(dia => <th key={dia}>{dia}</th>)}
                            </tr>
                        </thead>
                        <tbody>
                            {renderTimeSlots()}
                        </tbody>
                    </table>

                    <button type="submit">Criar serviço</button>
                </form>
            </div>
        </div>
    );
};

export default CriarServicoProfissional;
