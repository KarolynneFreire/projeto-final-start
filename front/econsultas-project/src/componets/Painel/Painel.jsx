import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Painel/assets/css/Painel.css';

const Painel = () => {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <div className="sidebar-profissional">
            <h2>Painel</h2>
            <button className="sidebar-btn-profissional" onClick={() => handleNavigation('/home-profissional')}>
                Início
            </button>
            <button className="sidebar-btn-profissional" onClick={() => handleNavigation('/criar-servico-profissional')}>
                Criar serviço
            </button>
            <button className="sidebar-btn-profissional" onClick={() => handleNavigation('/meus-servicos')}>
                Meus serviços
            </button>
            <button className="sidebar-btn-profissional" onClick={() => handleNavigation('/avaliacoes')}>
                Avaliações
            </button>
            <button className="sidebar-btn-profissional" onClick={() => handleNavigation('/historico')}>
                Histórico
            </button>
            <button className="sidebar-btn-profissional" onClick={() => handleNavigation('/meus-rendimentos')}>
                Rendimentos
            </button>
        </div>
    );
}

export default Painel;
