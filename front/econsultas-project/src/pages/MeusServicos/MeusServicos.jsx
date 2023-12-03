import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Painel from '../../componets/Painel/Painel'
import './assets/css/MeusServicos.css'

const MeusServicos = () => {
    const [servicos, setServicos] = useState([]);
    const [filtroStatus, setFiltroStatus] = useState('Ativo')


    useEffect(() => {
        atualizarListaServicos();
    }, []);

    const atualizarListaServicos = () => {
        axios.get('http://localhost:8081/meus-servicos/1')
            .then(response => {
                setServicos(response.data);
            })
            .catch(error => {
                console.error('Erro ao buscar serviços!', error)
            });
    };

    const excluirServico = (id) => {
        if (window.confirm('Tem certeza que deseja excluir este serviço?')) {
            axios.delete(`http://localhost:8081/excluir-servico/${id}`)
                .then(() => {
                    atualizarListaServicos();
                })
                .catch(error => {
                    console.error('Erro ao excluir serviço!', error)
                })
        }
    }

    const alterarStatusServico = (id, novoStatus) => {
        axios.put(`http://localhost:8081/atualizar-servico/${id}`, { status: novoStatus })
            .then(() => {
                atualizarListaServicos();
            })
            .catch(error => {
                console.error(`Erro ao ${novoStatus === 'Ativo' ? 'reativar' : 'pausar'} serviço!`, error);
            });
    };

    const servicosFiltrados = servicos.filter(servico => servico.status === filtroStatus);

    return (
        <div className='container-meus-servicos'>
            <Painel />
            <div className="pagina-meus-servicos">
                <h2>Meus Serviços</h2>
                <div className="status-servicos">
                    <div 
                        className={`status-item ${filtroStatus === 'Ativo' ? 'status-item-ativo' : ''}`} 
                        onClick={() => setFiltroStatus('Ativo')}
                    >
                        Ativo ({servicos.filter(servico => servico.status === 'Ativo').length})
                    </div>
                    <div 
                        className={`status-item ${filtroStatus === 'Inativo' ? 'status-item-ativo' : ''}`} 
                        onClick={() => setFiltroStatus('Inativo')}
                    >
                        Inativo ({servicos.filter(servico => servico.status === 'Inativo').length})
                    </div>
                </div>

                <div className="lista-servicos">
                    {servicosFiltrados.map(servico => (
                        <div key={servico.ser_id} className="cartao-servico">
                            <h3>{servico.ser_titulo}</h3>
                            <div className="detalhes-servico">
                                <p>Descrição: {servico.ser_descricao}</p>
                                <p>Valor: R$ {servico.ser_valor}</p>
                                <p>Status: {servico.status}</p>
                                <div className="disponibilidade-servico">
                                    <h4>Disponibilidade:</h4>
                                    <ul>
                                        {(servico.disponibilidade || []).map((slot, index) => (
                                            <li key={index}>{slot.dia} às {slot.hora}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="acoes-servico">
                                    {servico.status === 'Ativo' ? (
                                        <button onClick={() => alterarStatusServico(servico.ser_id, 'Inativo')}>Pausar</button>
                                    ) : (
                                        <button onClick={() => alterarStatusServico(servico.ser_id, 'Ativo')}>Reativar</button>
                                    )}
                                    <button onClick={() => excluirServico(servico.ser_id)}>Excluir</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MeusServicos