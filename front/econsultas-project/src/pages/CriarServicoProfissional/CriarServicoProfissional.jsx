import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './assets/css/CriarServicoProfissional.css'
import Painel from '../../componets/Painel/Painel';

const CriarServicoProfissional = () => {
    const [selecionados, setSelecionados] = useState({});
    const navigate = useNavigate()

    const toggleTimeSlot = (dia, hora) => {
        const chave = `${dia}-${hora}`;
        setSelecionados(prevSelecionados => ({
            ...prevSelecionados,
            [chave]: !prevSelecionados[chave]
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/meus-servicos');
    };

    const horarios = [...Array(24).keys()].map(hour => `${hour.toString().padStart(2, '0')}:00`);
    const diasDaSemana = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'];

    const renderTimeSlots = () => {
        return horarios.map(hora => (
            <tr key={hora}>
                <td>{hora}</td>
                {diasDaSemana.map(dia => {
                    const chave = `${dia}-${hora}`
                    return (
                        <td
                            key={dia}
                            className={`celula-disponibilidade ${selecionados[chave] ? 'selecionado' : ''}`}
                            onClick={() => toggleTimeSlot(dia, hora)}
                        />
                    );
                })}
            </tr>
        ));
    };

    return (
        <div className='container-criar-servico'>
            <Painel></Painel>
            <div className="pagina-criar-servico">
                <form className="formulario-criar-servico" onSubmit={handleSubmit}>
                    <h2>Criar novo serviço</h2>
                    <h3>Título do Servico</h3>
                    <input type="text" placeholder="Dê um título atraente ao seu serviço" />
                    <h3>Valor do serviço</h3>
                    <input type="text" placeholder="Valor do seu serviço" />
                    <h3>Descrição</h3>
                    <textarea placeholder="Faça uma breve descrição do seu serviço"></textarea>

                    <h3>Disponibilidade</h3>
                    <table className="tabela-disponibilidade">
                        <thead>
                            <tr>
                                <th>Horário</th>
                                <th>Segunda</th>
                                <th>Terça</th>
                                <th>Quarta</th>
                                <th>Quinta</th>
                                <th>Sexta</th>
                                <th>Sábado</th>
                                <th>Domingo</th>
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
    )
}

export default CriarServicoProfissional
