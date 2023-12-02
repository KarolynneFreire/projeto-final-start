import Painel from '../../componets/Painel/Painel';
import './assets/css/MeusServicos.css'

const MeusServicos = () => {
    const servicos = [
        {
            id: 1,
            titulo: 'Crio dieta para atletas de alto rendimento',
            dataPublicacao: '19/11/2023',
            valor: 'R$ 60',
            status: 'Publicado',
        },
        {
            id: 2,
            titulo: 'Crio dieta focada no emagrecimento',
            dataPublicacao: '19/11/2023',
            valor: 'R$ 50',
            status: 'Publicado',
        },
    ];

    return (
        <div className='container-meus-servicos'>
            <Painel></Painel>
            <div className="pagina-meus-servicos">
                <h2>Meus Serviços</h2>
                <div className="status-servicos">
                    <div className="status-item status-item-ativo" role="button" tabIndex={0}>Ativo (2)</div>
                    <div className="status-item" role="button" tabIndex={0}>Inativo (0)</div>
                    <div className="status-item" role="button" tabIndex={0}>Em análise (0)</div>
                </div>
                <div className="lista-servicos">
                    {servicos.map(servico => (
                        <div key={servico.id} className="cartao-servico">
                            <h3>{servico.titulo}</h3>
                            <div className="detalhes-servico">
                                <p>Data da publicação: {servico.dataPublicacao}</p>
                                <p>Valor: {servico.valor}</p>
                                <p>Status: {servico.status}</p>
                                <div className="acoes-servico">
                                    <button>Editar</button>
                                    <button>Pausar</button>
                                    <button>Excluir</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MeusServicos;