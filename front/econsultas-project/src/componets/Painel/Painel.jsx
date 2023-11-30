import '../Painel/assets/css/Painel.css';

const Painel = () => {
    return (
        <div className="sidebar-profissional">
            <h2>Painel</h2>
            <button className="sidebar-btn-profissional">Criar serviço</button>
            <button className="sidebar-btn-profissional">Meus serviços</button>
            <button className="sidebar-btn-profissional">Avaliações</button>
            <button className="sidebar-btn-profissional">Histórico</button>
        </div>
    )
}

export default Painel